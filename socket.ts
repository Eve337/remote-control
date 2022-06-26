import stream, { pipeline } from "stream";
import { WebSocket } from "ws";
import { CustomTransform } from "./tranform";
import { CustomWriteStream } from "./write";


export const connectHandler = (ws: WebSocket) => {
  const readStream = new stream.Readable({
    read(){}
  });
  const transformOp = new CustomTransform();
  const writeStream = new CustomWriteStream(ws)


  ws.on('message', (data) => {
    console.log(data);
    readStream.push(data);
  });

  pipeline(readStream, transformOp, writeStream, (err) => {
    if (err) console.log(err);
  });
}