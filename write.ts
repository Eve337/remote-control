import { Writable } from "stream";
import { WebSocket } from "ws";

interface IWriteStream {
  websocket: WebSocket
}

export class CustomWriteStream extends Writable implements IWriteStream  {
  constructor (ws: WebSocket) {
    super();
    this.websocket = ws;
  }
  websocket: WebSocket;

  _write(chunk: { toString: () => any; }, encoding: any, callback: () => void) {
    this.websocket.send(chunk.toString());
    callback();
  }
}