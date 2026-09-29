---
title: "Scope 1 Emissions in Practice: Buildings, Refrigerants and Own Fleet"
date: 2026-09-30T09:00
tag: ESG
summary: "A practical guide to Scope 1 emissions from buildings, refrigerant leakage and company vehicles, with examples, factor-selection checks and useful sources."
cover: /assets/blog/scope-1-emissions-in-practice.png
---
Scope 1 emissions are often described as direct greenhouse gas emissions.

That definition is correct, but it can still feel abstract.

A more practical question is:

**Which emissions happen directly from sources that my organisation owns or controls?**

Under the [GHG Protocol Corporate Standard](https://ghgprotocol.org/sites/default/files/ghgp/standards/ghg-protocol-revised.pdf), direct greenhouse gas emissions come from sources owned or controlled by the reporting organisation.

These sources can include boilers, furnaces, vehicles, industrial equipment, refrigeration systems, and other equipment that releases greenhouse gases directly.

For many organisations, common Scope 1 sources include:

1. Buildings that burn fuel.
2. Company vehicles that burn fuel.
3. Refrigerants that leak from cooling equipment.
4. Direct industrial or process emissions where relevant.

The calculation itself is often simple.

The difficult part is usually choosing the correct activity data, organisational boundary, emission factor, units, Global Warming Potential values, and reporting method.

For more information, see the [GHG Protocol standards and guidance](https://ghgprotocol.org/standards-guidance).

## 1. Buildings and stationary combustion

Consider an office building with a natural gas boiler.

The company purchases natural gas and burns it directly in equipment that falls inside its organisational boundary.

The resulting direct combustion emissions are normally Scope 1.

The [US EPA](https://www.epa.gov/climateleadership/determine-emissions-sources) also identifies stationary fuel combustion in equipment such as boilers and furnaces as a typical Scope 1 source.

The basic calculation is:

**Fuel consumed × emission factor = greenhouse gas emissions**

For example, assume a building consumes:

**50,000 kWh of natural gas**

For a simple teaching example, assume an emission factor of:

**0.20 kg CO₂e per kWh**

The calculation is:

**50,000 × 0.20 = 10,000 kg CO₂e**

This equals:

**10 tonnes CO₂e**

The 0.20 factor is only an illustrative number.

It is not a recommended universal natural gas emission factor.

The correct factor depends on the country, reporting year, fuel specification, unit, reporting framework, and factor source.

### What if the building uses electricity?

If the building uses purchased electricity for lighting, heating, cooling, or equipment, the emissions associated with generating that purchased electricity are generally Scope 2 rather than Scope 1.

The important distinction is where the emissions occur.

If your organisation burns natural gas in its own boiler, this can create Scope 1 emissions.

If electricity is generated elsewhere and purchased by your organisation, the associated electricity generation emissions are normally Scope 2 for your organisation.

See the [US EPA Scope 1 and Scope 2 Inventory Guidance](https://www.epa.gov/climateleadership/scope-1-and-scope-2-inventory-guidance) for further information.

You can also read my separate [Scope 2 article](/blog/location-based-or-market-based/) for a full explanation of location-based and market-based electricity accounting.

## 2. Refrigerant leakage

Scope 1 is not limited to fuel combustion.

Refrigerants can also create direct greenhouse gas emissions.

Air conditioning systems, refrigerators, chillers, freezers, heat pumps, and similar equipment can contain gases with high Global Warming Potential values.

These gases can escape during equipment use, maintenance, servicing, installation, accidents, or disposal.

Direct releases of greenhouse gases from refrigeration and air conditioning equipment inside the organisational boundary are normally treated as Scope 1 fugitive emissions.

The [US EPA guidance on fugitive emissions](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P10196A2.TXT) provides detailed methods for refrigeration, air conditioning, fire suppression, and other direct gas releases.

A simple calculation is:

**Refrigerant released in kg × GWP = kg CO₂e**

### Example using HFC 134a

The first step is to determine which Global Warming Potential basis the organisation uses.

For this example, assume the organisation uses 100 year Global Warming Potential values from the IPCC Sixth Assessment Report, commonly called AR6.

The [GHG Protocol Global Warming Potential reference](https://ghgprotocol.org/sites/default/files/2024-08/Global-Warming-Potential-Values%20%28August%202024%29.pdf) provides values from different IPCC Assessment Reports.

For HFC 134a, the AR6 GWP100 value used by GHG Protocol is approximately:

**1,530**

The underlying scientific source can be found in the [IPCC Sixth Assessment Report, Working Group I, Chapter 7](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/).

Assume maintenance records show:

**5 kg of HFC 134a was released**

The calculation is:

**5 × 1,530 = 7,650 kg CO₂e**

This equals:

**7.65 tonnes CO₂e**

The calculation itself is simple.

The important issue is selecting the correct GWP value.

### Why can you see different GWP values for the same refrigerant?

A refrigerant can have different published GWP values because different IPCC Assessment Reports and regulatory systems use different scientific reference values.

For example:

| Source | HFC 134a GWP100 | HFC 32 GWP100 |
| --- | ---: | ---: |
| IPCC AR4 | 1,430 | 675 |
| IPCC AR5 | 1,300 | 677 |
| IPCC AR6 | 1,530 | 771 |

The [GHG Protocol GWP reference](https://ghgprotocol.org/sites/default/files/2024-08/Global-Warming-Potential-Values%20%28August%202024%29.pdf) provides these values together.

For comparison, [EU Regulation 2024/573 on fluorinated greenhouse gases](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R0573) assigns HFC 134a a GWP value of:

**1,430**

It assigns HFC 32 a GWP value of:

**675**

These regulatory values should not automatically be treated as the GWP values that every corporate greenhouse gas inventory must use.

The practical rule is:

**Do not choose a GWP value only because it appears in an official source. First determine which GWP basis your reporting methodology requires.**

For a corporate greenhouse gas inventory following GHG Protocol guidance, organisations should use 100 year IPCC GWP values and apply the selected GWP basis consistently across the inventory.

If a specific regulation or reporting programme requires another GWP basis, the organisation should follow that requirement and document it clearly.

### Where does the refrigerant amount come from?

Ideally, the organisation should use actual information from equipment and maintenance records.

Depending on the calculation method, relevant information can include:

1. Refrigerant added during servicing.
2. Refrigerant recovered from equipment.
3. Equipment refrigerant capacity.
4. Refrigerant purchases.
5. Refrigerant disposals.
6. Changes in refrigerant inventory.
7. Maintenance and service records.

The exact method should follow the reporting methodology being used.

The organisation should not simply guess the leakage amount.

### Before calculating refrigerant emissions

Check:

1. Which refrigerant was used?
2. How much refrigerant was released?
3. Which GWP basis applies?
4. Is the GWP basis being used consistently?
5. Can the selected value and source be documented?

Changing the GWP basis can change the reported CO₂e result even when the physical quantity of refrigerant released has not changed.

## 3. Company vehicles and mobile combustion

Fuel burned in vehicles that fall inside the organisational boundary can also create Scope 1 emissions.

Examples can include cars, vans, trucks, forklifts, boats, aircraft, and other mobile equipment.

The [US EPA](https://www.epa.gov/climateleadership/determine-emissions-sources) identifies fuel combustion in vehicles inside an organisation's reporting boundary as a common Scope 1 source.

The basic calculation is:

**Fuel consumed × emission factor = emissions**

For example, assume a company fleet consumes:

**10,000 litres of diesel**

For a simple teaching example, assume:

**2.70 kg CO₂e per litre**

The calculation is:

**10,000 × 2.70 = 27,000 kg CO₂e**

This equals:

**27 tonnes CO₂e**

The 2.70 factor is only an illustrative value.

The actual factor should come from an appropriate recognised source for the country, reporting year, fuel type, unit, and reporting framework.

### Fuel data or distance data?

Fuel consumption is often a strong starting point because it measures the amount of fuel burned.

However, recognised calculation methods can also provide factors based on kilometres travelled and vehicle type.

The main rule is simple:

**Match the activity data to the emission factor.**

Litres require a factor expressed per litre.

Kilometres require a factor expressed per kilometre.

kWh require a factor expressed per kWh.

Do not combine activity data and emission factors that use different units.

## 4. What about electric vehicles?

Electric vehicles do not create petrol or diesel tailpipe combustion emissions.

If the company purchases electricity to charge its electric vehicles, emissions associated with producing that purchased electricity normally fall under Scope 2.

Therefore:

**Petrol or diesel burned by a company vehicle can create Scope 1 emissions.**

**Purchased electricity used to charge a company electric vehicle normally creates Scope 2 emissions.**

This does not mean that an electric vehicle has no greenhouse gas impact.

Other emissions can exist elsewhere in the value chain, including vehicle production, battery production, energy supply, and other lifecycle activities.

Some of these emissions can fall under Scope 3.

The point here is only how direct vehicle energy emissions are classified inside a corporate greenhouse gas inventory.

## 5. Where do Scope 1 emission factors come from?

There is no single emission factor database that is automatically correct for every company, activity, country, and reporting year.

This is one of the most important things to understand.

The formula may be simple.

Choosing the correct factor requires judgement.

The [GHG Protocol Calculation Tools and Guidance](https://ghgprotocol.org/calculation-tools-and-guidance) provides resources for stationary combustion, mobile combustion, refrigeration, and other greenhouse gas calculations.

Use of a specific GHG Protocol calculation tool is not mandatory.

The organisation is still responsible for choosing an appropriate methodology and emission factor.

### United Kingdom

For UK operations, the UK Government publishes annual greenhouse gas conversion factors through the Department for Energy Security and Net Zero.

The [2026 UK Government greenhouse gas conversion factors](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026) were published in June 2026.

They provide factors for Scope 1, Scope 2, and Scope 3 activities.

The full historical collection is available through the [UK Government conversion factors for company reporting](https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting).

These factors are still commonly described informally as DEFRA factors.

However, the current company reporting conversion factors are published by the Department for Energy Security and Net Zero.

Always check which part of the emissions the factor represents.

For example, an upstream fuel supply factor should not automatically be used as a Scope 1 fuel combustion factor.

### European Union

There is no single corporate Scope 1 emission factor database that automatically replaces national sources in every EU Member State.

Companies can start by checking whether an appropriate national government or recognised national source exists.

#### Poland: KOBiZE

KOBiZE publishes net calorific values and CO₂ emission factors derived from Poland's national greenhouse gas inventory.

[KOBiZE net calorific value and emission factor tables](https://www.kobize.pl/en/article/emissions-monitoring-reporting-verification-in-the-eu-ets/id/318/ncv-and-ef-tables)

However, the intended purpose of the table must be checked.

Some KOBiZE factors are published specifically in the context of EU ETS emissions monitoring and reporting.

They should therefore not automatically be assumed to be the correct corporate Scope 1 factor for every calculation.

#### France: ADEME

France provides carbon accounting data through ADEME.

[ADEME Base Empreinte](https://base-empreinte.ademe.fr/)

#### Germany: Umweltbundesamt

Germany's Federal Environment Agency provides emission factor resources intended to support organisational greenhouse gas accounting.

[Umweltbundesamt emission factors for organisational GHG accounting](https://www.umweltbundesamt.de/en/node/120142)

#### Spain: MITECO

Spain's Ministry for the Ecological Transition provides organisational carbon footprint guidance, emission factors, and calculation resources.

[MITECO organisational carbon footprint resources](https://www.miteco.gob.es/es/cambio-climatico/temas/registro-huella/huella-de-carbonoinscripcion.html)

The important question is not simply:

**Is this an official government factor?**

The better questions are:

**Is this factor appropriate for my activity?**

**Is it appropriate for my country?**

**Does it represent the correct reporting year?**

**Does its unit match my activity data?**

**Does it represent direct Scope 1 emissions?**

**Does it include CO₂ only or total CO₂e?**

**Was it developed for corporate reporting or another regulatory purpose?**

A factor published for another purpose should not automatically be treated as the correct corporate greenhouse gas reporting factor.

### United States

For US operations, the [US EPA GHG Emission Factors Hub](https://www.epa.gov/climateleadership/ghg-emission-factors-hub) provides default emission factors designed to support organisational greenhouse gas reporting.

EPA also provides [Scope 1 and Scope 2 Inventory Guidance](https://www.epa.gov/climateleadership/scope-1-and-scope-2-inventory-guidance).

### Other countries

For operations elsewhere, organisations can check:

1. National environmental authorities.
2. National greenhouse gas inventories.
3. Government emission factor databases.
4. GHG Protocol calculation resources.
5. IPCC methodologies where appropriate.

The organisation should still determine whether the source and factor are appropriate for the specific corporate inventory.

## 6. A simple factor selection process

Before using an emission factor, ask:

1. What activity am I calculating?
2. Which country does the activity occur in?
3. Which reporting year am I calculating?
4. What unit does my activity data use?
5. Does the factor represent direct Scope 1 emissions?
6. Does the factor include CO₂ only or total CO₂e?
7. Which greenhouse gases are included?
8. If refrigerants are involved, which GWP basis is required?
9. Is the factor appropriate for my reporting framework?
10. Can I document the factor source, version, unit, and year?

If these questions cannot be answered, the calculation may look precise while still being methodologically weak.

## 7. CO₂, methane, nitrous oxide, and other greenhouse gases

Scope 1 is not limited to carbon dioxide.

Corporate greenhouse gas inventories can include:

1. Carbon dioxide, CO₂.
2. Methane, CH₄.
3. Nitrous oxide, N₂O.
4. Hydrofluorocarbons, HFCs.
5. Perfluorocarbons, PFCs.
6. Sulfur hexafluoride, SF₆.
7. Nitrogen trifluoride, NF₃.

The gases relevant to a particular Scope 1 source depend on the activity.

The [GHG Protocol Global Warming Potential reference](https://ghgprotocol.org/sites/default/files/2024-08/Global-Warming-Potential-Values%20%28August%202024%29.pdf) provides GWP values for greenhouse gases used in corporate inventories.

Fuel combustion can produce CO₂, CH₄, and N₂O.

Refrigeration equipment can release HFCs and other refrigerant gases.

Industrial processes can release other greenhouse gases.

Some emission factor databases provide separate factors for individual gases.

Others provide a combined CO₂e factor.

Be careful not to calculate individual gases separately and then add a combined CO₂e factor covering the same emissions.

That would double count emissions.

**Always check what the emission factor already includes.**

## 8. Leased buildings and leased vehicles

A leased asset is not automatically inside or outside Scope 1.

Under the [GHG Protocol Corporate Standard](https://ghgprotocol.org/sites/default/files/ghgp/standards/ghg-protocol-revised.pdf), classification depends on the organisational boundary and consolidation approach selected by the reporting company.

The main approaches include equity share and control based approaches.

This means that a leased building, vehicle, or piece of equipment needs to be assessed according to the organisation's accounting boundary and applicable reporting requirements.

Do not classify an emission only by asking:

**Do we legally own this asset?**

Also ask:

**Does this asset fall inside our organisational boundary under the accounting approach we use?**

## 9. A note on biomass

Biomass needs additional care.

Under the current GHG Protocol Corporate Standard treatment, direct biogenic CO₂ from biomass combustion is reported separately from the Scope 1 total.

CH₄ and N₂O emissions from biomass combustion are included in Scope 1 where applicable.

If a fuel contains both biomass and fossil components, fossil CO₂ emissions may also need to be included in Scope 1 according to the relevant methodology.

Therefore:

**Biogenic CO₂ from biomass combustion is reported separately.**

**Relevant CH₄ and N₂O emissions from biomass combustion remain part of Scope 1.**

For organisations with relevant land sector and biogenic activities, also review the [GHG Protocol Land Sector and Removals Standard](https://ghgprotocol.org/land-sector-and-removals-standard).

## 10. A combined Scope 1 example

Consider a fictional company with three direct emission sources.

### Building natural gas emissions

**10 tonnes CO₂e**

### Refrigerant leakage

Using the AR6 GWP value for HFC 134a:

**7.65 tonnes CO₂e**

### Company fleet

**27 tonnes CO₂e**

The simplified Scope 1 total is:

**10 + 7.65 + 27 = 44.65 tonnes CO₂e**

This example shows something important.

A relatively small physical release of refrigerant can create significant CO₂e emissions because some refrigerants have high Global Warming Potential values.

It also shows why Scope 1 should not be treated only as a fuel calculation.

The example also demonstrates why the selected GWP basis matters.

If the same 5 kg release of HFC 134a were calculated using a GWP value of 1,430 instead of 1,530, the result would be:

**5 × 1,430 = 7.15 tonnes CO₂e**

The physical refrigerant release is still:

**5 kg**

Only the GWP accounting basis has changed.

This is why the organisation should document which GWP basis it uses.

## 11. The practical rule

Scope 1 accounting can be reduced to a few core questions.

**Is the emission source inside my organisational boundary?**

**Is the greenhouse gas released directly from that source?**

**Do I have reliable activity data?**

**Am I using the correct emission factor or GWP value?**

**Do my units match?**

**Am I applying the methodology consistently?**

If these questions can be answered clearly, the calculation is usually much easier.

The arithmetic is rarely the hardest part.

The difficult part is making sure that the organisational boundary, activity data, emission factor, units, greenhouse gases, GWP basis, and reporting year are correct.

## Final takeaway

Scope 1 covers direct greenhouse gas emissions from sources owned or controlled by the organisation according to its selected organisational boundary.

For many companies, common Scope 1 sources include:

1. Fuel burned in buildings and stationary equipment.
2. Fuel burned by company vehicles and mobile equipment.
3. Refrigerants released from cooling equipment.
4. Direct industrial or process emissions where relevant.

The basic formulas are often simple.

For fuel combustion:

**Fuel consumed × emission factor = emissions**

For refrigerant leakage:

**Refrigerant released × GWP = CO₂e**

But a credible greenhouse gas inventory requires more than multiplication.

The organisation should be able to explain:

1. Where the activity data came from.
2. Why the source belongs in Scope 1.
3. Which emission factor was used.
4. Why that factor was appropriate.
5. Which reporting year the factor represents.
6. Which greenhouse gases the factor includes.
7. Which GWP basis was used.
8. Which reporting methodology was followed.
9. Whether estimates were used.
10. How the calculation can be reproduced and checked.

That is what turns a carbon calculation into a defensible greenhouse gas inventory.

<div class="newsletter" aria-labelledby="scope1-calculator-title">
  <p class="lbl">Practical tool</p>
  <h3 id="scope1-calculator-title">Try the Scope 1 calculator</h3>
  <p>Work through fuel use, refrigerant releases and company vehicle data to estimate Scope 1 emissions. It is a practical starting point, so document your factors and check the result before using it in a formal inventory.</p>
  <p><a href="/calculators/scope-1/">Open the Scope 1 calculator →</a></p>
</div>

## Useful guidance and further reading

### GHG Protocol Corporate Standard

The main framework for corporate greenhouse gas inventories and organisational boundaries.

[GHG Protocol Standards and Guidance](https://ghgprotocol.org/standards-guidance)

### GHG Protocol Calculation Tools and Guidance

Resources for activity data, emission factors, stationary combustion, mobile combustion, refrigeration, and other calculations.

[GHG Protocol Calculation Tools and Guidance](https://ghgprotocol.org/calculation-tools-and-guidance)

### GHG Protocol Global Warming Potential Values

A useful reference comparing 100 year GWP values from different IPCC Assessment Reports.

[GHG Protocol Global Warming Potential Values](https://ghgprotocol.org/sites/default/files/2024-08/Global-Warming-Potential-Values%20%28August%202024%29.pdf)

### IPCC Sixth Assessment Report

The scientific source underlying AR6 Global Warming Potential values.

[IPCC AR6 Working Group I, Chapter 7](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/)

### UK Government greenhouse gas conversion factors

Annual emission factors for calculating emissions associated with UK activities.

[UK Government Conversion Factors 2026](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026)

### US EPA GHG Emission Factors Hub

Default factors designed to support organisational greenhouse gas reporting.

[US EPA GHG Emission Factors Hub](https://www.epa.gov/climateleadership/ghg-emission-factors-hub)

### US EPA fugitive emissions guidance

Guidance for refrigeration, air conditioning, fire suppression, and other direct greenhouse gas releases.

[US EPA Direct Fugitive Emissions Guidance](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P10196A2.TXT)

### EU Regulation 2024/573

The current EU Regulation on fluorinated greenhouse gases.

[EU Regulation 2024/573 on EUR Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R0573)

### Poland: KOBiZE

Polish net calorific value and fuel emission factor resources.

[KOBiZE NCV and Emission Factor Tables](https://www.kobize.pl/en/article/emissions-monitoring-reporting-verification-in-the-eu-ets/id/318/ncv-and-ef-tables)

### France: ADEME

French environmental and carbon accounting data.

[ADEME Base Empreinte](https://base-empreinte.ademe.fr/)

### Germany: Umweltbundesamt

Emission factor resources for organisational greenhouse gas accounting.

[Umweltbundesamt Organisational GHG Emission Factors](https://www.umweltbundesamt.de/en/node/120142)

### Spain: MITECO

Organisational carbon footprint guidance, emission factors, and calculation resources.

[MITECO Carbon Footprint Resources](https://www.miteco.gob.es/es/cambio-climatico/temas/registro-huella/huella-de-carbonoinscripcion.html)

### GHG Protocol Land Sector and Removals Standard

Relevant for organisations with applicable land sector, biogenic, and removal activities.

[GHG Protocol Land Sector and Removals Standard](https://ghgprotocol.org/land-sector-and-removals-standard)
