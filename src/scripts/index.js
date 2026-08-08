import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "reddit",
    items: {
      "r/startpages": "https://www.reddit.com/r/startpages",
      "r/unixporn": "https://www.reddit.com/r/unixporn",
      "r/opencode": "https://www.reddit.com/r/opencode",
      "r/coolgithubprojects ": "https://www.reddit.com/r/coolgithubprojects ",
    },
  },
  {
    label: "tools",
    items: {
      "json > format": "https://devtoysweb.web.app/formatters/json",
      "json > diff": "https://jsondiff.com/",
      "json > js": "https://devtoollab.com/tools/json-to-js-object",
      "js > json": "https://devtoollab.com/tools/js-object-to-json",
    },
  },
  {
    label: "libs",
    items: {
      tailwind: "https://tailwindcss.com/docs/customizing-colors",
      shadcn: "https://ui.shadcn.com/docs/components",
    },
  },
  {
    label: "resources",
    items: {
      "js > patterns": "https://www.patterns.dev/#patterns",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
