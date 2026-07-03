# Tech Product Jobs

Curated career links for product companies. The live site is published at:

https://techproductjobs.github.io/

## How to add a company

1. Fork this repository.
2. Open `companies.js`.
3. Add a new company object inside `window.CAREER_COMPANIES`.
4. Keep entries alphabetically ordered by company name where possible.
5. Test `index.html` locally and confirm the company appears in the table.
6. Open a pull request with a short note about the company and office location.

Use this format:

```js
{
  name: "Company Name",
  tier: "Strong product pay",
  category: "Cloud, SaaS, AI",
  cities: ["Hyderabad"],
  link: "https://company-careers-url.example/jobs?location=Hyderabad&query=software",
  home: "https://company-careers-url.example/",
  prefilled: true,
  note: "Short note about the company's product engineering presence and relevant roles."
}
```

## Field guide

| Field | What to add |
|---|---|
| `name` | Company display name. |
| `tier` | Existing pay tier label, such as `Global top pay`, `Strong product pay`, or `India SaaS pay`. |
| `category` | Product area, for example `Cloud`, `SaaS`, `Security`, `Fintech`, or `Semiconductors`. |
| `cities` | City names where the company has product or engineering offices. |
| `link` | Best available job-search URL, ideally prefiltered for city, India, and software or engineering roles. |
| `home` | General careers homepage. |
| `prefilled` | `true` if `link` opens with useful filters already applied; otherwise `false`. |
| `note` | One concise sentence explaining why the company belongs on the list. |

## Pull request checklist

- The company has a real product or platform engineering presence in the listed city.
- The career link works.
- The link is filtered to relevant jobs when the career site supports it.
- `index.html` and `companies.js` remain in the repository root.
- No duplicate company entry was added.
