<template>
  <div class="flex justify-center" v-if="loading">
    <p class="text-xl font-bold text-gray-500">Request is loading...</p>
  </div>
  <div class="flex justify-center" v-else-if="error">
    <p class="text-xl font-bold text-red-600">Request has failed!</p>
  </div>
  <div v-else-if="repositories.length">
    <ul class="md:block max-w-6xl mx-auto">
      <li
        class="relative mb-8"
        v-for="repository in repositories"
        :key="repository.id"
      >

      <!-- Индивидуальное хранилище списка репозиториев. 
      В правом верхнем углу есть кнопка для добавления / отмены пометки репозитория.  -->
        <Repository :repository="repository" :search-options="searchOptions" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SearchResultItemConnection } from "@octokit/graphql-schema";
import { ALL_TODOS, ALL_FUZZY } from "@/graphql/documents";
import Repository from "@/components/Notes/Repository.vue";
export default defineComponent({
  name: "RepositoryList",
  components: {
    Repository
  },
  props: {
    searchOptions: {
      type: Object,
      default() {
        return { query: "ab", limit: 10 };
      }
    }
  },
  setup(props: { searchOptions: Record<string, any> }) {
    const { searchOptions } = toRefs(props);
    // Чтобы получить этот список репозиториев, 
    // компонент выполняет функцию композиции useQuery, 
    // которая принимает документ GraphQL ( SEARCH_REPOS) 
    // в качестве первого аргумента и аргументы запроса 
    // ( searchOptions) в качестве второго аргумента. 
    const { result, loading, error } = useQuery<{
      search: SearchResultItemConnection;
    }>(ALL_FUZZY, searchOptions);
    // result - Объект, представляющий данные, возвращаемые Apollo из GraphQL API.

    // loading - Логическое значение, указывающее, получает ли запрос данные по-прежнему или нет.

    // error- Ошибка при получении данных. Он содержит messageописание причины ошибки.
    const repositories = useResult(
      result,
      [],// Note
      data => data._fuzzysearch_search
    );

    console.log(JSON.stringify(repositories))
    return {
      loading,
      error,
      repositories
    };
  }
});
</script>