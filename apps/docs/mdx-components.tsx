import type { MDXComponents } from 'mdx/types';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultComponents from 'fumadocs-ui/mdx'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
   ...defaultComponents,
    ...components,
    Tabs, Tab
  };
}
