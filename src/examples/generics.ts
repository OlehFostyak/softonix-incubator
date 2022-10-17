/* GENERICS */

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

export {}
