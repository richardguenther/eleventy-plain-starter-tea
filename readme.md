# Eleventy Beginner Template with TailwindCSS and AlpineJS

I've built a simple Template to start with Eleventy.

TailwindCSS and AlpineJS are included.

No Templates ("_includes") - because I wanted to build everything eleventy-ish myself to understand in better.

The elventy-config file ".eleventy.js" relies in most parts on [Greg Wolanski's Article](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/).

Im using the eleventy-canary-build for Eleventy's Version 2. Because of the newly built Development-Server. 
(I changed the "domdiff:" to false - otherwise tailwindcss-classes would not properly reload after I changed them.)

0. copy this Repo (for example with) `git clone https://github.com/richardguenther/eleventy-plain-starter-tea.git`

1. Install all Dependencies: `npm install`

2. To start development: `npm run dev`

3. To build minified Files: `npm run build`
    (css minify with "tailwindcss", html minify with "html-minifyer", js minify with "esbuild")



---

I've used gitpod.io as a Development-Environment. Some VS-Code-Extensions have to be installed manually. To Nunjucks-Extensions are in de .vscode_extensions folder.