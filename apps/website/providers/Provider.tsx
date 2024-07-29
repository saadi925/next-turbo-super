import NextThemeProvider from '@repo/ui/theme/ThemeProvider'
import React from 'react'

export default function Provider({
    children 
} :{
    children: React.ReactNode
}) {
  return (
    <NextThemeProvider>
    {children}
    </NextThemeProvider>
  )
}
