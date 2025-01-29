import { Enemy } from "./Enemy";
import { IWeapon } from "./IWeapon";
import { injectable, inject } from "inversify";

@injectable()
export class Toothpick implements IWeapon {
    stab(enemy: Enemy): Enemy {
        enemy.takeMinorDamage();
        return enemy;
    }
    stabHalf(enemy: Enemy): Enemy {
        enemy.takeHalfMinorDamage();
        return enemy;
    }
}
