import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rishi Soni - Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years of experience specializing in React & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const html = document.documentElement;
                  if (theme === 'dark') {
                    html.classList.add('dark');
                  } else {
                    html.classList.remove('dark');
                  }
                  html.setAttribute('data-theme', theme);
                  html.style.colorScheme = theme;
                } catch (e) {
                  // Fallback if localStorage fails
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
