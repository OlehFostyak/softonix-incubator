<template>
  <div id="sticky-panel" class="sticky-panel p-4 pb-0">
    <h3 class="font-medium">Countries</h3>

    <hr class="mt-2">
  </div>

  <div class="p-4 h-[2000px] flex flex-col">
    <p v-if="loading">Loading...</p>

    <p v-else-if="!countries">Error happened during countries fetch</p>

    <ul v-else class="list-disc list-inside">
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}

        <ol>
          <li v-for="city in country.cities" v-show="citiesHashed[city]?.name" :key="city" class="ml-4">
            - {{ citiesHashed[city]?.name }}
          </li>
        </ol>
      </li>
    </ul>

    <p id="bottom-item" class="mt-auto">Bottom</p>
  </div>
</template>

<script lang="ts" setup>
import { countryService } from '@/examples/data-preparation'
import { intersectionService } from '@/examples/intersection'

const countries = ref()
const cities = ref()
const citiesHashed: any = ref({})

const loading = ref(false)

const loadDataPartially = () => {
  loading.value = true

  Promise.allSettled([countryService.getCountries(), countryService.getCities()])
    .then(res => {
      if (res[0].status === 'fulfilled') {
        countries.value = res[0].value
      }

      if (res[1].status === 'fulfilled') {
        cities.value = res[1].value
        citiesHashed.value = countryService.prepareHashedCities(cities.value)
      }
    })
    .finally(() => (loading.value = false))
}

loadDataPartially()

onMounted(() => {
  intersectionService.detectElementByIntersection()
})
</script>

<style lang="scss">
.sticky-panel {
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
}

.sticky-panel + div {
  padding-top: 64px;
}
</style>
