# ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.

Premium static corporate website for the public-facing dealer profile of ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε. in Δραβήσκος, Σέρρες, with an emphasis on trucks, tractor units, semitrailers, construction machinery and professional vehicles.

## Stack

- Vite static preview/build
- HTML5, CSS3 and vanilla JavaScript
- Bootstrap layout utilities retained from the Faster template
- Font Awesome icons
- Local editable content in the HTML pages and `js/tsourou.js`

## Local development

```bash
npm install
npx vite --host 0.0.0.0 --port 5173
```

For a cache-free Python server:

```bash
python serve.py --port 5173 --bind 0.0.0.0
```

## Checks and production build

```bash
npm run build
npm run preview
```

The root HTML files are the publishable static site. The local server used for visual QA serves this root directly, which keeps GitHub Pages output identical to the local version.

## GitHub Pages

1. Open the repository settings on GitHub.
2. Go to **Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save and wait for the Pages deployment to finish.

The repository includes `.nojekyll` so GitHub Pages serves the static files and local asset paths directly.

## Content verification before publishing

Phone numbers, email, location, public activity categories and the external dealer profile are represented from publicly listed information and should be confirmed with the company before publishing. The car.gr cards use clearly labelled illustrative previews; current stock, prices and availability remain subject to the live dealer profile.
