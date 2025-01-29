import "reflect-metadata";

import loadContainer from "./inversify.config";
import { TYPES } from "./TYPES";
import { Enemy } from "./example2/Enemy";
import { Warrior } from "./example2/Warrior";
import { Knife } from "./example2/Knife";
import { IWeapon } from "./example2/IWeapon";
import { IPlayer } from "./example2/IPlayer";
import { Sword } from "./example2/Sword";
import { Toothpick } from "./example2/Toothpick";
import { Apprentice } from "./example2/Apprentice";

const container = loadContainer();

const enemy1 = new Enemy(10, 10);
const enemy2 = new Enemy(20, 20);
const enemy3 = new Enemy(30, 30);
const enemy4 = new Enemy(40, 40);

const player2 = new Warrior(new Sword());
const player1 = container.get<IPlayer>(TYPES.IPlayer); // always toothpick
const player3 = container.get<IPlayer>(TYPES.IPlayer);
const player4 = new Apprentice(new Knife());

player1.fight([enemy1]);
player1.fight([enemy2, enemy1]); //health enemy1 not reduced ...enemy2=16
player1.fight([enemy1]);
player1.fight([enemy1]);
player1.fight([enemy1]);
console.log(enemy1);
console.log(player1);

player2.fight([enemy3]); //enemy3=6
player2.fight([enemy3]);  //enemy3=1.199
player2.fight([enemy2, enemy3]); //enemy2=3.1999  enemy3=1.1999 health enemy3 not reduced
console.log(enemy2, enemy3);

player3.fight([enemy3]);

player4.fight([enemy4]);

const x = 1;