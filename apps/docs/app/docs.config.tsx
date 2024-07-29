import { DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "./source";
type DocsLayoutConfig = Omit<DocsLayoutProps , "children">
const docsConfig : DocsLayoutConfig = {
        tree : pageTree,
        nav: {
            title: "Your Library",
            url: "",
          },
          githubUrl: "https://github.com/username/your-library-name",
        
}

export { docsConfig }

