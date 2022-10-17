const newForm = () => ({
  id: 0,
  name: '',
  age: 0
})

const form: Pick<ReturnType<typeof newForm>, 'name' | 'age'> = {
  name: 'Viktor',
  age: 26
}

export {
  form
}
