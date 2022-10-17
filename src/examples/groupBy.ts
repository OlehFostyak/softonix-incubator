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

function groupBy (arr, field) {
  return arr.reduce((acc, cur) => {
    (acc[cur[field]] = acc[cur[field]] || []).push(cur)
    return acc
  }, {})
}

const hashedPersons = groupBy(persons, 'name')

/* OUTPUT {
  Viktor: [
    { id: 1, name: 'Viktor', age: 10, hobbies: ['test', 'test1'] },
    { id: 2, name: 'Viktor', age: 15, hobbies: ['test', 'test1'] }
  ],
  Andriy: [
    { id: 3, name: 'Andriy', age: 10, hobbies: ['test', 'test1'] },
    { id: 4, name: 'Andriy', age: 20, hobbies: ['test', 'test1'] },
    { id: 5, name: 'Andriy', age: 30, hobbies: ['test', 'test1'] }
  ],
  Oleg: [
    { id: 6, name: 'Oleg', age: 20, hobbies: ['test', 'test1'] }
  ]
} */

export {
  hashedPersons
}
