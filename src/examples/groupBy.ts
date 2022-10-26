interface IPerson {
  id: number
  name: string
  age: number
  test?: string
  hobbies: string[]
}

const persons: IPerson[] = [
  { id: 1, name: 'Viktor', age: 10, hobbies: ['test', 'test1'] },
  { id: 2, name: 'Viktor', age: 15, hobbies: ['test', 'test1'] },
  { id: 3, name: 'Andriy', age: 10, hobbies: ['test', 'test1'] },
  { id: 4, name: 'Andriy', age: 20, hobbies: ['test', 'test1'] },
  { id: 5, name: 'Andriy', age: 30, hobbies: ['test', 'test1'] },
  { id: 6, name: 'Oleg', age: 20, hobbies: ['test', 'test1'] }
]

function groupBy<
  T extends Record<PropertyKey, any>,
  K extends { [K in keyof T]: T[K] extends PropertyKey ? K : never}[keyof T]>
(arr: T[], field: K) {
  return arr.reduce((acc, cur) => {
    (acc[cur[field]] = acc[cur[field]] || []).push(cur)
    return acc
  }, {} as Record<PropertyKey, T[]>)
}

const hashedPersons = groupBy(persons, 'name')

export {
  hashedPersons
}
