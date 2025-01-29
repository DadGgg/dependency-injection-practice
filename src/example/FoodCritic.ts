import { inject, injectable } from "inversify";
import { Food } from "./Food";
import { IUtensil } from "./IUtensil";
import { TYPES } from "../TYPES";
import { IHungryDiner } from "./IHungryDiner";
import { IPlateware } from "./IPlateware";

@injectable()
export class FoodCritic implements IHungryDiner {
    utensil: IUtensil;
    plate: IPlateware;
    fullness: number = 0;
    complaints: number = 0;
    constructor(@inject(TYPES.IUtensil) utensil: IUtensil)  {
        this.utensil = utensil;
        //this.utensil = new Spoon();
    }

    swap(utensil: IUtensil): IUtensil {
        this.utensil = utensil;
        return this.utensil;
    }

    eatOne(food: Food): Food {
        if (food.isFancy) {
            const foodEaten = this.utensil.scoop(food);
            this.fullness += this.fullness + foodEaten.amount; // += ?
        } else {
            this.complaints++;
        }
        return food;
    }

    eat(meal: Food[]): Food[] {
        for (let course of meal) {
            if (course.isFancy) {
                const foodEaten = this.utensil.scoop(course);
                this.fullness += this.fullness + foodEaten.amount; // += what does it mean?
            } else {
                this.complaints++; // adds 1 
            }
        }
        return meal;
    }

    getSatisfaction(): number {
        return this.fullness/this.complaints;
    }
}