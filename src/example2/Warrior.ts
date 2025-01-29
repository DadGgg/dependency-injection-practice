import { injectable, inject } from "inversify";
import { Enemy } from "./Enemy";
import { Sword } from "./Sword";
import { IPlayer } from "./IPlayer";
import { Toothpick } from "./Toothpick";
import { IWeapon } from "./IWeapon";
import { TYPES } from "../TYPES";

@injectable()
export class Warrior implements IPlayer {
    weapon: IWeapon;
    constructor(@inject(TYPES.IWeapon) weapon: IWeapon) { // always toothpick
        this.weapon = weapon; 
    }
    fight(enemies: Enemy[]): Enemy[] {
        const firstEnemy = enemies[0];
        this.weapon.stab(firstEnemy);
        return enemies;
    }
}
