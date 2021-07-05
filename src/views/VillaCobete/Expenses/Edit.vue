<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    New Expense
  </h2>
  <form @submit.prevent="newInput()">
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Name</span>
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
            form-input
          "
          placeholder="New expense"
          v-model="name"
          required
        />
      </label>
      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Date</span>
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
            form-input
          "
          placeholder="14/10/2020"
          v-model="date"
          required
        />
      </label>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Type</span>
        <select
          class="
            block
            w-full
            mt-1
            text-sm
            dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700
            form-select
            focus:border-purple-400
            focus:outline-none
            focus:shadow-outline-purple
            dark:focus:shadow-outline-gray
          "
          v-model="type"
          required
        >
          <option>basics</option>
          <option>taxes</option>
          <option>improvements</option>
        </select>
      </label>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Price</span>
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
            form-input
          "
          placeholder="1500"
          v-model="price"
          required
        />
      </label>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Total</span>
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
            form-input
          "
          placeholder="3000"
          v-model="total"
          required
        />
      </label>

      <div class="flex mt-4 text-sm">
        <label class="flex items-center dark:text-gray-400">
          <input
            type="checkbox"
            class="
              text-purple-600
              form-checkbox
              focus:border-purple-400
              focus:outline-none
              focus:shadow-outline-purple
              dark:focus:shadow-outline-gray
            "
            v-model="iva"
          />
          <span class="ml-2"> IVA Included </span>
        </label>
      </div>
    </div>
    <div class="flex items-center justify-start mt-2">
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
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { db } from '../../../firebase'

  export default defineComponent({
    name: 'EditExpense',
    data() {
      return {
        name: '',
        date: '',
        type: '',
        price: '',
        total: '',
        iva: false,
      }
    },
    methods: {
      newInput() {
        db.ref('villacobete/expenses')
          .push({
            name: this.name,
            date: this.date,
            price: this.price,
            total: this.total,
            type: this.type,
            iva: this.iva || false,
          })
          .then(() => this.$router.push('/villacobete'))
      },
    },
  })
</script>
