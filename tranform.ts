import { Transform, TransformCallback } from "stream";
import { controller } from "./controller";

export class CustomTransform extends Transform {
  constructor() {
    super();
  }

  async _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
    try {
      const transform = await controller(chunk.toString());
      callback(null, transform);
    } catch (err: any) {
      callback(err);
    }
  }
}