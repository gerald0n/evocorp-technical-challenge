import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         backgroundColor: {
            'custom-black': '#1a1a1a'
         },
         screens: {
            lg: '790px'
         },
         height: {
            'size-image': '500px',
         }
      }
   },
   plugins: []
}
export default config
