import * as THREE from './vendor/three.module.min.js';

// Physically sized geometry in normalized units: ISO ID-1 proportions,
// a 0.76 mm body, rounded corners, and a fine machined bevel.
const WIDTH = 3.4, HEIGHT = WIDTH * 53.98 / 85.6, DEPTH = WIDTH * .76 / 85.6;
function outline(w = WIDTH, h = HEIGHT, radius = .13) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + radius, y); s.lineTo(x + w - radius, y);
  s.quadraticCurveTo(x + w, y, x + w, y + radius);
  s.lineTo(x + w, y + h - radius); s.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  s.lineTo(x + radius, y + h); s.quadraticCurveTo(x, y + h, x, y + h - radius);
  s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
  return s;
}
function faceGeometry() {
  const geometry = new THREE.ShapeGeometry(outline(WIDTH - .009, HEIGHT - .009, .125), 24);
  const position = geometry.attributes.position, uv = geometry.attributes.uv;
  for (let i = 0; i < position.count; i++) uv.setXY(i, position.getX(i) / WIDTH + .5, position.getY(i) / HEIGHT + .5);
  return geometry;
}
function studioEnvironment(renderer) {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#111111'; ctx.fillRect(0, 0, 1024, 512);
  const softbox = (x, width, color) => { const grad = ctx.createLinearGradient(x - width, 0, x + width, 0); grad.addColorStop(0, '#111111'); grad.addColorStop(.5, color); grad.addColorStop(1, '#111111'); ctx.fillStyle = grad; ctx.fillRect(x - width, 40, width * 2, 380); };
  softbox(260, 110, '#D1D1D1'); softbox(770, 45, '#A3A3A3'); softbox(940, 95, '#6E1423');
  const texture = new THREE.CanvasTexture(canvas); texture.mapping = THREE.EquirectangularReflectionMapping; texture.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer); const target = pmrem.fromEquirectangular(texture); texture.dispose(); pmrem.dispose();
  return target;
}

export async function createCardScene(canvas, options = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1.25 : 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.55;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(32, 1, .1, 50);
  camera.position.set(0, .3, 8.8); camera.lookAt(0, 0, 0);
  const environment = studioEnvironment(renderer); scene.environment = environment.texture;
  const key = new THREE.DirectionalLight('#D1D1D1', 3.8); key.position.set(-3, 4, 5); key.castShadow = true;
  key.shadow.mapSize.set(512, 512); key.shadow.camera.left = -5; key.shadow.camera.right = 5; key.shadow.camera.top = 5; key.shadow.camera.bottom = -5; key.shadow.bias = -.001; scene.add(key);
  const rim = new THREE.PointLight('#FF5A1F', 24, 15, 2); rim.position.set(3, .5, 2); scene.add(rim);
  const wine = new THREE.PointLight('#800020', 18, 15, 2); wine.position.set(-3, -1, 1); scene.add(wine);
  const fill = new THREE.HemisphereLight('#D1D1D1', '#080808', 1.25); scene.add(fill);
  const card = new THREE.Group(); scene.add(card);
  const bodyGeometry = new THREE.ExtrudeGeometry(outline(), { depth: DEPTH, bevelEnabled: true, bevelThickness: .003, bevelSize: .004, bevelSegments: 3, steps: 1, curveSegments: 24 }); bodyGeometry.translate(0, 0, -DEPTH / 2);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({ color: '#111111', metalness: .92, roughness: .23, clearcoat: .45, clearcoatRoughness: .26, envMapIntensity: 1.8 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial); body.castShadow = true; card.add(body);
  const loader = new THREE.TextureLoader(), textures = [], frontMaterials = [];
  let disposed = false;
  try {
    for (const name of ['essential-front', 'premium-front', 'elite-front', 'card-back']) {
      const tex = await loader.loadAsync(`/banking-cards/${name}.webp`); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy()); textures.push(tex);
      if (disposed) tex.dispose();
    }
  } catch (error) { renderer.dispose(); environment.dispose(); bodyGeometry.dispose(); bodyMaterial.dispose(); textures.forEach(t => t.dispose()); throw error; }
  for (let i = 0; i < 3; i++) frontMaterials.push(new THREE.MeshPhysicalMaterial({ map: textures[i], color: '#D1D1D1', metalness: i === 1 ? .55 : .4, roughness: i === 1 ? .38 : .52, clearcoat: .4, clearcoatRoughness: .32, envMapIntensity: .7 }));
  const faceGeo = faceGeometry(), front = new THREE.Mesh(faceGeo, frontMaterials[2]); front.position.z = DEPTH / 2 + .0041; card.add(front);
  const backMaterial = new THREE.MeshPhysicalMaterial({ map: textures[3], color: '#D1D1D1', metalness: .4, roughness: .52, clearcoat: .3, envMapIntensity: .7 });
  const back = new THREE.Mesh(faceGeo, backMaterial); back.rotation.y = Math.PI; back.position.z = -DEPTH / 2 - .0041; card.add(back);
  const edgePoints = outline().getPoints(100).map(p => new THREE.Vector3(p.x, p.y, DEPTH / 2));
  const edgeGeometry = new THREE.BufferGeometry().setFromPoints(edgePoints), edgeMaterial = new THREE.LineBasicMaterial({ color: '#FF5A1F', transparent: true, opacity: .38 });
  const edge = new THREE.LineLoop(edgeGeometry, edgeMaterial); card.add(edge);
  const floorGeometry = new THREE.PlaneGeometry(30, 30), floorMaterial = new THREE.ShadowMaterial({ opacity: .3 });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial); floor.rotation.x = -Math.PI / 2; floor.position.y = -2; floor.receiveShadow = true; scene.add(floor);
  let frame = 0, running = false, visible = false, reduced = !!options.reduced, isStory = options.mode === 'story';
  let progress = 0, pointerX = 0, pointerY = 0, flip = false, previousTime = 0;
  const targetRotation = new THREE.Vector3(.14, -.38, -.18), currentRotation = targetRotation.clone();
  const render = time => {
    frame = 0; if (disposed) return;
    const t = time / 1000, dt = Math.min(.2, previousTime ? (time - previousTime) / 1000 : .016); previousTime = time;
    let x = .14, y = -.38, z = -.18, distance = 8.8, cardY = .1, scale = 1;
    if (isStory && !reduced) {
      // Edge -> front -> approach -> back -> macro -> presentation.
      if (progress < .34) { const p = progress / .34; y = Math.PI / 2 * (1 - p) - .18 * p; x = .25 * (1 - p); z = -.07 - .08 * p; distance = 9 - p * 1.2; }
      else if (progress < .75) { const p = (progress - .34) / .41; y = -.18 + p * (Math.PI + .18); x = .07; z = -.15 + p * .15; distance = 7.8 - Math.sin(p * Math.PI) * .8; }
      else { const p = (progress - .75) / .25; y = Math.PI + p * Math.PI; x = .07 + p * .08; z = -.16 * p; distance = 7 + p * 1.2; }
      cardY = .02; scale = 1 + Math.sin(progress * Math.PI) * .08;
    } else if (flip) { y = Math.PI - .25; z = .1; }
    if (!reduced) { x += pointerY * .13 + Math.sin(t * .37) * .04; y += pointerX * .23 + Math.sin(t * .28) * .11; z += Math.sin(t * .21) * .025; cardY += Math.sin(t * .7) * .09; distance -= !isStory ? progress * .6 : 0; }
    targetRotation.set(x, y, z); currentRotation.lerp(targetRotation, reduced ? 1 : 1 - Math.exp(-dt * 5)); card.rotation.set(currentRotation.x, currentRotation.y, currentRotation.z);
    card.position.y = cardY; card.scale.setScalar(scale); camera.position.z += (distance - camera.position.z) * (reduced ? 1 : .075);
    rim.position.x = 3 + (reduced ? 0 : Math.sin(t * .32) * 1.5); edgeMaterial.opacity = reduced ? .3 : .28 + Math.sin(t * .6) * .13;
    renderer.render(scene, camera); canvas.dataset.rotation = currentRotation.y.toFixed(3); canvas.dataset.progress = progress.toFixed(3);
    if (running && visible && !reduced) frame = requestAnimationFrame(render);
  };
  const requestRender = () => { if (!frame && visible && !disposed) frame = requestAnimationFrame(render); };
  const resize = () => { const b = canvas.getBoundingClientRect(); if (!b.width || !b.height) return; renderer.setSize(b.width, b.height, false); camera.aspect = b.width / b.height; camera.updateProjectionMatrix(); requestRender(); };
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(canvas);
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) { running = true; previousTime = 0; requestRender(); } else { cancelAnimationFrame(frame); frame = 0; } }, { rootMargin: '100px' }); observer.observe(canvas);
  resize(); canvas.dataset.scene = 'ready';
  return {
    setPointer(x, y) { pointerX = x; pointerY = y; requestRender(); },
    setProgress(p) { progress = THREE.MathUtils.clamp(p, 0, 1); canvas.dataset.progress = progress.toFixed(3); requestRender(); },
    setFlipped(value) { flip = value; requestRender(); },
    setConcept(index) { front.material = frontMaterials[index] || frontMaterials[2]; bodyMaterial.color.set(index === 1 ? '#6E1423' : '#111111'); requestRender(); },
    setReduced(value) { reduced = value; if (value) { cancelAnimationFrame(frame); frame = 0; } previousTime = 0; requestRender(); },
    dispose() { disposed = true; running = false; cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect(); scene.traverse(obj => { if (obj.geometry && obj.geometry !== faceGeo) obj.geometry.dispose(); }); faceGeo.dispose(); [...frontMaterials, bodyMaterial, backMaterial, edgeMaterial, floorMaterial].forEach(m => m.dispose()); textures.forEach(t => t.dispose()); environment.dispose(); renderer.dispose(); canvas.dataset.scene = 'disposed'; }
  };
}
