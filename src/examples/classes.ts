interface IAddressRaw {
  ID: number
  Typ: string
  Bezeichnung: string
}

class Address {
  id: number
  type: string
  name: string

  constructor (json: IAddressRaw) {
    this.id = json.ID
    this.type = json.Typ
    this.name = json.Bezeichnung
  }

  concat () {
    return {
      id: this.id,
      address: this.type + this.name
    }
  }
}

async function getAddresses () {
  const { json } = await fetch('wadresse/list')
  return (await json()).map((address) => new Address(address))
}

function addAddress (address) {
  return fetch('wadresse/', { method: 'PUT', body: JSON.stringify(address) })
}

const concatAddress = () => {
  return {
    id: 1,
    address: 'some address'
  }
}

export {
  getAddresses,
  addAddress,
  concatAddress
}
