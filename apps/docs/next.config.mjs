import createMDX from 'fumadocs-mdx/config'
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', "md"],
// to use the repo ui in the docs ( can remove if you want ) 
  transpilePackages: ["@repo/ui"],

}


const withMDX = createMDX({
  mdxOptions : {
    rehypeCodeOptions :{
     themes :{
       dark : "github-dark-default",
       light : "vitesse-light",
     }
    },
   } 
})

 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
