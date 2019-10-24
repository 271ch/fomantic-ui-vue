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
    <router-link to="/breadcrumb">Breadcrumb</router-link>,
    <router-link to="/form">Form</router-link>,
    <router-link to="/grid">Grid</router-link>,
    <router-link to="/menu">Menu</router-link>,
    <router-link to="/message">Message</router-link>,
    <router-link to="/table">Table</router-link>,
    <br /><br />
    <router-link to="/advertisement">Advertisement</router-link>,
    <router-link to="/card">Card</router-link>,
    <router-link to="/comment">Comment</router-link>,
    <router-link to="/feed">Feed</router-link>,
    <router-link to="/item">Item</router-link>,
    <router-link to="/statistic">Statistic</router-link>,
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

import PageBreadcrumb from './Pages/PageBreadcrumb'
import PageForm from './Pages/PageForm'
import PageGrid from './Pages/PageGrid'
import PageMenu from './Pages/PageMenu'
import PageMessage from './Pages/PageMessage'
import PageTable from './Pages/PageTable'

import PageAdvertisement from './Pages/PageAdvertisement'
import PageCard from './Pages/PageCard'
import PageComment from './Pages/PageComment'
import PageFeed from './Pages/PageFeed'
import PageItem from './Pages/PageItem'
import PageStatistic from './Pages/PageStatistic'

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

  { path: '/breadcrumb', component: PageBreadcrumb },
  { path: '/form', component: PageForm },
  { path: '/grid', component: PageGrid },
  { path: '/menu', component: PageMenu },
  { path: '/message', component: PageMessage },
  { path: '/table', component: PageTable },

  { path: '/advertisement', component: PageAdvertisement },
  { path: '/card', component: PageCard },
  { path: '/comment', component: PageComment },
  { path: '/feed', component: PageFeed },
  { path: '/item', component: PageItem },
  { path: '/statistic', component: PageStatistic },
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
