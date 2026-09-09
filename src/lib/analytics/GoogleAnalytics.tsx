import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const safeId =
  measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : null;

export function GoogleAnalytics() {
  if (!safeId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${safeId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${safeId}');
        `}
      </Script>
    </>
  );
}
