import type { Metadata } from "next";
import "./globals.css";
import { ModeThemeProvider } from "@/context/ModeThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rashi Chaurasia — Product & UX Designer",
  description:
    "Experienced Product & UX Designer with 7+ years designing enterprise systems, digital products, UX research, accessibility (WCAG), information architecture, and high-craft interaction.",
  keywords: [
    "Rashi Chaurasia",
    "Product Designer",
    "UX Designer",
    "UX Research",
    "Enterprise UX",
    "Complex Systems",
    "Accessibility",
    "Interaction Design",
    "Best Buy",
    "Fidelity Investments",
  ],
  authors: [{ name: "Rashi Chaurasia" }],
  openGraph: {
    title: "Rashi Chaurasia — Product & UX Designer",
    description: "I make complex things feel simple. Product Designer with 7+ years of systems, research, and craft.",
    type: "website",
    locale: "en_US",
    siteName: "Rashi Chaurasia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashi Chaurasia — Product & UX Designer",
    description: "I make complex things feel simple. Product Designer with 7+ years of systems, research, and craft.",
  },
  icons: {
    icon: [
      { url: "/rashi-portfolio/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/rashi-portfolio/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC script for persistent theme and mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var t = localStorage.getItem('rashi-theme');
                if (!t) {
                  t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', t);
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                var m = new URLSearchParams(window.location.search).get('mode') || localStorage.getItem('rashi-mode') || 'work';
                document.documentElement.setAttribute('data-mode', m);
              } catch(e){}
            })();`,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased transition-colors duration-500 ease-editorial bg-work-light-bg text-work-light-text dark:bg-work-dark-bg dark:text-work-dark-text [html[data-mode='beyond']_&]:bg-beyond-light-bg [html[data-mode='beyond']_&]:text-beyond-light-text [html[data-mode='beyond'].dark_&]:bg-beyond-dark-bg [html[data-mode='beyond'].dark_&]:text-beyond-dark-text">
        <ModeThemeProvider>
          <div className="relative flex min-h-screen flex-col selection:bg-emerald-800 selection:text-white">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ModeThemeProvider>
      </body>
    </html>
  );
}
