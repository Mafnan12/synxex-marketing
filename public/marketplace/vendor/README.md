Marketplace animation assets
============================

GSAP 3.14.2 and ScrollTrigger 3.14.2 are pinned, locally hosted distribution files, loaded only by the Marketplace route. Their original copyright and license headers are retained.

Sources:
- https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js
- https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js

License: https://gsap.com/standard-license/

The page uses a scoped GSAP context and reverts its timeline on unmount, viewport changes, and reduced-motion changes. It falls back to static category stories when animation scripts are unavailable.
