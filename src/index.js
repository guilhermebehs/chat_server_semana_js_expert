import SocketServer from "./socket.js";
import Event from 'events';
import { constants } from "./constants.js";
import Controller from "./controller.js";



const port = process.env.PORT || 9898;
const eventEmitter = new Event()
const socketServer = new SocketServer({port});
const server = await socketServer.initialize(eventEmitter);
console.log('server running on port',server.address().port)
const controller = new Controller({socketServer});
eventEmitter.on(constants.events.NEW_USER_CONNECTED, controller.onNewConnection.bind(controller))

