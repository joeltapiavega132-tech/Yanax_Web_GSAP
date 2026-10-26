import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#171717', paper: '#f3efe7', lime: '#d9ff5f', coral: '#ff6b4a', sky: '#a8d9ff' }, fontFamily: { display: ['var(--font-display)'], sans: ['var(--font-sans)'] } } }, plugins: [] };
export default config;
