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