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
import PageButton from './PageButton'
import PageDivider from './PageDivider'
import PageFlag from './PageFlag'
import PageHeader from './PageHeader'
import PageIcon from './PageIcon'
import PageImage from './PageImage'
import PageInput from './PageInput'
import PageLabel from './PageLabel'
import PageList from './PageList'
import PageLoader from './PageLoader'
import PagePlaceholder from './PagePlaceholder'
import PageRail from './PageRail'
import PageReveal from './PageReveal'
import PageSegment from './PageSegment'
import PageStep from './PageStep'
import PageText from './PageText'

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
