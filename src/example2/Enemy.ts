export class Enemy {
    health: number;
    armor: number;
    constructor(health: number, armor: number) {
        this.health = health;
        this.armor = armor;
    }

    takeCriticalDamage() {
        this.health = this.health - this.health * .8;
        return this.health;
    }

    takeHalfCriticalDamage() {
        this.health = this.health - this.health * .4;
        return this.health;
    }

    takeBadDamage() {
        this.health = this.health - this.health * .5;
        return this.health;
    }

    takeHalfBadDamage() {
        this.health = this.health - this.health * .25;
        return this.health;
    }

    takeMinorDamage() {
        this.health = this.health - this.health * .3;
        return this.health;
    }

    takeHalfMinorDamage() {
        this.health = this.health - this.health * .15;
        return this.health;
    }
}
