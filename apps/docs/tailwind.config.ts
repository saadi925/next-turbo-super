import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import {sharedConfig} from '@repo/ui/tailwind.config'
const preset = createPreset({
  // "keepCodeBlockBackground" : true,
//   preset : "default"
  })

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  presets: [preset],
  content: [
    './node_modules/fumadocs-ui/dist/**/*.js',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : "class",
}