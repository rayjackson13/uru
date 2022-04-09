import { Engine } from 'babylonjs';

import './styles/styles.css';
import { Playground } from './scenes/Playground';
import { createCanvas } from './utils/createCanvas';

const canvas = createCanvas();
const engine = new Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});

Playground(canvas, engine);

// the canvas/window resize event handler
window.addEventListener('resize', () => {
  engine.resize();
});
