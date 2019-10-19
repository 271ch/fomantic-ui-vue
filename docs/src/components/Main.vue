<template>
  <div>
    <router-link to = "/button">Button</router-link>,
    <router-link to = "/divider">Divider</router-link>,
    <br /><br />
    <router-view></router-view>
  </div>
</template>

<script>
import PageButton from './PageButton'
import PageDivider from './PageDivider'
import VueRouter from 'vue-router'

const routes = [
  { path: '/button', component: PageButton },
  { path: '/divider', component: PageDivider },
];
const router = new VueRouter({
  routes,
});

export default {
  name: 'Main',
  router,
  props: {
    msg: String
  },
  components: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
