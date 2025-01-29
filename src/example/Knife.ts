import { Food } from "./Food";
import { IUtensil } from "./IUtensil";
import { injectable } from "inversify";

@injectable()
export class Knife implements IUtensil {
    used: boolean = false;
    scoop(food: Food) {
        this.used = true;
        return food.takeSome();
    }
}