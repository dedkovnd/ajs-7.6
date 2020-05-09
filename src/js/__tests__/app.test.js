import {Character} from "../app";

test("length names and true's type", ()=> {
  const swordsman = new Character("Boob","Swordsman")
  const worstman = new Character("Boob", "Worstman")
  const bubuman = new Character("bb","Undead")
  const swordsmanType = {
    name: 'Boob',
    type: 'Swordsman',
    health: 100,
    level: 1
  }
  expect(swordsman).toEqual(swordsmanType)
  expect(worstman).toEqual("Unknow character")
  expect(bubuman).toEqual("Invalide name")
})

