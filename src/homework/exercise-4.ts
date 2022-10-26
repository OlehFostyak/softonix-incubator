
/*
Опишіть клас таким чином, щоб він міг працювати з динамічними типами данних. Для цього використайте generics

  - Метод get повинен повертати масив з описаним типом на основі переданого generic.
    Тобто якщо в клас передано generic string, то метод має повертати string[]

  - Метод add повинен приймати 2 аргументи:
    el: елемент який потрібно додати до elements
    type: куди саме додати елемент. Може бути або append, або prepend. Дефолтне значення - append

  - Метод contains приймає аргумент predicate, який є функцією та перевіряє чи існує елемент в масиві elements.
    Приклад виконання дивіться нижче

  - Метод delete приймає аргумент predicate, який є функцією та видаляє елемент з масива elements.
    Приклад виконання дивіться нижче
*/

interface IUser {
  id: number
  name: string
}

class Collection {
  private elements = []

  constructor (elements = []) {
    this.elements = elements
  }

  get () {
    return this.elements
  }

  add (el, type) {
    // ...
  }

  contains (predicate) {
    // ...
  }

  delete (predicate) {
    // ...
  }
}

const stringCollection = new Collection()
stringCollection.add(['Hello, World!'])
stringCollection.contains(el => el === 'Hello, TS')

const strings = stringCollection.get()

const userCollection = new Collection()
userCollection.add({ id: 1, name: 'Viktor' })
userCollection.remove(el => el.id === 1)
const users = userCollection.get()

export {
  strings,
  users
}
