export const createCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.id = 'game';
  document.body.appendChild(canvas);

  return canvas;
};
