import Jimp from 'jimp';
import robot from 'robotjs';

export const moveUp = (inputY: string) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x, y - Number(inputY));
};

export const moveDown = (inputY: string) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x, y + Number(inputY));
};

export const moveLeft = (inputX: string) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x - Number(inputX), y );
};

export const moveRight = (inputX: string) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x + Number(inputX), y );
};

export const mousePosition = () => {
  return robot.getMousePos();
}

export const drawCircle = (radius: string) => {
  const { x, y } = robot.getMousePos();
  const radiusConverted = Number(radius);

  robot.moveMouse(
    x + (radiusConverted * Math.cos(0)), y + (radiusConverted * Math.sin(0))
  );
  robot.mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    
    const newX = x + (radiusConverted * Math.cos(i));
    const newY = y + (radiusConverted * Math.sin(i));
    
    robot.moveMouseSmooth(newX, newY);
}

  robot.mouseToggle('up');

}

export const drawSquare = (lengthOfEdge: string) => {
  const { x, y } = robot.getMousePos();
  const convertedLength = Number(lengthOfEdge);

  robot.mouseToggle('down');

  robot.moveMouseSmooth(x, y + convertedLength);
  robot.moveMouseSmooth(x - convertedLength, y + convertedLength);
  robot.moveMouseSmooth(x - convertedLength, y);
  robot.moveMouseSmooth(x, y);

  robot.mouseToggle('up');
}

export const drawRectangle = (height: string, width: string) => {
  const { x, y } = robot.getMousePos();
  const convertedHeight = Number(height);
  const convertedWidth = Number(width);

  robot.mouseToggle('down');

  robot.moveMouseSmooth(x, y + convertedWidth);
  robot.moveMouseSmooth(x - convertedHeight, y + convertedWidth);
  robot.moveMouseSmooth(x - convertedHeight, y);
  robot.moveMouseSmooth(x, y);

  robot.mouseToggle('up');
}