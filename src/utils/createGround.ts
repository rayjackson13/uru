import {
  PBRMaterial,
  Scene,
  MeshBuilder,
  Mesh,
  Color4,
  Vector4,
  Material,
  Vector3,
  SolidParticleSystem,
} from 'babylonjs';

const Colors = {
  Grass: new Color4(0.36, 0.8, 0.2, 1),
  Dirt: new Color4(0.61, 0.46, 0.33, 1),
};

const createGrid = (scene: Scene, ground: Mesh) => {
  const material = new PBRMaterial('discMaterial', scene);
  material.metallic = 3;
  material.roughness = 0.8;
  const sprite = MeshBuilder.CreateDisc(
    'disc',
    {
      radius: 0.05,
      sideOrientation: Mesh.FRONTSIDE,
    },
    scene
  );
  sprite.material = material;
  sprite.renderOutline = true;

  const { boundingBox } = ground.getBoundingInfo();
  const groundSize = boundingBox.extendSize.x * 2;

  const particleSystem = new SolidParticleSystem('gridSystem', scene);
  const size = groundSize + 1;
  particleSystem.addShape(sprite, Math.pow(size, 2));
  sprite.dispose(); // free memory;

  particleSystem.initParticles = () => {
    for (let i = 0; i < size; i++)
      for (let j = 0; j < size; j++) {
        const particle = particleSystem.particles[i * size + j];

        particle.position = new Vector3(
          -groundSize / 2 + j,
          -0.499,
          -groundSize / 2 + i
        );
        particle.rotation.x = Math.PI / 2;
      }
  };

  particleSystem.buildMesh();
  particleSystem.initParticles();
  particleSystem.setParticles();
};

const createGroundMaterial = (scene: Scene): Material => {
  const groundMaterial = new PBRMaterial('groundMaterial', scene);
  groundMaterial.metallic = 3;
  groundMaterial.roughness = 0.8;
  return groundMaterial;
};

export const createGround = (scene: Scene): Mesh => {
  const faceColors: Color4[] = Array(6).fill(Colors.Dirt);
  faceColors[4] = Colors.Grass;

  const faceUV: Vector4[] = Array(6).fill(new Vector4(0, 0, 1, 0));
  faceUV[4] = new Vector4(0, 0, 1, 1);

  const ground = MeshBuilder.CreateBox(
    'ground',
    {
      size: 20,
      height: 1,
      updatable: false,
      faceColors,
      faceUV,
    },
    scene
  );
  ground.material = createGroundMaterial(scene);
  ground.position.y = -1;
  ground.receiveShadows = true;

  createGrid(scene, ground);

  return ground;
};
