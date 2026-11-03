
import * as THREE from 'three';

// Membuat scene
const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(
    45,
    1,
    0.1,
    100
);

camera.position.z = 5;

// Renderer
const canvas = document.querySelector("#scene3d");

if (canvas) {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    // Membuat bola 3D
    const geometry = new THREE.IcosahedronGeometry(1.35, 5);

    const material = new THREE.MeshPhysicalMaterial({
        color: 0x267dff,
        metalness: 0.75,
        roughness: 0.2,
        clearcoat: 1,
        emissive: 0x101b65,
        emissiveIntensity: 0.5
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Cahaya
    const light1 = new THREE.PointLight(0x00d9ff, 35);
    light1.position.set(3, 3, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x963cff, 30);
    light2.position.set(-3, -2, 2);
    scene.add(light2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // Ukuran canvas
    function resize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (!width || !height) return;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height, false);
    }

    window.addEventListener("resize", resize);
    resize();

    // Animasi
    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.003;
        sphere.rotation.y += 0.006;

        renderer.render(scene, camera);
    }

    animate();
}
