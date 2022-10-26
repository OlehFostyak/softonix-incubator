// Опишіть interface на основі змінної users та використайте його відповідно.
// Note: Ми використовуємо різні префікси для interface, type, enum (I, T, E відповідно)

const users = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
]

function logPerson (user) {
  console.log(` - ${user.name}, ${user.age}`)
}

export {
  users,
  logPerson
}
