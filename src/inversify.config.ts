import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./TYPES";
import { IUtensil } from "./example/IUtensil";
import { Spoon } from "./example/Spoon";
import { Knife } from "./example2/Knife";
import { Knife } from "./example/Knife";
import { Fork } from "./example/Fork";
import { FoodCritic } from "./example/FoodCritic";
import { IHungryDiner } from "./example/IHungryDiner";
import { IWeapon } from "./example2/IWeapon";
import { Toothpick } from "./example2/Toothpick";
import { IPlayer } from "./example2/IPlayer";
import { Warrior } from "./example2/Warrior";
import { Sword } from "./example2/Sword";

export default function loadContainer() {
    const container = new Container();
    container.bind<IUtensil>(TYPES.IUtensil).to(Knife);
    container.bind<IHungryDiner>(TYPES.IHungryDiner).to(FoodCritic);
    container.bind<IWeapon>(TYPES.IWeapon).toDynamicValue(() => {
        const r = Math.random();
        if (r > .3) {
            return new Toothpick();
        } else if (r > .31)
            return new Knife();
    });
    container.bind<IPlayer>(TYPES.IPlayer).to(Warrior);
    return container;
}