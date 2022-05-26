//MODELO DE LOS ATRIBUTOS DE UN USUARIO//

class UserModel {
  constructor(id, name, email, password, image) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.image = image
  }
}

module.exports = UserModel