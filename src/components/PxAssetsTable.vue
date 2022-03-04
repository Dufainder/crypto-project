<template>
  <table>
    <thead>
      <tr class="bg-black text-white border-b-2 border-gray-400 rounded-sm">
        <th></th>
        <th :class="{ up: this.sortOrder == 1, down: this.sortOrder == -1 }">
          <span
            class="underline cursor-pointer text-white"
            @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th class="text-white">Nombre</th>
        <th class="text-white">Precio</th>
        <th class="text-white">Cap. de Mercado</th>
        <th class="text-white">Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-700 text-white focus:outline-none focus:shadow-outline border border-gray-700 rounded-lg  appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-900"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
            >{{ a.name }}</router-link
          >
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="{
            green: a.changePercent24Hr.includes('-') == false,
            red: a.changePercent24Hr.includes('-') == true
          }"
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button @custom-click="goToCoin(a.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from '@/components/PxButton'

export default {
  name: 'PxAssetsTable',

  components: { PxButton },

  data() {
    return {
      filter: '',
      sortOrder: 1
    }
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1
      return this.assets
        .filter(
          a =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder
          }

          return altOrder
        })
    }
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
  color: aliceblue;
}

.down::before {
  content: '👇';
  color: aliceblue;
}

.green {
  color: rgb(61, 255, 54);
  background-color: rgb(5, 5, 5);
}
.red {
  color: rgb(255, 51, 0);
  background-color: rgb(5, 5, 5);
}

input {
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  color: black;
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
  color: snow;
}

th {
  padding: 5px;
  font-size: 0.6rem;
  color: snow;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
    color: cyan;
  }

  th {
    padding: 12px;
  }
}
</style>
