<template>
  <div
    :class="classes()"
    :data-text="text"
  >
    <slot :v-bind="text" />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';

export default {
  name: 'FuiButtonCondition',
  props: {
    text: {
      type: [Boolean, String],
      default: false,
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    /*
    getText: function () {
      let t = this.text.trim()
      if (t==='') return false
      else return t;
    },
    */
    classes: function () {
      console.log('>>>> ' + this.text);
      return u.concatClasses([
        'or',
      ]);
    },
  },
};
</script>
