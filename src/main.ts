import{ createApp, h, provide } from 'vue'
import { ApolloClient, ApolloLink, InMemoryCache, from, HttpLink } from '@apollo/client/core'
import{ApolloClients } from '@vue/apollo-composable'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import messages from './i18n/ru'

/* auth.onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
}) */

const token = <string>import.meta.env.VITE_HASURA_SECRET;
const uri = <string>import.meta.env.VITE_HASURA_URL
const additiveLink = from([
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        'x-hasura-admin-secret': token
      }
    }));
    return forward(operation);
  }),
  new HttpLink({ uri })
]);

const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient
    });
  },
  render: () => h(App)
});

app.use(store).use(router).use(i18n).mount('#app')
