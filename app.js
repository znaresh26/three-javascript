// app.js
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthTexture = new THREE.TextureLoader().load('https://cdn.rawgit.com/mrdoob/three.js/master/examples/textures/land_ocean_ice_cloud_2048.jpg');
const earthNormalMap = new THREE.TextureLoader().load('https://cdn.rawgit.com/mrdoob/three.js/master/examples/textures/land_ocean_ice_cloud_normal_2048.jpg');
const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture, normalMap: earthNormalMap });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const cloudsGeometry = new THREE.SphereGeometry(1.01, 32, 32);
const cloudsTexture = new THREE.TextureLoader().load('https://cdn.rawgit.com/mrdoob/three.js/master/examples/textures/fair_clouds_4k.png');
const cloudsMaterial = new THREE.MeshLambertMaterial({ map: cloudsTexture, transparent: true });
const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
scene.add(clouds);

const moonGeometry = new THREE.SphereGeometry(0
