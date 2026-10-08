---
title: "Waste Data in Practice: What Companies Need to Measure, Calculate and Control"
date: 2026-10-08T09:00:00+02:00
tag: ESG
summary: "A practical guide to measuring waste, calculating diversion and recycling rates, tracing treatment destinations and controlling reporting data."
cover: /assets/blog/waste-data-in-practice.png
---
<style>
  .waste-table-wrap {
    margin: 1.5rem 0 2rem;
    overflow-x: auto;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 4px;
  }
  .waste-table-wrap table {
    width: 100%;
    border-collapse: collapse;
    color: var(--ink-2);
    font-size: 1rem;
    line-height: 1.5;
  }
  .waste-table-wrap th,
  .waste-table-wrap td {
    padding: .8rem 1rem;
    border-top: 1px solid var(--line);
    min-width: 7rem;
    vertical-align: top;
  }
  .waste-table-wrap th:first-child,
  .waste-table-wrap td:first-child {
    min-width: 10rem;
    text-align: left;
  }
  .waste-table-wrap thead th {
    border-top: 0;
    color: var(--soft);
    background: var(--accent-soft);
    font-size: .78rem;
    font-weight: 700;
    letter-spacing: .04em;
  }
  .waste-table-wrap tbody tr:nth-child(even) {
    background: rgba(255, 255, 255, .28);
  }
</style>

Waste data can look simple.

A company generates waste. A waste contractor collects it. The company receives a report showing how many tonnes were handled.

But reliable waste reporting is usually more complicated.

The difficult questions are often:

- What exactly counts as waste?
- How much waste was generated?
- Was it hazardous or non-hazardous?
- Was it prepared for reuse, recycled, otherwise recovered or disposed of?
- Do we know the final destination?
- Was the quantity weighed or estimated?
- Can the reported number be traced back to evidence?

These questions matter because waste information supports sustainability reporting, circular economy management and environmental data controls.

Two important reporting references are [GRI 306: Waste 2020](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/) and [ESRS E5: Resource Use and Circular Economy](https://knowledgehub.efrag.org/eng/interactive/simplified-esrs/esrs-e5/delegated-act).

**Reporting framework note — 8 October 2026:** The EFRAG link above presents the revised 2026 ESRS E5. [Regulation (EU) 2026/1563](https://eur-lex.europa.eu/eli/reg_del/2026/1563/oj/eng) enters into force on 10 November 2026 and applies to financial years beginning on or after 1 January 2027, with an option to apply the revised standards for financial years beginning in 2026. This article distinguishes those requirements from the original 2023 ESRS E5. Companies should identify the version they apply and consider the relevant scope and materiality requirements. GRI topic disclosures also depend on materiality and their relevance to the organisation’s impacts.

## 1. Start with waste generated

The first basic metric is:

**Total waste generated**

This means the amount of waste produced by the organisation during the reporting period, within the defined reporting boundary.

Under the [EU Waste Framework Directive](https://eur-lex.europa.eu/eli/dir/2008/98/2025-10-16/eng), waste is a substance or object that its holder discards, intends to discard or is required to discard.

Not every production residue is automatically waste. The applicable rules for by-products and end-of-waste status need to be considered. Reusing a product that has never become waste is also different from preparing waste for reuse.

GRI 306-3 requires total waste generated to be reported in metric tonnes, with a breakdown by composition and contextual information explaining the data and how it was compiled. It covers waste generated in the organisation’s own activities; available upstream and downstream waste data can be reported separately. Effluent is excluded unless national legislation requires its inclusion in total waste.

For example, assume a company generates:

**120 tonnes of waste**

The company identifies:

- **12 tonnes of hazardous waste**
- **108 tonnes of non-hazardous waste**

The basic check is:

**12 + 108 = 120 tonnes**

The detailed waste categories could include paper and cardboard, plastic, metal, glass, food waste, wood, electronic waste, chemicals, oils and batteries.

The categories should reflect the company’s actual waste streams and applicable reporting requirements. GRI recognises that composition can be described through waste types, waste streams or materials contained in the waste.

## 2. Hazardous and non-hazardous waste

Not all waste carries the same environmental risk.

In the European Union, hazardous waste is subject to stricter controls because it poses greater risks to human health and the environment. Classification should follow the applicable legal rules and waste codes; a material name alone does not necessarily establish whether a waste stream is hazardous.

See the [European Commission’s Waste Framework Directive guidance](https://environment.ec.europa.eu/topics/waste-and-recycling/waste-framework-directive_en).

A company should not report only one total waste number where the applicable framework requires hazardous and non-hazardous waste separately.

For our example:

**Hazardous waste: 12 ÷ 120 × 100 = 10%**

**Non-hazardous waste: 108 ÷ 120 × 100 = 90%**

These percentages describe the waste generated. They do not explain how it was treated.

## 3. What happened to the waste?

After identifying how much waste was generated, the next question is:

**What happened to it?**

GRI 306 separates waste into two reporting groups:

- Waste diverted from disposal
- Waste directed to disposal

For waste diverted from disposal, GRI 306-4 distinguishes:

1. Preparation for reuse
2. Recycling
3. Other recovery operations

For waste directed to disposal, GRI 306-5 distinguishes:

1. Incineration with energy recovery
2. Incineration without energy recovery
3. Landfilling
4. Other disposal operations

**Under GRI 306, incineration with energy recovery is reported as disposal.** It should not be included in the GRI diversion total.

GRI also requires hazardous and non-hazardous quantities, with onsite and offsite breakdowns for each recovery or disposal operation.

See [GRI 306: Waste 2020](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/).

## 4. A practical example

Assume our fictional company generates **120 tonnes of waste** and records the following outcomes:

<div class="waste-table-wrap" tabindex="0" role="region" aria-label="Scrollable waste data table">

| Classification | Tonnes |
| --- | ---: |
| Preparation for reuse | 10 |
| Recycling | 60 |
| Other recovery | 20 |
| Directed to disposal | 25 |
| Final destination unknown | 5 |
| Total | 120 |

</div>

For this example, assume all quantities relate to the same waste generated during the reporting period, use a consistent measurement basis, and involve no opening or closing waste inventory differences or changes in mass. Each quantity appears in only one category.

The **20 tonnes of other recovery** are assumed to qualify under the reporting framework used. For a GRI-based calculation, they exclude incineration with energy recovery.

Total waste diverted from disposal is:

**10 + 60 + 20 = 90 tonnes**

The overall reconciliation is:

**90 + 25 + 5 = 120 tonnes**

In practice, differences should be investigated. Possible explanations include missing records, changes in stored waste, timing differences, measurement differences, moisture changes, losses or other physical changes.

Waste awaiting treatment and waste with an unknown destination should be tracked as separate data attributes. They can overlap, so they should not automatically be added together as separate quantities.

## 5. Calculating the waste diversion rate

A useful metric is the percentage of waste diverted from disposal:

**Waste diverted from disposal ÷ Total waste generated × 100**

Using our example:

**90 ÷ 120 × 100 = 75%**

This means that 75% of the waste generated was directed to preparation for reuse, recycling or another qualifying recovery route in this simplified example.

It does not mean that 75% was recycled.

Only **60 tonnes** were classified as recycling:

**60 ÷ 120 × 100 = 50%**

The company therefore has a **75% diversion rate** and a **50% recycling rate**.

These are different metrics. The reporting framework and classification rules should be stated alongside them.

## 6. Calculating the disposal rate

The disposal percentage can be calculated as:

**Waste directed to disposal ÷ Total waste generated × 100**

Using our example:

**25 ÷ 120 × 100 = 20.83%**

The share with an unknown final destination is:

**5 ÷ 120 × 100 = 4.17%**

The results are:

- **75.00% diverted from disposal**
- **20.83% directed to disposal**
- **4.17% with an unknown final destination**

**Total: 100%**

The recycling rate is a component of the diversion rate. It should not be added again when reconciling these three categories.

## 7. Unknown final destination matters

A company may know that a contractor collected its waste without having reliable information about its final treatment.

For example, an invoice shows **5 tonnes of mixed waste collected**, but the company does not know whether those tonnes were recycled, otherwise recovered, incinerated or landfilled.

The waste should not be classified as recycling solely because the contractor describes itself as a recycling company. Treatment classifications need an appropriate evidence basis.

Under **revised 2026 ESRS E5-5, paragraph 16(e)**, the percentage of total waste generated for which the final destination is unknown is an explicit disclosure requirement, subject to the applicable reporting and materiality requirements.

The original 2023 ESRS E5 does not contain the same explicit unknown-destination datapoint. It includes other requirements, such as the amount and percentage of non-recycled waste. Companies should use the requirements of the version they apply.

See [revised ESRS E5](https://knowledgehub.efrag.org/eng/interactive/simplified-esrs/esrs-e5/delegated-act) and the [original 2023 ESRS regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R2772).

## 8. Where does waste data come from?

Waste data can come from:

1. Weighbridge tickets
2. Waste transfer documentation
3. Hazardous waste manifests
4. Waste contractor reports
5. Invoices
6. Internal waste logs
7. Facility records
8. Container collection records
9. Waste management systems
10. Regulatory waste records

Reliable direct measurements are generally preferable to rough estimates.

For example, a verified weighbridge record showing **2,480 kg of net waste** provides stronger quantity evidence than an employee estimating that a container was approximately half full.

The record still needs to relate to the correct waste stream, facility and reporting period. Its weight may establish the quantity collected without proving the final treatment route.

## 9. What if the waste is not weighed?

A company may have container collection records but no measured weight.

For example, assume there were **10 full container emptyings** during the reporting period, each involving a container with a capacity of **1.1 cubic metres**.

The estimated collected volume is:

**10 × 1.1 = 11 cubic metres**

Ten containers installed at a site would not, by itself, establish the collected volume. The number of emptyings and the fill level also matter.

A simplified conversion is:

**Waste volume × Appropriate waste density = Estimated waste mass**

If an appropriate, documented density assumption were **100 kg per cubic metre**:

**11 × 100 = 1,100 kg = 1.1 tonnes**

For containers with a consistent size, fill level and waste density, the fuller calculation is:

**Number of emptyings × Container capacity × Fill fraction × Waste density = Estimated mass**

If these inputs vary, calculate each collection separately and add the results.

The density of **100 kg per cubic metre** is an illustrative assumption, not a universal conversion factor. Waste composition, compaction and moisture can affect density.

The organisation should document:

1. Why an estimate was necessary
2. The container capacities, fill assumptions and collection counts used
3. The density factor and its source
4. The waste stream and conditions to which it applies
5. Whether the method was applied consistently
6. Whether better measured data could become available

The result should be identified as an estimate.

## 10. Measured data and estimated data should not be confused

Imagine two facilities:

<div class="waste-table-wrap" tabindex="0" role="region" aria-label="Scrollable waste data table">

| Facility | Waste | Data method |
| --- | ---: | --- |
| Facility A | 50 tonnes | Direct measurement |
| Facility B | 30 tonnes | Estimated from container data |
| Total | 80 tonnes | Mixed |

</div>

The arithmetic is correct, but the measurement basis is different.

Recording that basis makes the calculation more transparent and helps identify where data quality could improve.

Under the original 2023 ESRS E5, paragraph 40, methodology disclosures include whether data comes from direct measurement or estimation and the key assumptions used. GRI 306 also requires contextual information about how the waste data was compiled.

See the [original ESRS regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R2772) and [GRI 306](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/).

## 11. Do not confuse collection with final treatment

A collection record tells you that waste left the facility. It does not necessarily establish the final treatment route.

**10 tonnes collected does not automatically mean 10 tonnes recycled.**

The waste may later be sorted, with some recycled, some otherwise recovered and some disposed of.

Useful questions for the contractor include:

- Does the report show collected weight or weight entering final treatment?
- Does it identify the final treatment method?
- Can the treatment destination be traced?
- Are hazardous and non-hazardous streams distinguished?
- Are any quantities or treatment percentages estimated?
- Is waste from several customers mixed before treatment percentages are calculated?
- How are sorting rejects and changes in weight handled?

These answers help determine what the reported figures can support.

## 12. Treatment terminology needs care

The [EU waste hierarchy](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM:waste_hierarchy) establishes this priority order:

1. Prevention
2. Preparing for reuse
3. Recycling
4. Other recovery, including energy recovery
5. Disposal

However, legal and reporting classifications are not always identical.

<div class="waste-table-wrap" tabindex="0" role="region" aria-label="Scrollable waste data table">

| Treatment | GRI 306: Waste 2020 | Revised 2026 ESRS E5 |
| --- | --- | --- |
| Incineration with energy recovery | Disposal, reported separately from incineration without energy recovery | Other recovery only when the Waste Framework Directive’s Annex II R1 conditions are met; otherwise disposal |

</div>

Revised ESRS E5 application requirement AR 6 makes this R1 condition explicit.

Neither framework treats incineration with energy recovery as recycling.

The practical rule is:

**Classify waste using the applicable reporting definition and evidence about the operation performed. A commercial label such as “waste to energy” is not enough.**

See [GRI 306](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/) and [revised ESRS E5](https://knowledgehub.efrag.org/eng/interactive/simplified-esrs/esrs-e5/delegated-act).

## 13. Onsite and offsite waste treatment

Another distinction is whether waste is treated onsite or offsite.

In GRI 306, onsite means within the physical boundary or administrative control of the reporting organisation. Offsite means outside that boundary or control.

GRI requires this distinction for each relevant recovery and disposal operation, with hazardous and non-hazardous quantities identified.

Where third parties manage waste offsite, contractor information becomes an important part of the company’s evidence and data controls.

See [GRI 306: Waste 2020](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/).

## 14. A simple waste data control process

A practical reporting process can follow these steps:

1. Define the reporting boundary, period and applicable framework version.
2. Identify the facilities and waste streams within that boundary.
3. Determine which materials count as waste and classify hazardous status using the applicable rules.
4. Collect quantity data and record whether it is measured or estimated.
5. Identify the recovery or disposal route using the framework’s definitions.
6. Identify onsite and offsite treatment where required.
7. Record unknown destinations and waste awaiting collection or treatment without double counting.
8. Document estimates, assumptions and evidence.
9. Reconcile quantities, including relevant inventory and timing differences.
10. Review unusual changes against previous reporting periods.

## 15. What could go wrong?

### Missing facilities or waste streams

A site may be omitted, or general waste may be reported while electronic waste or hazardous maintenance waste is overlooked.

### Wrong units

**5,000 kg = 5 tonnes**, not 5,000 tonnes.

### Double counting

A contractor invoice and an internal waste report may describe the same waste movement. Adding both would duplicate the waste.

### Incorrect treatment classification

Waste collected for sorting may be reported as fully recycled, or energy-recovery incineration may be classified incorrectly for the reporting framework.

### Estimates treated as measurements

A calculated container weight may be presented as if it came from a weighbridge.

### Missing hazardous-waste information

Hazardous streams may be included in a general total without the required separate identification.

### Unknown destinations classified as recycling

The company may know that waste left the site but lack sufficient evidence about its final treatment.

### Reporting-period errors

Waste generation, collection and treatment can occur in different periods. Waste generated in December and collected in January may belong in December’s waste-generated figure. Using the collection date automatically can therefore misstate the period of generation.

### Unrecorded stored waste

Opening and closing quantities awaiting collection or treatment may be missing from the internal reconciliation.

These are data governance and classification problems as well as calculation problems.

## 16. What controls can improve waste data?

Useful controls include:

1. A complete register of reporting facilities
2. A defined list of waste streams
3. Approved waste and hazardous-status classification rules
4. A documented mapping to the reporting framework’s treatment categories
5. Unit validation and duplicate checks
6. Reconciliation of generated, stored and transferred or treated quantities
7. Review of hazardous-waste documentation
8. Contractor data validation
9. Approval of estimation methods
10. Evidence retention
11. Review of significant year-on-year changes
12. Investigation of unknown destinations
13. Clear responsibility for review and approval

For the example in this article, one control tests:

**Hazardous waste + Non-hazardous waste = Total waste**

Another tests:

**Waste diverted + Waste directed to disposal + Waste with an unknown destination = Total waste generated**

The second equation works under the example’s stated assumptions. It is not a universal identity for every reporting dataset.

Before applying it in practice, align the population, period and measurement basis. Consider opening and closing inventories and documented changes in mass. Differences should be investigated and explained rather than automatically overwritten.

GRI 306 expressly recognises that generated and recovery/disposal weights can differ because of precipitation, evaporation, losses or other modifications to waste.

## 17. Example company

Our fictional company reports:

<div class="waste-table-wrap" tabindex="0" role="region" aria-label="Scrollable waste data table">

| Measure | Tonnes | Percentage of total generated |
| --- | ---: | ---: |
| Total waste generated | 120 | 100% |
| Hazardous waste | 12 | 10% |
| Non-hazardous waste | 108 | 90% |

</div>

Its destination breakdown is:

<div class="waste-table-wrap" tabindex="0" role="region" aria-label="Scrollable waste data table">

| Destination | Tonnes | Percentage of total generated |
| --- | ---: | ---: |
| Preparation for reuse | 10 | 8.33% |
| Recycling | 60 | 50.00% |
| Other qualifying recovery | 20 | 16.67% |
| Directed to disposal | 25 | 20.83% |
| Final destination unknown | 5 | 4.17% |
| Total | 120 | 100.00% |

</div>

The diversion calculation is:

**(10 + 60 + 20) ÷ 120 × 100 = 75%**

The recycling calculation is:

**60 ÷ 120 × 100 = 50%**

The disposal calculation is:

**25 ÷ 120 × 100 = 20.83%**

The unknown-destination calculation is:

**5 ÷ 120 × 100 = 4.17%**

The reconciliation is:

**90 + 25 + 5 = 120 tonnes**

**75.00% + 20.83% + 4.17% = 100%**

This is a simplified teaching example, not a complete disclosure template. GRI requires additional composition and treatment breakdowns, including hazardous/non-hazardous and onsite/offsite information. The original 2023 ESRS E5 also includes requirements covering non-recycled waste and hazardous and radioactive waste, subject to the applicable reporting requirements.

The figures reconcile. The next question is whether the underlying quantities, classifications and measurement assumptions can be supported by evidence.

## What credible waste data should show

A credible waste dataset should explain:

- What waste was generated and within which reporting boundary
- Whether it was hazardous or non-hazardous
- How the quantity was measured or estimated
- What happened to the waste
- Which reporting definitions were used
- Whether the final destination is known
- How timing, storage and changes in mass were handled
- Whether the numbers reconcile and the evidence can be checked

The basic calculations are simple. The work lies in building a complete, consistent and traceable data process that supports sustainability reporting, management decisions and external assurance.

## Useful guidance and further reading

- [GRI 306: Waste 2020](https://www.globalreporting.org/publications/documents/english/gri-306-waste-2020/) — waste generation, waste diverted from disposal and waste directed to disposal.
- [Original 2023 ESRS — Regulation (EU) 2023/2772](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R2772) — see ESRS E5, particularly paragraphs 37–40.
- [Revised 2026 ESRS — Regulation (EU) 2026/1563](https://eur-lex.europa.eu/eli/reg_del/2026/1563/oj/eng) — see Articles 2–3 for transition and application dates, and revised ESRS E5 for waste disclosures.
- [EFRAG’s revised ESRS E5 text](https://knowledgehub.efrag.org/eng/interactive/simplified-esrs/esrs-e5/delegated-act) — see paragraph 16 and application requirement AR 6.
- [EU Waste Framework Directive](https://eur-lex.europa.eu/eli/dir/2008/98/2025-10-16/eng) — waste definitions, the hierarchy, classification and treatment operations.
- [European Commission’s Waste Framework Directive overview](https://environment.ec.europa.eu/topics/waste-and-recycling/waste-framework-directive_en).
- [EU waste hierarchy overview](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM:waste_hierarchy).
