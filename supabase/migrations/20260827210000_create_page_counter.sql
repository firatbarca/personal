create schema if not exists private;

create table if not exists private.page_views (
  path text primary key check (path like '/%' and length(path) <= 256),
  views bigint not null default 0 check (views >= 0),
  updated_at timestamptz not null default now()
);

create table if not exists private.counter_rate_windows (
  window_start timestamptz primary key,
  request_count integer not null default 0 check (request_count >= 0)
);

revoke all on schema private from public, anon, authenticated;
revoke all on all tables in schema private from public, anon, authenticated;

create or replace function public.get_page_view_total()
returns bigint
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(sum(views), 0)::bigint
  from private.page_views;
$$;

create or replace function public.record_page_view(request_path text)
returns table (counted boolean, path_views bigint, total bigint)
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_window timestamptz := date_trunc('minute', clock_timestamp());
  current_request_count integer;
  current_path_views bigint;
  current_total bigint;
begin
  if request_path is null
     or request_path not like '/%'
     or length(request_path) > 256 then
    raise exception 'invalid path' using errcode = '22023';
  end if;

  delete from private.counter_rate_windows
  where window_start < current_window - interval '10 minutes';

  insert into private.counter_rate_windows (window_start, request_count)
  values (current_window, 1)
  on conflict (window_start) do update
  set request_count = private.counter_rate_windows.request_count + 1
  returning request_count into current_request_count;

  if current_request_count > 300 then
    select coalesce(sum(views), 0)::bigint
    into current_total
    from private.page_views;

    return query select false, 0::bigint, current_total;
    return;
  end if;

  insert into private.page_views (path, views, updated_at)
  values (request_path, 1, now())
  on conflict (path) do update
  set views = private.page_views.views + 1,
      updated_at = now()
  returning views into current_path_views;

  select coalesce(sum(views), 0)::bigint
  into current_total
  from private.page_views;

  return query select true, current_path_views, current_total;
end;
$$;

revoke all on function public.get_page_view_total() from public, anon, authenticated;
revoke all on function public.record_page_view(text) from public, anon, authenticated;
grant execute on function public.get_page_view_total() to service_role;
grant execute on function public.record_page_view(text) to service_role;
