# Image source and licence register

Last reviewed: 28 August 2026

The repository contains image files but, for most existing files, no source URL,
creator, invoice or licence snapshot was committed. A filename or recollection is
not sufficient evidence of usage rights. Existing published files were preserved;
none were removed or replaced during this review.

## Verified Pexels records

The following local files were visually matched to an exact Pexels photo page and
the creator metadata returned by the Pexels API. Individual machine-readable
records are stored in `docs/compliance/image-sources/`. The Pexels licence reviewed
on 28 August 2026 permits free website and blog use and modification, subject to
its listed restrictions (including no implied endorsement and no sale of
unaltered copies).

| Local file | Pexels photo | Creator | Status |
| --- | --- | --- | --- |
| `src/assets/solutions/daily-diary.jpg` | [1166636](https://www.pexels.com/photo/white-and-teal-notebook-1166636/) | Chimene Gaspar | Exact source verified |
| `src/assets/solutions/green-certificate-manager.jpg` | [34293529](https://www.pexels.com/photo/colorful-office-binders-in-storage-shelf-34293529/) | Zulfugar Karimov | Exact source verified |
| `src/assets/blog/political-scientist-reads-a-standard.jpg` | [31139000](https://www.pexels.com/photo/modern-library-archive-storage-room-with-compact-shelving-31139000/) | Eric Lozaga | Exact source verified |
| `src/assets/blog/reading-a-sustainability-report-sceptically.jpg` | [7887850](https://www.pexels.com/photo/smartphone-displaying-a-stock-market-chart-lying-on-documents-next-to-a-laptop-on-the-desk-7887850/) | Leeloo The First | Exact source verified |
| `src/assets/blog/the-95-percent-rule.jpg` | [12234106](https://www.pexels.com/photo/close-up-shot-of-a-person-doing-a-checklist-12234106/) | Daniel Andraski | Exact source verified |

## Creator clues that are not complete source records

Embedded JPEG metadata names the following creators, but an exact source page,
invoice or other licence evidence has not yet been established. These clues must
not be treated as proof of a licence:

| Local file | Embedded metadata |
| --- | --- |
| `src/assets/blog/alphatradezone.jpg` | Copyright: tvision portraits |
| `src/assets/blog/fewer-datapoints-higher-bar.jpg` | Artist: Karolina Grabowska |
| `src/assets/blog/working-with-your-assurance-provider.jpg` | Artist: krukphoto.com; copyright: Yan Krukov |
| `src/assets/solutions/unicorn-writing-assistant.jpg` | Artist: Karolina Grabowska |

## First-party or custom assets requiring ownership evidence

| Files | Status | Required evidence |
| --- | --- | --- |
| `src/assets/firat-barca.jpg`, `apple-touch-icon.png`, `favicon.svg`, `mrfiba-mark.png` | Source record missing | Record photographer/designer or first-party creation and any release needed |
| Remaining files under `src/assets/solutions/` other than the two verified Pexels files above | Source record missing | Record whether each cover/icon is first-party, commissioned, generated or licensed, with the applicable terms |

## Blog covers requiring source records

The following current files under `src/assets/blog/` remain **Source record
missing** (the five verified blog records above are excluded):

`Audit_ESG.jpg`, `ai-esg-efficiency-claims.jpg`,
`ai-in-esg-reporting-assistant-not-author.jpg`, `ai-materiality-judgment.jpg`,
`alphatradezone.jpg`, `automating-esg.jpg`, `california-deadline-slips.jpg`,
`carbon-clean-up.jpg`, `carbon-removal-audit-trail.jpg`, `climate-migration.jpg`,
`emission-factor-nobody-owns.jpg`, `esg-career-after-simplification.jpg`,
`esg-data-quality.jpg`, `fewer-datapoints-higher-bar.jpg`,
`how-to-restate-a-sustainability-figure.jpg`,
`limited-assurance-ai-disclosures.jpg`, `logistics-scope-3.jpg`,
`omnibus-raised-threshold-not-ambition.jpg`, `out-of-scope-not-out-of-question.jpg`,
`reporting-boundary-acquisitions.jpg`, `spend-based-estimate-deadline.jpg`,
`the-question-that-survives-every-framework.jpg`,
`who-audits-the-esg-raters.jpg`, and `working-with-your-assurance-provider.jpg`.

## Going-forward control

`scripts/fetch_image.sh` now saves the selected Pexels photo ID, source page,
photographer and current licence URL under `docs/compliance/image-sources/` whenever
it downloads a new cover. Keep the source record and a dated licence copy. Do not
assume that this proves the provenance of images downloaded before the control was
added.
