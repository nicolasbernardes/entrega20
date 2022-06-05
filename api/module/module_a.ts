import { MyDatabaseModule } from '../utils/singleton.js';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'luiz', age: 30 });
myDatabaseClassic.add({ name: 'Mary', age: 25 });
myDatabaseClassic.add({ name: 'Bob', age: 20 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();


export {myDatabaseClassic};