import { Scene, Vector3, ArcRotateCamera } from 'babylonjs';

/**
 * Creates a FreeCamera with position set to { x: 0, y: 5, z: -10 }.
 * Camera is targeted to scene origin and attached to canvas.
 */
export const createCamera = (scene: Scene, targetPosition: Vector3) => {
  const camera = new ArcRotateCamera(
    'camera',
    0,
    1.2,
    20,
    targetPosition,
    scene
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(false);
  camera.allowUpsideDown = false;
  camera.panningSensibility = 200;
  camera.minZ = 0;
  camera.lowerRadiusLimit = 2;
  camera.upperRadiusLimit = 25;
  camera.lowerBetaLimit = 0;
  camera.upperBetaLimit = Math.PI / 2;
  camera.allowUpsideDown = false;
  camera.panningAxis = new Vector3(1, 0, 1);
};
