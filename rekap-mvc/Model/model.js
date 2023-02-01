const fs = require("fs")
const Hero = require("./Heroes")

class Model {
  static showData() {
    const dataHeroes = JSON.parse(fs.readFileSync("./data.json", "utf-8"))

    const heroes = dataHeroes.map((hero) => {
      const newHeroes = new Hero(hero.id, hero.name, hero.alter, hero.ability)

      return newHeroes
    })
    return heroes
  }
}

module.exports = Model