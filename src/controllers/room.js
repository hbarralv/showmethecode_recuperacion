const RoomModel = require('../models/Room')
const roomService = require('../services/room')

class RoomController {
  static getRooms() {
    return roomService.getRooms()
  }

  static getRoom(id) {
    const rooms = roomService.getRooms()
    return rooms.find(room => room.id === id)
  }

  //CREAMOS LA SALA CUANDO ARRASTRAMOS EL AVATAR
  static createRoom(room) {
    const id = Math.floor(4 + Math.random() * 10)
    const { name, users, state } = room
    const newRoom = new RoomModel(id, name, users, state)
    const rooms = roomService.getRooms()
    rooms.push(newRoom)
    return newRoom
  }

  //ACTUALIZAMOS LA SALA CUANDO ARRASTRAMOS UN SEGUNDO AVATAR O INTENTAMOS ARRASTRAR EL PRIMERO
  static updateRoom(id, room) {
    const rooms = roomService.getRooms()
    const roomFound = rooms.find(r => r.id === id)
    if (roomFound) {
      roomFound.name = room.name
      roomFound.users = room.users
      roomFound.state = room.state

    }
    return roomFound
  }
}

module.exports = RoomController
