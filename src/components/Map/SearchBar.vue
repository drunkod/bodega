<template>
  <multiselect v-model="multiselect_input" tag-placeholder="Add this as new tag"
   placeholder="Search or add a tag" label="name"
    track-by="code" :options="options" :multiple="true"
     :taggable="true" @tag="addTag"></multiselect>
  <!-- <form class="hidden md:block max-w-6xl mx-auto mb-16">
    <div
      class="relative h-full w-full focus:ring-indigo-500 focus:border-indigo-500
    shadow-sm text-2xl border-gray-300 bg-gray-200 rounded-xl px-7 py-7 bg-opacity-70"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute transform -translate-y-1/2 top-1/2 left-4 h-auto w-10"
        style="color: #4A5568;"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12
        10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8
        2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907
        11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071
        17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765
        12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
          fill="currentcolor"
        />
      </svg>

      <input
        class="h-full block bg-transparent relative left-10 border-none
      outline-none search-input"
        placeholder="Ex. React"
        @input="handleInputChange"
      />
    </div>
  </form> -->
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from "vue";
import { debounce } from "@/utils";
import Multiselect from "vue-multiselect";

export default defineComponent({
  name: "SearchBar",
  components: { Multiselect },
  setup(props, context) {
    console.log(props);
  
    // DEBOUNCE в handleInputChange обработчик событий, чтобы 
    // избежать отправки search события на каждом изменении входного сигнала.

    const handleInputChange = debounce((evt: String) => {
      // передаем строку в виде события для поиска в бд
      console.log(evt);
      // const element = evt.target as Object;
      // console.log(element);
      context.emit("search", evt);
      // console.log(element.value);
    }, 300);


    return {
      handleInputChange
    };
  },
  data () {
    return {
      multiselect_input: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
        
      ]
    }
  },
  methods: {
    // добавление нового тэга в опции
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.multiselect_input.push(tag)
    },
    arrayToString (input) {
      
        return input.reduce(function(sum, current, i) {
          // обьединение двух и более поисковых запросов\тэгов
          switch (i) {
            case 0:
              return current.name;
            default:
              return sum + " " + current.name;
          }
        }, "")
    }
  },       
  computed: {
    change_multiselect_input() {
      // при вводе тегов передаем обработчику запросов handleInputChange
        let multiselect_input = this.multiselect_input;
        this.handleInputChange(this.arrayToString(multiselect_input));
        console.log(this.arrayToString(multiselect_input.length));

    }
  },
});
</script>

<style scoped>
.search-input {
  width: calc(100% - 3.5rem);
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>