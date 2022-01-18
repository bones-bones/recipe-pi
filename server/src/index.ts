import { Gpio } from 'onoff';

console.log('server up');

if (Gpio.accessible) {
    const nextButton = new Gpio(25, 'in', 'rising');

    nextButton.watch((err, value) => {
        console.log('it down', value);
    });
}
