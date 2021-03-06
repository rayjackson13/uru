import {
  Scene,
  Engine,
  Vector3,
  MeshBuilder,
  Light,
  ShadowGenerator,
  IShadowLight,
  DirectionalLight,
  PBRMaterial,
  Color3,
  Color4,
} from 'babylonjs';

import { createCamera } from './createCamera';
import { createGround } from './createGround';

/**
 * Creates a basic light, aiming 0, 1, 0 - meaning, to the sky.
 */
const createLight = (scene: Scene): Light => {
  const light = new DirectionalLight(
    'light',
    new Vector3(-0.75, -0.7, 0.25),
    scene
  );
  light.intensity = 10;

  return light;
};

const createEnvironment = (scene: Scene, shadowGenerator: ShadowGenerator) => {
  const boxMaterial = new PBRMaterial('boxMaterial', scene);
  boxMaterial.metallic = 1;
  boxMaterial.roughness = 0.8;
  boxMaterial.albedoColor = new Color3(0.7, 0.4, 0.3);
  const box = MeshBuilder.CreateBox(
    'sphere',
    {
      size: 1,
      updatable: true,
    },
    scene
  );
  box.material = boxMaterial;

  // Move the sphere upward 1/2 of its height
  box.position.y = 0;
  shadowGenerator.addShadowCaster(box, true);

  return createGround(scene);
};

const createShadowGenerator = (light: Light) => {
  const shadowGenerator = new ShadowGenerator(4096, light as IShadowLight);
  shadowGenerator.usePercentageCloserFiltering = true;
  shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;

  return shadowGenerator;
};

export const createScene = (engine: Engine) => {
  const scene = new Scene(engine);
  scene.createDefaultEnvironment({ createSkybox: false, createGround: false });
  scene.ambientColor = new Color3(1, 0, 0);
  scene.clearColor = new Color4(0.429, 0.608, 0.822, 1);

  const light = createLight(scene);
  const shadowGenerator = createShadowGenerator(light);
  const ground = createEnvironment(scene, shadowGenerator);
  createCamera(scene, ground.position);

  // Return the created scene
  return scene;
};
