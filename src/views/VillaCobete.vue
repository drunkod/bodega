<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    VillaCobete
  </h2>

  <router-link
    to="/villacobete/simulation"
    class="
      flex
      items-center
      justify-between
      p-4
      mb-8
      text-sm
      font-semibold
      text-purple-100
      bg-purple-600
      rounded-lg
      shadow-md
      focus:outline-none focus:shadow-outline-purple
    "
  >
    <div class="flex items-center">
      <CurrencyEuroIcon class="w-5 h-5 mr-2" />
      <span>Mortgage simulation</span>
    </div>
    <span>View more →</span>
  </router-link>

  <div class="flex items-center justify-between mb-4">
    <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-300">
      Expenses
    </h4>
    <router-link
      to="/villacobete/expenses/new"
      class="
        inline-block
        text-sm
        px-4
        py-2
        leading-none
        border
        rounded
        text-white
        border-purple-600
        bg-purple-600
        hover:bg-transparent hover:text-purple-600
        mt-4
        ml-4
        lg:mt-0
      "
    >
      New
    </router-link>
  </div>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="
              text-xs
              font-semibold
              tracking-wide
              text-left text-gray-500
              uppercase
              border-b
              dark:border-gray-700
              bg-gray-50
              dark:text-gray-400 dark:bg-gray-800
            "
          >
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Type</th>
            <th class="px-4 py-3">Value</th>
            <th class="px-4 py-3">Total</th>
            <th class="px-4 py-3">IVA Inc.</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr
            class="text-gray-700 dark:text-gray-400"
            v-for="(item, index) in expenses"
            :key="index"
          >
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <p class="font-semibold">{{ item.name }}</p>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ item.date }}</td>

            <td class="px-4 py-3 text-xs">
              <span
                class="
                  px-2
                  py-1
                  font-semibold
                  leading-tight
                  text-green-700
                  bg-green-100
                  rounded-full
                  dark:text-red-100 dark:bg-red-700
                "
              >
                {{ item.type.toUpperCase() }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm">{{ item.price }}<span>€</span></td>
            <td class="px-4 py-3 text-sm">{{ item.total }}<span>€</span></td>
            <td class="px-4 py-3 text-xs">
              <span
                class="
                  px-2
                  py-1
                  font-semibold
                  leading-tight
                  text-gray-700
                  bg-gray-100
                  rounded-full
                  dark:text-red-100 dark:bg-red-700
                "
              >
                {{ item.iva ? 'SI' : 'NO' }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button
                  class="
                    flex
                    items-center
                    justify-between
                    px-2
                    py-2
                    text-sm
                    font-medium
                    leading-5
                    text-purple-600
                    rounded-lg
                    dark:text-gray-400
                    focus:outline-none focus:shadow-outline-gray
                  "
                >
                  <PencilAltIcon class="w-5 h-5" />
                </button>
                <button
                  class="
                    flex
                    items-center
                    justify-between
                    px-2
                    py-2
                    text-sm
                    font-medium
                    leading-5
                    text-purple-600
                    rounded-lg
                    dark:text-gray-400
                    focus:outline-none focus:shadow-outline-gray
                  "
                >
                  <TrashIcon class="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex items-center justify-between mb-4 mt-8">
    <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-300">
      Payments
    </h4>
    <router-link
      to="/villacobete/payments/new"
      class="
        inline-block
        text-sm
        px-4
        py-2
        leading-none
        border
        rounded
        text-white
        border-purple-600
        bg-purple-600
        hover:bg-transparent hover:text-purple-600
        mt-4
        ml-4
        lg:mt-0
      "
    >
      New
    </router-link>
  </div>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="
              text-xs
              font-semibold
              tracking-wide
              text-left text-gray-500
              uppercase
              border-b
              dark:border-gray-700
              bg-gray-50
              dark:text-gray-400 dark:bg-gray-800
            "
          >
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Type</th>
            <th class="px-4 py-3">Value</th>
            <th class="px-4 py-3">Total</th>
            <th class="px-4 py-3">IVA Inc.</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr
            class="text-gray-700 dark:text-gray-400"
            v-for="(item, index) in payments"
            :key="index"
          >
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <p class="font-semibold">{{ item.name }}</p>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ item.date }}</td>

            <td class="px-4 py-3 text-xs">
              <span
                class="
                  px-2
                  py-1
                  font-semibold
                  leading-tight
                  text-green-700
                  bg-green-100
                  rounded-full
                  dark:text-red-100 dark:bg-red-700
                "
              >
                {{ item.type.toUpperCase() }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm">{{ item.price }}<span>€</span></td>
            <td class="px-4 py-3 text-sm">{{ item.total }}<span>€</span></td>
            <td class="px-4 py-3 text-xs">
              <span
                class="
                  px-2
                  py-1
                  font-semibold
                  leading-tight
                  text-gray-700
                  bg-gray-100
                  rounded-full
                  dark:text-red-100 dark:bg-red-700
                "
              >
                {{ item.iva ? 'SI' : 'NO' }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button
                  class="
                    flex
                    items-center
                    justify-between
                    px-2
                    py-2
                    text-sm
                    font-medium
                    leading-5
                    text-purple-600
                    rounded-lg
                    dark:text-gray-400
                    focus:outline-none focus:shadow-outline-gray
                  "
                >
                  <PencilAltIcon class="w-5 h-5" />
                </button>
                <button
                  class="
                    flex
                    items-center
                    justify-between
                    px-2
                    py-2
                    text-sm
                    font-medium
                    leading-5
                    text-purple-600
                    rounded-lg
                    dark:text-gray-400
                    focus:outline-none focus:shadow-outline-gray
                  "
                >
                  <TrashIcon class="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {
    PencilAltIcon,
    TrashIcon,
    CurrencyEuroIcon,
  } from '@heroicons/vue/solid'

  import { db } from '../firebase'

  export default defineComponent({
    name: 'VillaCobete',
    data() {
      return {
        payments: [],
        expenses: [],
      }
    },
    components: {
      PencilAltIcon,
      TrashIcon,
      CurrencyEuroIcon,
    },
    created() {
      db.ref('villacobete/payments').on(
        'value',
        (res) => (this.payments = res.val())
      )
      db.ref('villacobete/expenses').on(
        'value',
        (res) => (this.expenses = res.val())
      )
    },
  })
</script>
