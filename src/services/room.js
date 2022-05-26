//SERVICIO DE ATRIBUTOS DE HABITACIONES//

RoomState = {
  waiting: 'Esperando jugadores',
  inProgress: 'Jugando',
}

class RoomService {
  static rooms = [
    {
      id: 1,
      name: 'Sala 1',
      users: [],
      state: RoomState.waiting,
    },
    {
      id: 2,
      name: 'Sala 2',
      users: [],
      state: RoomState.waiting,
    },
    {
      id: 3,
      name: 'Sala 3',
      users: [],
      state: RoomState.waiting,
    },
  ]
  static getRooms() {
    return this.rooms
  }
}

module.exports = RoomService
