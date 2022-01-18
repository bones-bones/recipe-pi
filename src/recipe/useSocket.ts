import { WebSocket } from 'ws';

export const ws = new WebSocket('ws://192.168.86.36:8080');

ws.on('open', () => {
    ws.send('something');
});
ws.on('message', (data) => {
    console.log(data);
});
