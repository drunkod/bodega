<template>
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
        <th class="px-4 py-3">{{ $t('villacobete.name') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.date') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.type') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.value') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.total') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.vatInc') }}</th>
        <th class="px-4 py-3">{{ $t('villacobete.actions') }}</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      <tr
        class="text-gray-700 dark:text-gray-400"
        v-for="(item, index) in items"
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
        <td class="px-4 py-3 text-sm">{{ currency.format(item.price) }}</td>
        <td class="px-4 py-3 text-sm">{{ currency.format(item.total) }}</td>
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
            {{ item.iva ? $t('general.yes') : $t('general.no') }}
          </span>
        </td>
        <td class="px-4 py-3">
          <div class="flex items-center space-x-4 text-sm">
            <router-link
              :to="{ name: `Edit ${type}`, params: { id: item.key } }"
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
            </router-link>
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
              @click="removeItem(item.key)"
            >
              <TrashIcon class="w-5 h-5" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { PencilAltIcon, TrashIcon } from '@heroicons/vue/solid'

  import { db } from '../firebase'

  export default defineComponent({
    name: 'CostExpensesTable',
    props: {
      items: <any>[],
      type: String,
      collection: String,
    },
    components: {
      PencilAltIcon,
      TrashIcon,
    },
    data() {
      return {
        currency: new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }),
      }
    },
    methods: {
      removeItem(id: string) {
        db.ref(`${this.collection}/${id}`).remove()
      },
    },
  })
</script>
