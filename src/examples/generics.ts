/* GENERICS */
function getLastItem<T> (arr: T[]) {
  return arr[arr.length - 1]
}

const last = getLastItem([1, 2, 3])
const lastString = getLastItem(['1', '2', '3'])
const lastObject = getLastItem([{ a: 1, b: '2' }])

/* GENERICS WITH INTERFACE */
type TTableHeadings<T = Record<string, any>> = Array<{
  label: string
  value: string
  width?: number
  formatter?: (row: T) => string | number
}>

interface ITestItem {
  id: number
  firstName: string
  lastName: string
  email: string
}

const someList: ITestItem[] = [
  { id: 1, firstName: 'Viktor', lastName: 'Romanyuk', email: 'someEmail1@email.com' },
  { id: 2, firstName: 'Andriy', lastName: 'Vasylytsya', email: 'someEmail2@email.com' },
  { id: 3, firstName: 'Sviatoslav', lastName: 'Luchyshyn', email: 'someEmail3@email.com' }
]

const tableHeadings: TTableHeadings<ITestItem> = [
  { label: 'ID', value: 'id' },
  { label: 'Name', value: 'name', formatter: row => `${row.firstName} ${row.lastName}` },
  { label: 'Email', value: 'email', formatter: row => `${row.email.split('@')[1]}` }
]

export {
  tableHeadings,
  last,
  lastString,
  lastObject,
  someList
}
