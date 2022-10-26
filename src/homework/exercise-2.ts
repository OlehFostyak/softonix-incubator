
/*
  Опишіть тип TPerson на основі IUser та IAdmin та використовуйте це в масиві persons і функції logPerson,
  щоб виправити всі помилки TS.
*/

interface IUser {
  name: string
  age: number
  occupation: string
}

interface IAdmin {
  name: string
  age: number
  role: string
}

type TPerson = unknown

const persons: IUser[] /* <- замінити на IPerson[] */ = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
]

function logPerson (user: IUser) {
  console.log(` - ${user.name}, ${user.age}`)
}

export {
  persons,
  logPerson
}
