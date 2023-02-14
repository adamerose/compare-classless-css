// Ratings:
// 1 - Significantly breaks styling and layout for some or many elements
// 2 - Looks decent but has a few quirks
// 3 - Looks good and handles most common cases well
// 4 - Looks great and handles almost all examples perfectly

// Used this method to load some CSS sheets from GitHub:
// https://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github/18049842#18049842

const details = [
  {
    name: "awsm.css",
    docs: "https://igoradamenko.github.io/awsm.css/",
    stylesheets: ["https://igoradamenko.github.io/awsm.css/css/awsm.css"],
    repo: "igoradamenko/awsm.css",
    rating: 3,
  },
  {
    name: "axist",
    docs: "https://ruanmartinelli.github.io/axist/",
    stylesheets: ["https://unpkg.com/axist@latest/dist/axist.min.css"],
    repo: "ruanmartinelli/axist",
    rating: 2,
  },
  {
    name: "Basic.css",
    docs: "https://vladocar.github.io/Basic.css/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/vladocar/Basic.css/css/basic.css",
    ],
    repo: "vladocar/Basic.css",
    rating: 1,
  },
  {
    name: "Chota",
    docs: "https://jenil.github.io/chota/",
    stylesheets: ["https://unpkg.com/chota"],
    repo: "jenil/chota",
    rating: 2,
  },
  {
    name: "Classless.css",
    docs: "https://classless.de/",
    stylesheets: [
      "https://classless.de/classless.css",
      "https://fonts.googleapis.com/css?family=Open+Sans:300,400",
    ],
    repo: "emareg/classlesscss",
    rating: 3,
  },
  {
    name: "concrete.css",
    docs: "https://concrete.style/",
    stylesheets: [
      "https://unpkg.com/normalize.css",
      "https://unpkg.com/concrete.css",
    ],
    repo: "louismerlin/concrete.css",
    rating: 3,
  },
  {
    name: "holiday.css",
    docs: "https://holidaycss.js.org/",
    stylesheets: ["https://cdn.jsdelivr.net/npm/holiday.css@0.9.5"],
    repo: "EvgenyOrekhov/holiday.css",
    rating: 4,
  },
  {
    name: "LatexCSS",
    docs: "https://latex.now.sh/",
    stylesheets: ["https://latex.now.sh/style.css"],
    repo: "vincentdoerig/latex-css",
    rating: 3,
  },
  {
    name: "Markdown CSS",
    docs: "https://markdowncss.github.io/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/markdowncss/splendor/css/splendor.css",
    ],
    repo: "markdowncss",
    rating: 2,
  },
  {
    name: "Marx",
    docs: "https://mblode.github.io/marx/",
    stylesheets: ["https://unpkg.com/marx-css/css/marx.min.css"],
    repo: "mblode/marx",
    rating: 3,
  },
  {
    name: "MercuryCSS",
    docs: "https://wademeredith.com/mercury-css",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/wmeredith/MercuryCSS/css/mercury.css",
    ],
    repo: "wmeredith/MercuryCSS",
    rating: 2,
  },
  {
    name: "Milligram",
    docs: "https://milligram.io/",
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic",
      "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
      "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css",
    ],
    repo: "milligram/milligram",
    rating: 2,
  },
  {
    name: "mini.css",
    docs: "https://minicss.org/docs",
    stylesheets: [
      "https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css",
      "https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css",
    ],
    repo: "Chalarangelo/mini.css",
    rating: 2,
  },
  {
    name: "MVP.css",
    docs: "https://andybrewer.github.io/mvp/",
    stylesheets: ["https://unpkg.com/mvp.css"],
    github: "https://www.github.com/andybrewer/mvp",
    repo: "andybrewer/mvp",
    rating: 1,
  },
  {
    name: "new.css",
    docs: "https://newcss.net/",
    stylesheets: ["https://cdn.jsdelivr.net/gh/xz/new.css/new.css"],
    repo: "xz/new.css",
    rating: 2,
  },
  {
    name: "no-class.css",
    docs: "https://davidpaulsson.se/no-class/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/davidpaulsson/no-class/docs/css/no-class.css",
    ],
    repo: "davidpaulsson/no-class",
    rating: 1,
  },
  {
    name: "Picnic CSS",
    docs: "https://picnicss.com/",
    stylesheets: ["https://cdn.jsdelivr.net/npm/picnic"],
    repo: "franciscop/picnic",
    rating: 1,
  },
  {
    name: "ridge.css",
    docs: "https://ridgecss.com/",
    stylesheets: ["https://cdn.jsdelivr.net/gh/swlkr/ridgecss/ridge.css"],
    repo: "swlkr/ridgecss",
    rating: 1,
  },
  {
    name: "sakura",
    docs: "https://oxal.org/projects/sakura/demo/",
    stylesheets: ["https://cdn.jsdelivr.net/gh/oxalorg/sakura/css/sakura.css"],
    repo: "oxalorg/sakura",
    rating: 3,
  },
  {
    name: "style.css",
    docs: "https://css-pkg.github.io/style.css/",
    stylesheets: ["https://cdn.jsdelivr.net/gh/css-pkg/style.css/style.css"],
    repo: "ungoldman/style.css",
    rating: 2,
  },
  {
    name: "Stylize.css",
    docs: "https://vasanthv.com/stylize.css/demo.html",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/vasanthv/stylize.css/stylize.css",
    ],
    repo: "vasanthv/stylize.css",
    rating: 2,
  },
  {
    name: "tacit",
    docs: "https://yegor256.github.io/tacit/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css",
    ],
    repo: "yegor256/tacit",
    rating: 3,
  },
  {
    name: "Tufte CSS",
    docs: "https://edwardtufte.github.io/tufte-css/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/edwardtufte/tufte-css/tufte.css",
    ],
    repo: "edwardtufte/tufte-css",
    rating: 2,
  },
  {
    name: "water.css",
    docs: "https://watercss.kognise.dev/",
    stylesheets: ["https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"],
    repo: "kognise/water.css",
    rating: 4,
  },
  {
    name: "water.css (dark)",
    docs: "https://watercss.kognise.dev/",
    stylesheets: ["https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"],
    repo: "kognise/water.css",
    rating: 4,
  },
  {
    name: "Wing",
    docs: "https://kbrsh.github.io/wing/",
    stylesheets: ["https://unpkg.com/wingcss"],
    repo: "kbrsh/wing",
    rating: 1,
  },
  {
    name: "Writ",
    docs: "https://writ.cmcenroe.me/",
    stylesheets: ["https://writ.cmcenroe.me/1.0.4/writ.min.css"],
    repo: "programble/writ",
    rating: 2,
  },
  {
    name: "YoRHa",
    docs: "https://metakirby5.github.io/yorha/",
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/metakirby5/yorha/dist/yorha.css",
    ],
    repo: "metakirby5/yorha",
    rating: 1,
  },
];

window.details = details;

export default details;
