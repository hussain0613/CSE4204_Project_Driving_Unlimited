import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';


import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import {key_states, onKeyDownHandler, onKeyUpHandler} from './utils/key_handlers.js';
import {create_obstacel} from './utils/utils.js';

import {MeshBody} from './physics/meshbody.js';
import {MyWorld} from './physics/myworld.js';
