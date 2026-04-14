'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalWidget({ height = '600px' }: { height?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Only load Cal.com when the widget scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    // Remove any existing Cal script to avoid duplication
    const existingScript = document.querySelector('script[data-cal-widget]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('data-cal-widget', 'true');
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "website-link", {origin:"https://app.cal.com"});
      Cal.ns["website-link"]("inline", {
        elementOrSelector:"#my-cal-inline-website-link",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "otai-systems/website-link",
      });
      Cal.ns["website-link"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-cal-widget]');
      if (s) s.remove();
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      <div
        id="my-cal-inline-website-link"
        style={{ width: '100%', height, overflow: 'scroll' }}
      />
      {!shouldLoad && (
        <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p className="text-muted-foreground text-sm">Loading calendar...</p>
        </div>
      )}
    </div>
  );
}
