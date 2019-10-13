<template>
  <div>
<h1>Example button</h1>

<fui-button animated>
  <fui-button-content>
    A
  </fui-button-content>
  <fui-button-content hidden>
    Z
  </fui-button-content>
</fui-button>

<fui-button social=facebook>
  Facebook
</fui-button>

<fui-header level=1 attached=bottom>
  Facebook
</fui-header>

<ElementButtonActive1 />

</div>
</template>


<script>
import ElementButtonActive1 from './Examples/elements/button/ElementButtonActive1.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    ElementButtonActive1,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
