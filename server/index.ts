

import {Gpio} from 'onoff';

const nextButton= new Gpio(25,'in', 'rising')



nextButton.watch((err, value) => { console.log('it down', value); });