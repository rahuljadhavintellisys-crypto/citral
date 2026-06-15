import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CITRAL | Community Initiative to Transform Lives",
  description: "Grassroots humanitarian and development organization in Nakivale Refugee Settlement, Uganda. Empowering communities through public health, WASH, agricultural resilience, and environmental conservation.",
  keywords: ["CITRAL", "Nakivale Refugee Settlement", "Uganda NGO", "Dr. Alex Magomu Alfred", "Humanitarian Uganda", "Refugee support", "WASH", "Climate Smart Agriculture"],
  openGraph: {
    title: "CITRAL - Community Initiative to Transform Lives",
    description: "Grassroots humanitarian and development organization in Nakivale Refugee Settlement, Uganda.",
    url: "https://citral-uganda.org",
    siteName: "CITRAL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CITRAL | Community Initiative to Transform Lives",
    description: "Grassroots humanitarian and development organization in Nakivale Refugee Settlement, Uganda.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
