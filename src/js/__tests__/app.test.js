import {Character} from "../app";
import {damage} from "../app";

test("length names and true's type", ()=> {
  const swordsman = new Character("Boob","Swordsman")
  const swordsmanType = {
    name: 'Boob',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(swordsman).toEqual(swordsmanType)
  expect(()=> {new Character("Boob", "Worstman")}).toThrowError("Unknow character")
  expect(()=> {new Character("b","Undead")}).toThrowError("Invalide name")
})

test("damage can calculate the damage",()=>{
  const swordsman = new Character("Boob","Swordsman")
  expect(swordsman.damage(30)).toBe(73)
})
test("damage don t calculate, if health < 0",()=>{
  const swordsman = new Character("Boob","Swordsman")
  swordsman.health = -30
  expect(swordsman.damage(30)).not.toBe(swordsman.health < -30)
})


