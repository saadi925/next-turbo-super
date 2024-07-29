import { RootProvider, RootProviderProps } from 'fumadocs-ui/provider';
export function Provider({ children }: { children: React.ReactNode }) {
const rootProviderConfig : RootProviderProps = {
  children, 
  search :{
    links: [
      ['Docs', '/docs'],
      ['Home', '/home']
    ],
  },
}
  return (
  <>
  <RootProvider {...rootProviderConfig} />
  </>
)
}