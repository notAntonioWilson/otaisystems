'use client';

import { useEffect } from 'react';

const GA_ID = 'G-SPSSG0S37G';
const VOICEFLOW_PROJECT_ID = '6a548779d17110540ea5cfde';

function loadGA() {
  if ((window as any).__gaLoaded) return;
  (window as any).__gaLoaded = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

function loadVoiceflow() {
  if ((window as any).__vfLoaded) return;
  (window as any).__vfLoaded = true;
  const v = document.createElement('script');
  v.type = 'text/javascript';
  v.onload = () => {
    (window as any).voiceflow.chat.load({
      verify: { projectID: VOICEFLOW_PROJECT_ID },
      url: 'https://general-runtime.voiceflow.com',
      voice: { url: 'https://runtime-api.voiceflow.com' },
    });
  };
  v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
  document.body.appendChild(v);
}

export function DeferredScripts() {
  useEffect(() => {
    // GA: after the page has fully loaded, so it never competes with first paint but still counts every visit.
    const onLoad = () => setTimeout(loadGA, 1500);
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    // Voiceflow: on first interaction, or after 8s as a fallback.
    const events = ['scroll', 'pointerdown', 'touchstart', 'keydown'];
    const onInteract = () => {
      loadVoiceflow();
      events.forEach((e) => window.removeEventListener(e, onInteract));
    };
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true, once: true }));
    const fallback = setTimeout(onInteract, 8000);

    return () => {
      clearTimeout(fallback);
      events.forEach((e) => window.removeEventListener(e, onInteract));
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return null;
}
