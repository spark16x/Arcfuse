import "./globals.css";

export const metadata = {
  title: "Arcfuse",
  description: "Unify all your social platforms in one space.",
  manifest: "/manifest.json",
  themeColor: "#007BFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}