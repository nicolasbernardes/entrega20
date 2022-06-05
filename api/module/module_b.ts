import { MyDatabaseModule } from '../utils/singleton.js';
import {myDatabaseClassic as myDatabaseClassicFromModuleA} from './module_a.js';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'roberto', age: 30 });
myDatabaseClassic.add({ name: 'nico', age: 25 });
myDatabaseClassic.add({ name: 'paola', age: 20 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log( myDatabaseClassic === myDatabaseClassicFromModuleA)
