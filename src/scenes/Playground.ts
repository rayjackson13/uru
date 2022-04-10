import { Engine } from 'babylonjs';

import { createScene } from '../utils/createScene';

export const Playground = (engine: Engine) => {
  const scene = createScene(engine);

  engine.runRenderLoop(() => scene.render());

  return scene;
};
