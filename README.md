# hacknitra.sk

Website of HackNitra, a community of people who came back to Slovakia and tech enthusiasts in Nitra. It's a single static page built with [Astro](https://astro.build) and ships no client-side JavaScript. It makes no third-party requests and sets no cookies.

```
src/data/site.ts        content that changes: stats, team, formats, events, guests, contacts
src/components/         one component per section of the page
src/pages/              the home page and the 404 page
src/styles/global.css   all styles: brand colours, layout, breakpoints
src/assets/             logo, team and event photos (resized and converted to WebP at build)
src/lib/typography.ts   Slovak no-break spaces for body copy that comes from data
public/                 favicon, touch icon, social preview image, CNAME
.github/workflows/      build and deploy to GitHub Pages
```

## Develop

Requires Node 22.12 or newer and pnpm. The pnpm version is pinned in the `packageManager` field of `package.json`; `corepack enable` picks it up automatically.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # type-checks with astro check, then writes dist/
pnpm preview   # serves dist/
```

pnpm only runs a dependency's install script if `allowBuilds` in `pnpm-workspace.yaml` allows it; `pnpm install` fails on any it hasn't been told about. `sharp` is listed as a direct dependency because pnpm's strict layout otherwise hides it from Astro's image optimization.

## Editing

Most updates only touch `src/data/site.ts`.

**Adding an event:** put the photo in `src/assets/events/`, import it at the top of `site.ts`, and add an entry to `events` in date order. `date` is `YYYY-MM`; the year groups and Slovak month labels are generated from it. Every photo needs an `alt` text. If a photo's subject gets cropped off, set `position` (a CSS `object-position`, for example `'50% 30%'`). For an event without a photo, leave `photo` out.

**Stats** are written by hand. When you add an event or a guest, update the numbers in `stats` as well.

**Slovak typography:** in body text, one-letter words (a, i, k, o, s, u, v, z) must not end a line. Copy written directly in a component uses `&nbsp;` after them; copy that comes from `site.ts` goes through `tie()`, which does this automatically. Keep that when you edit.

**Social preview:** `public/og.jpg` is a 1200×630 screenshot of the header and hero, with the stats and follow bar hidden. Retake it if the hero changes.

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to *GitHub Actions*. Every push to `majster` then builds and deploys the site (`.github/workflows/deploy.yml`). Don't use *Deploy from a branch*: that publishes the repo as-is through Jekyll, which can't build an Astro project and fails on the `.astro` files.
3. In the same page, set **Custom domain** to `hacknitra.sk`. `public/CNAME` records the same domain and ships in the build, but with an Actions deploy GitHub reads the domain from this setting, so it has to be set here too.
4. At the DNS provider, point the apex `hacknitra.sk` at GitHub with `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, and add a `CNAME` record for `www` with the value `hacknitra.github.io`. Delete any other `A` or `AAAA` records on both names: a leftover one sends some visitors to the old host and stops GitHub from issuing the HTTPS certificate. For IPv6, use GitHub's `AAAA` records `2606:50c0:8000::153` to `2606:50c0:8003::153`.
5. Once the certificate is issued, enable **Enforce HTTPS**.

`site` in `astro.config.mjs` is `https://hacknitra.sk`; the canonical and social-preview URLs are built from it. To serve the site from `hacknitra.github.io/<repo>/` instead, also set `base: '/<repo>'` there.

## Fonts

Headings use Barlow Condensed 900 from `@fontsource/barlow-condensed` (SIL OFL). It's bundled at build time and served from our own domain, so visitors' IP addresses are never sent to Google. Both the latin and latin-ext subsets are included, because č, ď, ľ, ň, š, ť and ž are in latin-ext. Body text uses the system's Courier New.
