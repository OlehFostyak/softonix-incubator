class CountryService {
  prepareHashedCities (data: any[]) {
    return data.reduce((accum, current: any) => {
      accum[current.id] = current

      return accum
    }, {} as any)
  }

  async getCountries () {
    await this.timer()
    return [{ name: 'Ukraine', id: '1', cities: ['101', '102', '103'] }, { name: 'USA', id: '2', cities: ['104', '105'] }]
  }

  async getCities () {
    await this.timer(2000)
    return Promise.reject(new Error('Service error'))
    return [{ name: 'Kyiv', id: '101' }, { name: 'Lviv', id: '102' }, { name: 'Kherson', id: '103' }, { name: 'New York', id: '104' }, { name: 'San Fransisco', id: '105' }]
  }

  async timer (timer = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, timer)
    })
  }
}

export const countryService = new CountryService()
