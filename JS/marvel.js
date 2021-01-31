// const Hero = function (name, hp = 100, hitPower = 2, hitSpeed = 1) {
//     this.name = name;
//     this.hp = hp;
//     this.hitPower = hitPower;
//     this.hitSpeed = hitSpeed;
// }
// Hero.prototype.getHit = function (hitPower, hitSpeed) {
//     this.hp = this.hp - hitPower*hitSpeed;
// }

// const spiderMan = new Hero('SpiderMan', 100, 10, 2);
// console.log(spiderMan);

// const hulk = new Hero('Hulk', 100, 30, 1);
// console.log(hulk);

// hulk.getHit(spiderMan.hitPower, spiderMan.hitSpeed);
// hulk.getHit(spiderMan.hitPower, spiderMan.hitSpeed);

// console.log(hulk);

// spiderMan.getHit(hulk.hitPower, hulk.hitSpeed);

// console.log(spiderMan);



const Hero = function (name, hp = 100, hitPower = 2, hitSpeed = 1) {
    this.name = name;
    this.hp = hp;
    this.hitPower = hitPower;
    this.hitSpeed = hitSpeed;
}
Hero.prototype.getHit = function (hitPower, hitSpeed) {
    this.hp = this.hp - hitPower*hitSpeed;
}
const GoodHero = function (name, hp = 100, hitPower = 2, hitSpeed = 1, kindNess) {
    Hero.call(this, name, hp, hitPower, hitSpeed)
    // this.name = name;
    // this.hp = hp;
    // this.hitPower = hitPower;
    // this.hitSpeed = hitSpeed;
    this.kindNess = kindNess;
}

const spiderMan = new GoodHero ('SpiderMan', 100, 5, 2, 10);
console.log(spiderMan);

// const BadHero = new Hero ();
// console.log(BadHero);

