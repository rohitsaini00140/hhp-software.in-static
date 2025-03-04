import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ReachOutButton from "@/app/pages/ReachOutButton "
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import { Providers } from "./providers";

import "../styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "HHP SOFTWARE PRIVATE LIMITED",
    template: "%s | HHP SOFTWARE PRIVATE LIMITED",
  },
  description:
    "HHP Software is a leading mobile app development company in the US, UK & India. We offer innovative digital solutions to our clients across industries.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Script (Head Section) */}
       <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MFSV89QT');
            `,
          }}
        />

      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
       

         {/* Google Tag Manager (noscript) */}
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFSV89QT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers>
          <Header />

          {children}
          <ReachOutButton/>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
 