import Root from "./components"
import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
  name: "agriwebb-muckaround",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: true,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  },
}

export default myFirstTheme