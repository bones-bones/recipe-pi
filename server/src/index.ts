import { Gpio } from 'onoff';
import { WebSocket } from 'ws';

import express from 'express';

const SOCKET_PORT = 8080;

console.log('server up');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

app.get('/', (_req, res) => {
    res.sendFile('./build/index.html', { root: __dirname + '/' });
});

app.get('*.js', (req, res) => {
    res.sendFile('./build/' + req.url, {
        root: __dirname + '/',
    });
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

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
