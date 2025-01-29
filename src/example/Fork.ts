import { Food } from "./Food";
import { IUtensil } from "./IUtensil";
import { injectable } from "inversify";

@injectable()
export class Fork implements IUtensil {
    scoop(food: Food): Food {
        const half = food.takeHalf();
        return half;
    }
    // scoop(food: Food) {
    //     return food.takeHalf();
    // }
}