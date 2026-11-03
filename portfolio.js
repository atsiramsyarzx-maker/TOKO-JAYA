
import * as THREE from 'three';

const canvas = document.getElementById('portfolioScene');

if (canvas) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );

  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function resizeScene() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height, false);
  }

  resizeScene();
  window.addEventListener('resize', resizeScene);

  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 180, 24);

  const material = new THREE.MeshStandardMaterial({
    color: 0x00cfff,
    metalness: 0.8,
    roughness: 0.2,
    wireframe: false
  });

  const object = new THREE.Mesh(geometry, material);
  scene.add(object);

  const light1 = new THREE.PointLight(0x00d9ff, 35);
  light1.position.set(3, 3, 4);
  scene.add(light1);

  const light2 = new THREE.PointLight(0x8833ff, 30);
  light2.position.set(-3, -2, 3);
  scene.add(light2);

  scene.add(new THREE.AmbientLight(0xffffff, 1.5));

  function animate() {
    requestAnimationFrame(animate);

    object.rotation.x += 0.004;
    object.rotation.y += 0.008;

    renderer.render(scene, camera);
  }

  animate();
}
