import { moveUp, moveDown, moveLeft, moveRight, mousePosition, drawCircle, drawSquare, drawRectangle, getScreenShot } from './src/robotOperations';
import { operations } from './src/types';

export const controller = async (data: string) => {
  const [command, firstArg, secondArg] = data.split(' ').filter((current: string) => current !== 'px');
  switch (command) {
    case operations.mouse_up:
      moveUp(firstArg);
      return `${operations.mouse_up} ${firstArg}`;
    case operations.mouse_down:
      moveDown(firstArg);
      return `${operations.mouse_down} ${firstArg}`;
    case operations.mouse_left:
      moveLeft(firstArg);
      return `${operations.mouse_left} ${firstArg}`;
    case operations.mouse_right:
      moveRight(firstArg);
      return `${operations.mouse_right} ${firstArg}`;
    case operations.mouse_position:
      const { x, y } = mousePosition();
      return `${operations.mouse_position} ${x},${y}`;
    case operations.draw_circle:
      drawCircle(firstArg);
      return `${operations.draw_circle}`;
    case operations.draw_rectangle:
      drawRectangle(firstArg, secondArg);
      return `${operations.draw_rectangle}`;
    case operations.draw_square:
      drawSquare(firstArg);
      return `${operations.draw_square}`;
    case operations.prnt_scrn:
      const screen = await getScreenShot();
      return `${operations.prnt_scrn} ${screen}`;
  }
}