Banking & Cards rendering dependency
===================================

Three.js 0.170.0 is pinned and locally hosted. It is imported only by this page's lazy-loaded card scene. Original copyright notices and the MIT license are retained.

Source: https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js
License: THREE-LICENSE.txt

The scene uses rounded, extruded geometry with ID-1 card proportions and a normalized 0.76 mm body. Physically based materials, a procedural studio reflection environment, directional shadows, and locally generated face textures provide the product presentation.

Rendering pauses when each canvas is outside the viewport. Pixel ratio is capped for mobile devices. Reduced motion renders still poses, and unavailable WebGL or a lost context falls back to a photographic card face. Renderers, materials, geometry, textures, event listeners, and observers are disposed on unmount.
