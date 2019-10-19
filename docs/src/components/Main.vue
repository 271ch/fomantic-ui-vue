<template>
  <div>
    <router-link to="/button">Button</router-link>,
    <router-link to="/divider">Divider</router-link>,
    <router-link to="/flag">Flag</router-link>,
    <router-link to="/header">Header</router-link>,
    <router-link to="/icon">Icon</router-link>,
    <router-link to="/image">Image</router-link>,
    <router-link to="/input">Input</router-link>,
    <router-link to="/label">Label</router-link>,
    <router-link to="/list">List</router-link>,
    <router-link to="/loader">Loader</router-link>,
    <router-link to="/placeholder">Placeholder</router-link>,
    <router-link to="/rail">Rail</router-link>,
    <router-link to="/reveal">Reveal</router-link>,
    <router-link to="/segment">Segment</router-link>,
    <router-link to="/step">Step</router-link>,
    <router-link to="/text">Text</router-link>,
    <br /><br />
    <router-view></router-view>
  </div>
</template>

<script>
import PageButton from './Pages/PageButton'
import PageDivider from './Pages/PageDivider'
import PageFlag from './Pages/PageFlag'
import PageHeader from './Pages/PageHeader'
import PageIcon from './Pages/PageIcon'
import PageImage from './Pages/PageImage'
import PageInput from './Pages/PageInput'
import PageLabel from './Pages/PageLabel'
import PageList from './Pages/PageList'
import PageLoader from './Pages/PageLoader'
import PagePlaceholder from './Pages/PagePlaceholder'
import PageRail from './Pages/PageRail'
import PageReveal from './Pages/PageReveal'
import PageSegment from './Pages/PageSegment'
import PageStep from './Pages/PageStep'
import PageText from './Pages/PageText'

import VueRouter from 'vue-router'

const routes = [
  { path: '/button', component: PageButton },
  { path: '/divider', component: PageDivider },
  { path: '/flag', component: PageFlag },
  { path: '/header', component: PageHeader },
  { path: '/icon', component: PageIcon },
  { path: '/image', component: PageImage },
  { path: '/input', component: PageInput },
  { path: '/label', component: PageLabel },
  { path: '/list', component: PageList },
  { path: '/loader', component: PageLoader },
  { path: '/placeholder', component: PagePlaceholder },
  { path: '/rail', component: PageRail },
  { path: '/reveal', component: PageReveal },
  { path: '/segment', component: PageSegment },
  { path: '/step', component: PageStep },
  { path: '/text', component: PageText },
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
