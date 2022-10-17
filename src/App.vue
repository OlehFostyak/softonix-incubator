<template>
  <div class="sticky-panel p-4 pb-0">
    <h3 class="font-medium">Countries</h3>

    <hr class="mt-2">
  </div>

  <div class="p-4 h-[2000px] flex flex-col">
    <ul class="list-disc list-inside">
      <li v-for="country in countryService.countries" :key="country.id">
        {{ country.name }}

        <ol>
          <li v-for="city in country.cities" :key="city" class="ml-4">
            - {{ city }}
          </li>
        </ol>
      </li>
    </ul>

    <div id="bottm" class="mt-auto">Bottom</div>

    <!-- <div>
      <pre>
        <div v-html="JSON.stringify(countryService.citiesHashed, null, 2)" />
      </pre>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { countryService } from '@/examples/data-preparation'

// const countries = countryService.prepareCountriesList()
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
