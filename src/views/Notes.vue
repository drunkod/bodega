<template>
  <h1
    class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 max-w-6xl mx-auto"
  >
    Найти
    <span
      class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-500 to-green-400"
      >GitHub</span
    >
    Репозитории:
  </h1>

  <!-- Строка поиска поискового клиента. 
  Когда пользователь вводит запрос в строку поиска, 
  на основе текущего запроса выбирается новый список репозиториев. -->
  <SearchBar @search="search" />

  <!-- Список репозиториев, полученных из GitHub GraphQL API. -->
  <RepositoryList :search-options="searchOptions" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import RepositoryList from "@/components/Notes/RepositoryList.vue";
import SearchBar from "@/components/Notes/SearchBar.vue";

export default defineComponent({
  name: "Notes",
  components: {
    RepositoryList,
    SearchBar
  },
  setup() {
    const searchOptions = reactive({
      query: "",
      limit: 10
    });

// Ввод запроса вызывает событие «поиска» с текущим запросом и
//  запускает search функцию в <App />компоненте.
//  Эта search функция устанавливает значение query поля
//   в реактивном searchOptions объекте.
    const search = (query: string) => {
      searchOptions.query = query;
    };

    return {
      searchOptions,
      search
    };
  }
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
