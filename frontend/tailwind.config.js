/** @type {import('tailwindcss').Config} */
module.exports = {
  /** @type {import('tailwindcss').Config} */
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px'],
      },
      backgroundImage: {
        'hero-img': "url('/src/assets/heroImage.svg')",
        'hero-two': "url('/src/assets/office-bg.jpg')",
        profile: "url('/src/assets/profile-bg.svg')",
        services: "url('/src/assets/servces-background.jpg')",
        feature: "url('/src/assets/feature.png')",
        'about-bg': "url('/src/assets/about-bg.jpg')",
        'testimonial-1': "url('/src/assets/testimonial (1).jpg')",
        'testimonial-2': "url('/src/assets/testimonial (2).jpg')",
        'testimonial-3': "url('/src/assets/testimonial (3).jpg')",
        singlecar: "url('/src/assets/singlecarbg.svg')",
        login: "url('/src/assets/singlecarbg.jpg')",
        office: "url('/src/assets/office-bg.jpg')",
      },
      fontFamily: {
        neon: ['Tilt Neon', 'sans-serif'],
        young: ['Young Serif', 'serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-green': '#1fc916',
        'light-green': '#1dd213',
        'deep-green': '#179510',
        'slate-blue': '#031b4e',
        'white-green': '#eafae8ff',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      screens: {
        sm: '740px',
        md: '968px',
        lg: '1100px',
        wide: '1440px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
