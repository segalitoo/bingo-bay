/* Google Analytics 4 — shared loader for all submission pages.
   Single source of truth for the Measurement ID: replace the placeholder below.
   Enhanced Measurement (scroll, outbound clicks, file downloads) is toggled on
   in the GA4 data stream UI, not here — no extra code needed. */
(function () {
  var GA_MEASUREMENT_ID = 'G-VHCG9S271R'; // GA4 Measurement ID — Bingo Bay Submission property

  // Don't load in local dev (python http.server on localhost) — keeps test hits out of reports.
  var host = location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '' || host === '0.0.0.0') return;
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return; // no-op until a real ID is set

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
