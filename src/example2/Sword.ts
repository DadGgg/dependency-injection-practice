import { Enemy } from "./Enemy";
import { IWeapon } from "./IWeapon";
import { injectable, inject } from "inversify";

@injectable()
export class Sword implements IWeapon {
    stab(enemy: Enemy): Enemy {
        enemy.takeCriticalDamage();
        return enemy;
    }
    stabHalf(enemy: Enemy): Enemy {
        enemy.takeHalfCriticalDamage();
        return enemy;
    }
}
