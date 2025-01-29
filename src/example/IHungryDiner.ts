import { Food } from "./Food";
import { IUtensil } from "./IUtensil";


export interface IHungryDiner {
    swap(utensil: IUtensil): IUtensil;
    eatOne(food: Food): Food;
    eat(meal: Food[]): Food[];
    getSatisfaction(): number;
}
