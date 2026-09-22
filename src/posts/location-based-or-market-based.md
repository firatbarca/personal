---
title: "Location-Based or Market-Based? Understanding Electricity Emission Factors"
date: 2026-09-22T09:00
tag: ESG
summary: "The same electricity consumption can produce two valid Scope 2 figures. The difference lies not in the arithmetic, but in what each emission factor represents."
cover: /assets/blog/location-based-or-market-based.jpg
---
Imagine your company consumed **100,000 kWh of electricity** during the year.

Your electricity supplier reports a mix of 50% renewable, 30% nuclear and 20% non-renewable electricity, together with a supplier-specific emission factor of **200 g CO₂e/kWh**. The average grid emission factor for the location is **1,000 g CO₂e/kWh**.

Which emission factor should you use?

Potentially both. They represent two different ways of accounting for Scope 2 emissions.

## Location-based accounting follows the grid

The location-based method reflects the average emissions intensity of the grid on which electricity consumption occurs. In this example, the calculation is:

**100,000 kWh × 1,000 g CO₂e/kWh = 100,000,000 g CO₂e**

Since 1,000,000 grams equals one tonne:

**Location-based Scope 2 emissions = 100 t CO₂e**

The supplier fuel mix does not change this calculation. Whether the company purchased renewable electricity, nuclear electricity or another electricity product, the location-based result is based on the relevant grid.

The question being answered is:

> What is the average emissions intensity of the electricity grid where I consumed electricity?

The [GHG Protocol Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance) describes the location-based method as using primarily grid-average emission factor data.

## Market-based accounting follows contractual information

The market-based method reflects emissions associated with the electricity products and contractual instruments a company has chosen. Depending on the market, that information can include supplier-specific emission factors, qualifying electricity contracts, energy attribute certificates, power purchase agreements and residual mix factors.

Market-based accounting is not limited to renewable electricity. Contractual information can also relate to electricity generated from nuclear or fossil sources.

In this example, the supplier provides an emission factor of **200 g CO₂e/kWh**. If that factor applies to the electricity purchased and the underlying contractual information meets the Scope 2 Quality Criteria, the calculation is:

**100,000 kWh × 200 g CO₂e/kWh = 20,000,000 g CO₂e**

Therefore:

**Market-based Scope 2 emissions = 20 t CO₂e**

The market-based question is different:

> What emissions are associated with the electricity product or contractual attributes allocated to my company?

The current guidance sets out [eight Scope 2 Quality Criteria](https://ghgprotocol.org/scope-2-guidance) that contractual instruments must meet before they can support the market-based method. A number printed on a supplier document is not automatically sufficient.

## One consumption figure, two results

The same 100,000 kWh produces:

- **100 t CO₂e** under the location-based method, using **1,000 g CO₂e/kWh**
- **20 t CO₂e** under the market-based method, using **200 g CO₂e/kWh**
- A difference of **80 t CO₂e** between the two reported totals

That does not mean one calculation is right and the other is wrong. The methods answer different accounting questions, and the two results should not be added together.

Under the current guidance, companies with operations in markets where qualifying contractual instruments are available report both location-based and market-based Scope 2 totals. If the market-based method does not apply anywhere in the inventory, only the location-based total is reported. The [full Scope 2 Guidance](https://ghgprotocol.org/sites/default/files/GHG%20Protocol%20Scope%202%20Guidance.pdf) explains how to treat inventories that span both kinds of market.

## What about the 50%, 30% and 20% electricity mix?

The supplier's mix would allocate the 100,000 kWh as:

- **50,000 kWh** renewable electricity
- **30,000 kWh** nuclear electricity
- **20,000 kWh** non-renewable electricity

It may be tempting to reconstruct the supplier's 200 g CO₂e/kWh factor from these percentages. There are several reasons not to do so.

First, **renewable electricity is not one generation technology**. Wind, solar, hydro, geothermal and biomass do not necessarily receive identical treatment, particularly when the accounting boundary differs.

Second, the **1,000 g CO₂e/kWh grid average cannot simply be assigned to the 20% non-renewable portion**. It represents the grid as a whole, not the fossil or non-renewable part of the supplier's portfolio.

Third, the fuel mix alone does not tell us how the supplier calculated its 200 g CO₂e/kWh. We would need to understand:

- the emission factors applied to each source
- the accounting boundary and gases covered
- the treatment of certificates and other contractual attributes
- the reporting period and geographic scope
- whether all electricity supplied is covered
- whether the information meets the Scope 2 Quality Criteria

The GHG Protocol specifically cautions consumers against calculating a supplier-specific emission rate themselves from a fuel mix disclosure, because disclosure rules vary and the result may be inaccurate.

> The methodology behind the number matters as much as the number itself.

## How to identify the method behind a factor

Do not start by asking whether the factor is high or low. A low factor is not automatically market-based, and a high factor is not automatically location-based.

Ask what the factor represents.

If it represents the **average grid where electricity was consumed**, it is generally location-based. Examples include national or regional grid averages and more granular grid emission factors.

If it represents a **specific electricity supplier, product, contractual arrangement or eligible energy attribute**, it may support market-based accounting, subject to the applicable requirements. Examples include supplier-specific emission factors, qualifying renewable electricity contracts, power purchase agreements, Guarantees of Origin, other energy attribute certificates and residual mix factors.

The source label alone is not enough. The methodology, reporting period, geography, contractual attributes and quality of the underlying data all matter.

## What is a residual mix?

A residual mix is used within the market-based framework even though it can resemble an ordinary grid factor.

It represents the electricity supply for which the source has not been demonstrated through cancelled Guarantees of Origin or another reliable tracking mechanism. Removing attributes that have already been claimed helps prevent the same electricity attributes from being counted more than once.

For European markets, the Association of Issuing Bodies publishes annual [European Residual Mix results and methodology](https://www.aib-net.org/facts/european-residual-mix). This is particularly relevant when working with Guarantees of Origin and European electricity disclosure data.

## What does a zero Scope 2 emission factor mean?

Under the Scope 2 generation boundary, sources such as wind, solar and hydro can have zero emissions at the point of generation. Nuclear generation can also have a zero direct emission rate. That does **not** mean these technologies have no greenhouse gas emissions over their full life cycle.

Equipment manufacturing, construction, fuel production, transport and infrastructure can create emissions outside the Scope 2 generation boundary. Some may instead be reported in Scope 3.

Biomass needs separate care. Combustion still produces emissions: biogenic CO₂ is reported separately from the scopes, while CH₄ and N₂O remain within Scope 2. Biomass should therefore not be treated automatically as having a zero Scope 2 factor.

This is another reason to understand the accounting boundary behind an emission factor.

## What does the 80-tonne difference tell us?

It would be easy to write: “Our renewable electricity purchasing reduced our emissions by 80%.” The two Scope 2 calculations alone do not establish that claim.

Location-based and market-based figures are inventory accounting results. Their difference does not, by itself, demonstrate that 80 tonnes of emissions were physically avoided because of the company's purchasing decision.

What we can say precisely is:

> The company reports 100 t CO₂e under the location-based method and 20 t CO₂e under the market-based method.

The 80-tonne difference reflects how emissions are attributed under the two methods. It does not, on its own, quantify a reduction in emissions to the atmosphere. The GHG Protocol discusses that distinction in its [Scope 2 and consequential accounting FAQ](https://ghgprotocol.org/blog/frequently-asked-questions-scope-2-and-electricity-sector-consequential-accounting-public).

## A practical review test

When reviewing an electricity emission factor, ask:

1. Does it describe the grid where electricity was consumed?
2. Does it describe the electricity product or attributes purchased by the company?
3. What period and geography does it cover?
4. Which greenhouse gases and life-cycle stages are included?
5. How were certificates, supplier purchases and residual electricity treated?
6. Does the data meet the methodological requirements of the reporting framework?

Electricity consumption is usually the easy part. Understanding the emission factor is the real work.

## Try the calculators

For a hands-on calculation, use the [Scope 2 calculator](/calculators/scope-2/) to compare location-based and market-based results, or the [Scope 1 calculator](/calculators/scope-1/) to work through stationary combustion, refrigerant leakage and an organisation's own fleet. The tools are practical starting points; verify factors, boundaries and reporting requirements before using a result in a formal inventory.

## A note on the Scope 2 revision

The 2015 Scope 2 Guidance remains the published basis for the requirements described above. GHG Protocol is revising its corporate standards, and its 2025–26 consultation included proposed changes to both the location-based and market-based methods. Those proposals are not yet final requirements.

GHG Protocol published a [summary of Scope 2 consultation feedback](https://ghgprotocol.org/scope-2-public-consultation-feedback) in 2026. Anyone applying the guidance should check the latest primary material before making a reporting decision.

If you want to work through the numbers with your own data, [try the Scope 2 calculator](/calculators/scope-2/). For direct emissions from fuels, refrigerants and an organisation's own fleet, use the [Scope 1 calculator](/calculators/scope-1/). Both are practical starting points, so document your factors and check the results before using them in a formal inventory.

## Further reading

- [GHG Protocol Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance)
- [Full Scope 2 Guidance PDF](https://ghgprotocol.org/sites/default/files/GHG%20Protocol%20Scope%202%20Guidance.pdf)
- [GHG Protocol Corporate Standard](https://ghgprotocol.org/corporate-standard)
- [GHG Protocol Scope 2 consultation feedback](https://ghgprotocol.org/scope-2-public-consultation-feedback)
- [AIB European Residual Mix](https://www.aib-net.org/facts/european-residual-mix)
