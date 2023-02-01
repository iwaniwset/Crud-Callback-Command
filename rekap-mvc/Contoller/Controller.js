const Model = require("../Model/model")
const View = require("../View/view")

class Controller {
  static showData() {
    const heroes = Model.showData()
    View.showData(heroes)
  }
}

module.exports = Controller