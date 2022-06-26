import Jimp from 'jimp';
import robot from 'robotjs';

export const controller = (data: string) => {
  console.log(data);
  robot.moveMouse(100, 100);
  return 'moved';
}