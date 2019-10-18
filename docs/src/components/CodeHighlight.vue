<template>
  <pre v-highlightjs="sourcecode"><code :class="lang"></code></pre>
</template>

<script>
export default {
  name: 'CodeHighlight',
  components: {
  },
  props: {
    lang: {
      type: String,
      default: 'plaintext',
    },
    sourcecode: {
      type: String,
      default: '',
    }

  },
  computed: {
  },
  methods: {
  },
};
</script>
