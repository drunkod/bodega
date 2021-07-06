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
      <span>{{ $t('villacobete.mortgateSimulation') }}</span>
    </div>
    <span>{{ $t('general.viewMore') }} →</span>
  </router-link>

  <!-- Cards -->
  <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
    <!-- Card -->
    <div
      class="
        flex
        items-center
        p-4
        bg-white
        rounded-lg
        shadow-xs
        dark:bg-gray-800
      "
    >
      <div
        class="
          p-3
          mr-4
          text-yellow-500
          bg-yellow-100
          rounded-full
          dark:text-yellow-100 dark:bg-yellow-500
        "
      >
        <HomeIcon class="w-5 h-5" fill="currentColor" />
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {{ $t('villacobete.housePrice') }}
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ currency.format(305000) }}
        </p>
      </div>
    </div>
    <!-- Card -->
    <div
      class="
        flex
        items-center
        p-4
        bg-white
        rounded-lg
        shadow-xs
        dark:bg-gray-800
      "
    >
      <div
        class="
          p-3
          mr-4
          text-green-500
          bg-green-100
          rounded-full
          dark:text-green-100 dark:bg-green-500
        "
      >
        <CalculatorIcon class="w-5 h-5" fill="currentColor" />
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {{ $t('villacobete.totalPrice') }}
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ currency.format(totalPrice) }}
        </p>
      </div>
    </div>
    <!-- Card -->
    <div
      class="
        flex
        items-center
        p-4
        bg-white
        rounded-lg
        shadow-xs
        dark:bg-gray-800
      "
    >
      <div
        class="
          p-3
          mr-4
          text-blue-500
          bg-blue-100
          rounded-full
          dark:text-blue-100 dark:bg-blue-500
        "
      >
        <CurrencyEuroIcon class="w-5 h-5" fill="currentColor" />
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {{ $t('villacobete.totalPaid') }}
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ currency.format(35000) }}
        </p>
      </div>
    </div>
    <!-- Card -->
  </div>

  <div class="flex items-center justify-between mb-4">
    <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-300">
      {{ $t('villacobete.expenses') }}
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
      {{ $t('general.add') }}
    </router-link>
  </div>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <CostExpensesTable
        :items="expenses"
        type="Expense"
        :collection="expensesCollection"
      />
    </div>
  </div>
  <div class="flex items-center justify-between mb-4 mt-8">
    <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-300">
      {{ $t('villacobete.payments') }}
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
      {{ $t('general.add') }}
    </router-link>
  </div>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <CostExpensesTable
        :items="payments"
        type="Payment"
        :collection="paymentsCollection"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {
    CurrencyEuroIcon,
    HomeIcon,
    CalculatorIcon,
    PencilAltIcon,
  } from '@heroicons/vue/solid'
  import CostExpensesTable from '../components/CostExpensesTable.vue'

  import { db } from '../firebase'

  export default defineComponent({
    name: 'VillaCobete',
    data() {
      return {
        payments: [],
        expenses: [],
        totalPrice: 0,
        currency: new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }),
        paymentsCollection: 'villacobete/payments',
        expensesCollection: 'villacobete/expenses',
      }
    },
    components: {
      PencilAltIcon,
      CurrencyEuroIcon,
      HomeIcon,
      CalculatorIcon,
      CostExpensesTable,
    },
    created() {
      this.getPayments()
      this.getExpenses()
    },
    computed: {
      sumTotals(arr: any[]): number {
        console.log(arr)
        return arr.reduce((a, b) => a + (b.total || 0), 0)
      },
    },
    methods: {
      getPayments() {
        db.ref(this.paymentsCollection).on('value', (res: any) => {
          const item = new Map(Object.entries(res.val()))
          item.forEach((val: any, key: any) => {
            this.payments.push({ key: key, ...val })
          })
        })
      },
      getExpenses() {
        db.ref(this.expensesCollection).on('value', (res: any) => {
          const item = new Map(Object.entries(res.val()))
          item.forEach((val: any, key: any) => {
            this.expenses.push({ key: key, ...val })
          })
        })
      },
    },
  })
</script>
