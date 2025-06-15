import React from "react";
import "./globals.css";

export const metadata = {
  title: "Frontend Developer Portfolio",
  description: "Personal portfolio website showcasing my frontend development skills and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* EmailJS Script */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          async
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                emailjs.init("vivek.soni9891@gmail.com");
              })();
            `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
