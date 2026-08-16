import { MetaPixel } from "@/components/MetaPixel/MetaPixel";
import "./globals.css";

export const metadata = {
  title: "Afiliada Pro | Metodo para Grupos de Ofertas",
  description:
    "Aprenda estrategias para atrair pessoas qualificadas para seus grupos de ofertas usando trafego pago.",
  openGraph: {
    title: "Afiliada Pro | Metodo para Grupos de Ofertas",
    description:
      "Estrategias para atrair pessoas qualificadas para grupos de ofertas com Meta Ads.",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
