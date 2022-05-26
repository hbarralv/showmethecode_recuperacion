const UserModel = require('../models/User');
const userService = require('../services/user');

class UserController {
  static getUsers() {
    return userService.getUsers();
  }

  static getUser(id) {
    const users = userService.getUsers();
    return users.find(user => user.id === id);
  }

  static getUserByEmail(email) {
    const users = userService.getUsers()
    return users.find(user => user.email === email)
  }

  static createUser(user) {
    const id = Math.floor(4 + Math.random() * 10)
    const { name, email, password, image } = user
    const newUser = new UserModel(id, name, email, password, image)
    const users = userService.getUsers()
    users.push(newUser)
    return newUser
  }

}

module.exports = UserController