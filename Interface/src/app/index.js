import '../style/app.scss';

//Application State
import { store, updateSync } from './control/store';

//Socket.io Files
import io from 'socket.io-client';

export const socket = io('http://localhost:5000');

//Control Files
import './control/controllers/timerController';
import './control/controllers/teamController';
import './control/controllers/scoreController';
import './control/controllers/bannerController';
import './control/controllers/lowerThirdController';

//Application Files
import './client/client';


