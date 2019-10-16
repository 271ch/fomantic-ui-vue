<template>
  <div>

<fui-header level=1 attached=bottom>
  This page will contain some example
</fui-header>
<br />
<br />
<fui-button animated>
  <fui-button-content>
    A
  </fui-button-content>
  <fui-button-content hidden>
    Z
  </fui-button-content>
</fui-button>
<br />
<br />
<fui-button social=facebook>
  Facebook
</fui-button>
<br />
<br />
<ElementButtonActive1 />
<br />
<ElementButtonConditionals2 />
<br />
<ElementButtonVerticallyAttached1 />

</div>
</template>


<script>
import ElementButtonActive1 from './Examples/elements/button/ElementButtonActive1.vue'
import ElementButtonConditionals2 from './Examples/elements/button/ElementButtonConditionals2.vue'
import ElementButtonVerticallyAttached1 from './Examples/elements/button/ElementButtonVerticallyAttached1.vue'


export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    ElementButtonActive1,
    ElementButtonConditionals2,
    ElementButtonVerticallyAttached1,
  },
  methods: {
  },
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
