import { Gpio } from 'onoff';
import { WebSocket } from 'ws';

const SOCKET_PORT = 8080;

console.log('server up');

// This is pretty gross, having a promise hang on this long is less than ideal. Fix later.
const initializeSocketConnection = () => {
    return new Promise<WebSocket>((resolve) => {
        const tempServer = new WebSocket.Server({ port: SOCKET_PORT });

        tempServer.on('connection', (webSocketConnection) => {
            webSocketConnection.on('message', (message) => {
                console.log('received a message', message.toString());
            });
            webSocketConnection.send('Message received');
            resolve(webSocketConnection);
        });
    });
};

const wsc = await initializeSocketConnection();

if (Gpio.accessible) {
    const nextButton = new Gpio(25, 'in', 'rising');

    nextButton.watch((err, value) => {
        console.log('it down', value);
        wsc.send({ message: 'button pressed' });
    });
}
