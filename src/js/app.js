// TODO: write your code here
import sum from './basic';

// console.log('worked');
//
// console.log(sum([1, 2]));
let arr = [
  {type: "Bowman",
    attack: 25,
    defence: 25
  },
  {type: "Swordsman",
    attack: 40,
    defence: 10
  },
  {type: "Magician",
    attack: 10,
    defence: 40
  },
  {type: "Undead",
    attack: 25,
    defence: 25
  },
  {type: "Zombie",
    attack: 40,
    defence: 10
  },
  {type: "Daemon",
    attack: 10,
    defence: 40
  }
];

let arrType = arr.map(elem => elem.type)

export function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  if (name.length < 2 || name.length > 10) {
    throw new Error("Invalide name")
  }
  if (arrType.indexOf(type) === -1) {
    throw new Error("Unknow character")
  }


  let battle = arr.filter(function(item){
    if(item.type === type) {
      return item;
    }
  })
  this.attack = battle[0].attack;
  this.defence = battle[0].defence;
}

export const damage = Character.prototype.damage = function(points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
    return this.health;
  }
}


