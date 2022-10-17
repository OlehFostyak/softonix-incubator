class CountryService {
  countries = [{ name: 'Ukraine', id: '1', cities: ['101', '102', '103'] }, { name: 'USA', id: '2', cities: ['104', '105'] }]

  cities = [{ name: 'Kyiv', id: '101' }, { name: 'Lviv', id: '102' }, { name: 'Kherson', id: '103' }, { name: 'New York', id: '104' }, { name: 'San Fransisco', id: '105' }]

  prepareCountriesList () {
    const array = this.countries.map(country => {
      country.cities = country.cities.map((cityId) => {
        return this.cities.find(city => city.id === cityId)?.name as string
      })

      return country
    })

    return array
  }
}

export const countryService = new CountryService()
