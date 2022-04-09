import { Engine } from 'babylonjs';

import { createScene } from '../utils/createScene';

export const Playground = (canvas: HTMLCanvasElement, engine: Engine) => {
  const scene = createScene(canvas, engine);

  engine.runRenderLoop(() => scene.render());

  return scene;
};
