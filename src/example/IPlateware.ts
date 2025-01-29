import { Food } from "./Food";

export interface IPlateware {
    hold(food: Food): void;
}
