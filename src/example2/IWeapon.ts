import { Enemy } from "./Enemy";

export interface IWeapon{
    stab(enemy: Enemy): Enemy;
    stabHalf(enemy: Enemy): Enemy;
}


