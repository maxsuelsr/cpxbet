// analytics.js
(function () {
    var gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-B0Z5E0RP0G';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);
  
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
  
    gtag('config', 'G-B0Z5E0RP0G');
  })();
  