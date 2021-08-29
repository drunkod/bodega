<template>
  <div class="flex justify-center" v-if="loading">
    <p class="text-xl font-bold text-gray-500">Request is loading...</p>
  </div>
  <div class="flex justify-center" v-else-if="error">
    <p class="text-xl font-bold text-red-600">Request has failed!</p>
  </div>
  <div v-else-if="notes.length">
    <ul class="md:block max-w-6xl mx-auto">
      <li
        class="relative mb-8"
        v-for="note in notes"
        :key="note.node.id"
      >
        <!-- <Note :note="note" :search-options="searchOptions" /> -->
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
// import { SearchResultItemConnection } from "@octokit/graphql-schema";
import { ALL_TODOS } from "../graphql/documents";
// import Note from "./Note.vue";
export default defineComponent({
  name: "Notes",
  components: {
    // Note
  },
  props: {
    searchOptions: {
      type: Object,
      default() {
        return { query: "", limit: 10 };
      }
    }
  },
  setup(props: { searchOptions: Record<string, any> }) {
    const { searchOptions } = toRefs(props);
    const { result, loading, error } = useQuery<{
      search: SearchResultItemConnection;
    }>(ALL_TODOS, searchOptions);
    const notes = useResult(
      result,
      [],
      data => data.search && data.search.edges
    );
    return {
      loading,
      error,
      notes
    };
  }
});
</script>