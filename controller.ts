import { moveUp, moveDown, moveLeft, moveRight, mousePosition } from './src/robotOperations';
import { operations } from './src/types';

export const controller = (data: string) => {
  const [command, firstArg, secondArg] = data.split(' ').filter((current: string) => current !== 'px');
  console.log(command, firstArg, secondArg);
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
  }
}