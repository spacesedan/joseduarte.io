import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

export default function Macbook() {
  const ref = useRef<HTMLCanvasElement>(null);
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGL1Renderer;
  let manager: THREE.LoadingManager;
  let mixer: THREE.AnimationMixer;
  let clock: THREE.Clock;

  useEffect(() => {
    const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');
    const {
      RectAreaLightUniformsLib,
    } = require('three/examples/jsm/lights/RectAreaLightUniformsLib');

    const canvas = ref.current;

    // init Camera
    camera = new THREE.PerspectiveCamera();

    // init Scene
    scene = new THREE.Scene();

    // Renderer
    renderer = new THREE.WebGL1Renderer({
      antialias: false,
      alpha: true,
      canvas: canvas,
    });
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    // Tablet, Desktop Size
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    // Mobile Size
    // renderer.setSize(320, 180);

    // init RectAreaLight
    RectAreaLightUniformsLib.init();
    const width = 10;
    const height = 20;
    const intensity = 20;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    rectLight.position.set(5, 5, 0);
    rectLight.lookAt(0, 0, 0);
    scene.add(rectLight);

    // Loading
    manager = new THREE.LoadingManager();
    manager.itemStart = function (url) {
      url = '/donut_toon.glb';
    };

    manager.onLoad = function () {
      console.log('Loading Complete');
    };

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      console.log(`Items loaded: ${itemsLoaded}/${itemsTotal}`);
    };

    manager.onError = function (url) {
      console.log('There was an error loading' + url);
    };

    // Clock
    clock = new THREE.Clock();

    // Load GLB File
    const loader = new GLTFLoader(manager);

    loader.load(
      '/macbook.glb',
      (gltf) => {
        console.dir(gltf);
        const macbook = gltf.scene;
        camera = gltf.cameras[0];
        mixer = new THREE.AnimationMixer(macbook);
        let action = mixer.clipAction(gltf.animations[0]);
        action.play();
        scene.add(macbook);
      },
      (xhr) => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      }
    );

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      render();
    };

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      render();
    }

    animate();

    return () => {
      scene.clear();
      camera.clear();
      renderer.clear();
    };
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <canvas ref={ref} id='macbook'></canvas>
    </div>
  );
}
