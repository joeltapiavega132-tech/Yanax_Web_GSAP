import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Yanax Studio — ideas que se sienten, software que funciona',
  description: 'Diseño y desarrollo de productos digitales, software a medida y experiencias web con intención.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
