//MODELO DE LOS ATRIBUTOS DE UNA SALA//

class RoomModel {
  constructor(id, name, users, state) {
    this.id = id
    this.name = name
    this.users = users
    this.state = state
  }
}
module.exports = RoomModel