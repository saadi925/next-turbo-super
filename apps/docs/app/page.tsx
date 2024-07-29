import Link from 'next/link'
import React from 'react'

export default function DocsHome() {
  return (
    <main className=' py-20 px-12   '>
      <div className="text -3xl leading-none tracking-tighter md:text-4xl max-w-2xl">
        This is your docs home page. You can edit this file in
        <span className='text-sky-500 px-4'>
        apps/docs/app/page.tsx
        </span>
      </div>
       <Link className='px-4 py-2 mt-6 bg-foreground rounded-2xl  text-background' href={'/docs'}>
       Docs
       </Link>
    </main>
  )
}
