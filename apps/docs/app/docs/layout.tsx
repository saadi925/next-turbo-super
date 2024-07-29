import {  DocsLayout } from 'fumadocs-ui/layout';
import { docsConfig } from '../docs.config';

export default function RootDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout {...docsConfig}
    >
      {children}
    </DocsLayout>
  );
}