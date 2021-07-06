<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    Calculadora de hipotéca
  </h2>
  <div class="grid gap-6 mb-8 md:grid-cols-2">
    <form class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div>
        <label class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">Banco</span>
          <input
            class="
              block
              w-full
              mt-1
              text-sm
              dark:border-gray-600 dark:bg-gray-700
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:text-gray-300 dark:focus:shadow-outline-gray
              border-gray-200 border
              rounded-md
              px-3
              py-2
            "
            placeholder="ING"
            v-model="bank"
          />
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Precio vivienda</span>
          <div
            class="
              relative
              text-gray-500
              focus-within:text-purple-600
              dark:focus-within:text-purple-400
            "
          >
            <input
              class="
                block
                w-full
                pr-10
                mt-1
                text-sm text-black
                dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700
                focus:border-purple-400
                focus:outline-none
                focus:shadow-outline-purple
                dark:focus:shadow-outline-gray
                border-gray-200 border
                rounded-md
                px-3
                py-2
              "
              type="number"
              v-model="price"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                mr-3
                pointer-events-none
              "
            >
              <CurrencyEuroIcon class="w-5 h-5" />
            </div>
          </div>
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400"
            >Cantidad a financiar</span
          >
          <input
            class="
              block
              w-full
              mt-1
              text-sm
              dark:border-gray-600 dark:bg-gray-700
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:text-gray-300 dark:focus:shadow-outline-gray
              border-gray-200 border
              rounded-md
              py-2
            "
            type="range"
            :min="this.minFinanceQty"
            :max="this.maxFinanceQty"
            v-model="financeQty"
            required
          />
          <div
            class="text-gray-700 dark:text-gray-400 mt-4 flex justify-between"
          >
            <div class="relative">
              <input
                class="
                  block
                  w-auto
                  mt-1
                  text-sm
                  dark:border-gray-600 dark:bg-gray-700
                  focus:border-purple-400
                  focus:outline-none
                  focus:shadow-outline-purple
                  dark:text-gray-300 dark:focus:shadow-outline-gray
                  border-gray-200 border
                  rounded-md
                  px-3
                  py-2
                "
                type="number"
                v-model="financeQty"
                required
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  mr-3
                  pointer-events-none
                "
              >
                <span class="w-5 h-5">€</span>
              </div>
            </div>
            <div class="relative">
              <input
                class="
                  block
                  w-auto
                  mt-1
                  text-sm
                  dark:border-gray-600 dark:bg-gray-700
                  focus:border-purple-400
                  focus:outline-none
                  focus:shadow-outline-purple
                  dark:text-gray-300 dark:focus:shadow-outline-gray
                  border-gray-200 border
                  rounded-md
                  px-3
                  py-2
                "
                type="number"
                v-model="financePercentage"
                required
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  mr-3
                  pointer-events-none
                "
              >
                <span class="w-5 h-5">%</span>
              </div>
            </div>
          </div>
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Plazo máximo</span>
          <input
            class="
              block
              w-full
              mt-1
              text-sm
              dark:border-gray-600 dark:bg-gray-700
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:text-gray-300 dark:focus:shadow-outline-gray
              border-gray-200 border
              rounded-md
              px-3
              py-2
            "
            type="number"
            v-model="termLimit"
            required
          />
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">TIN</span>
          <input
            class="
              block
              w-full
              mt-1
              text-sm
              dark:border-gray-600 dark:bg-gray-700
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:text-gray-300 dark:focus:shadow-outline-gray
              border-gray-200 border
              rounded-md
              px-3
              py-2
            "
            type="number"
            v-model="tin"
            required
          />
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">TAE</span>
          <input
            class="
              block
              w-full
              mt-1
              text-sm
              dark:border-gray-600 dark:bg-gray-700
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:text-gray-300 dark:focus:shadow-outline-gray
              border-gray-200 border
              rounded-md
              px-3
              py-2
            "
            type="number"
            v-model="tae"
            required
          />
        </label>
      </div>
      <div class="flex items-center justify-start mt-6">
        <button
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
          "
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
    <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <h2
        class="
          mb-4
          text-xl
          font-semibold
          text-gray-700
          dark:text-gray-200
          pb-2
          border-b
        "
      >
        {{ $t('villacobete.mortgageDetail') }}
      </h2>
      <div
        class="
          flex
          justify-between
          font-semibold
          mb-4
          pb-4
          border-b border-gray-800
          text-xl
        "
      >
        <span>{{ $t('villacobete.monthlyPayment') }}:</span
        ><span>{{ currency.format(this.feeFormulae) }}</span>
      </div>
      <div class="flex justify-between mb-4 pb-4 border-b border-gray-800">
        <span>{{ $t('villacobete.totalFees') }}:</span
        ><span>{{ this.totalFees }}</span>
      </div>
      <div class="flex justify-between mb-4 pb-4 border-b border-gray-800">
        <span>{{ $t('villacobete.totalAmount') }}:</span
        ><span>{{ currency.format(this.totalMortgage) }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>{{ $t('villacobete.totalCost') }}:</span
        ><span>{{ currency.format(this.totalMortgage) }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>{{ $t('villacobete.amountInterest') }}:</span
        ><span>{{ currency.format(this.totalMortgage) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { CurrencyEuroIcon } from '@heroicons/vue/solid'

  export default defineComponent({
    name: 'MortgageSimulation',
    components: {
      CurrencyEuroIcon,
    },
    data() {
      return {
        bank: '',
        price: 305000,
        minFinanceQty: 50000,
        financeQty: 244000,
        tin: 1.49,
        tae: 1.66,
        termLimit: 30,
        currency: new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }),
      }
    },
    computed: {
      maxFinanceQty(): number {
        return (this.price / 100) * 80
      },
      financePercentage(): number {
        return (100 / this.price) * this.financeQty
      },
      totalFees(): number {
        return this.termLimit * 12
      },
      updateFormulae(): number {
        const i = this.tin / 12 / 100
        return (1 - Math.pow(1 + i, -this.totalFees)) / i
      },
      feeFormulae(): number {
        return this.financeQty / this.updateFormulae
      },
      totalMortgage(): number {
        const i = this.tae / 12 / 100
        const update = (1 - Math.pow(1 + i, -this.totalFees)) / i
        return (this.financeQty / update) * this.totalFees
      },
    },
    methods: {},
  })
</script>
