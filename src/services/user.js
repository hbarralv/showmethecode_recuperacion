//SERVICIO DE ATRIBUTOS USUARIOS//

class UserService {
  static users = [
    {
      id: 1,
      name: 'showmethecode',
      email: 'showmethecoder@email.com',
      password: 'password',
      image: 'showmethecode'
    },
  ];

  static getUsers() {
    return this.users
  }

  static setUsers(users) {
    this.users = users
  }
}

module.exports = UserService