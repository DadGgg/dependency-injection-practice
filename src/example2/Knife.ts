import { Enemy } from "./Enemy";
import { IWeapon } from "./IWeapon";
import { injectable, inject } from "inversify";

@injectable()
export class Knife implements IWeapon {
    stab(enemy: Enemy): Enemy {
        enemy.takeBadDamage();
        return enemy;
    }
    stabHalf(enemy: Enemy): Enemy {
        enemy.takeHalfBadDamage();
        return enemy;
    }
}
