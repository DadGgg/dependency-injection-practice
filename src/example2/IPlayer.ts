import { Enemy } from "./Enemy";


export interface IPlayer {
    fight(enemies: Enemy[]): Enemy[];
}
