import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    suppressHydrationWarning={true}
    data-qb-installed={true}
    >
      <body
      cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
