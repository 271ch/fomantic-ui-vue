<template>
  <img
    :src="src"
    :class="classes"
  >
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiImage',
  mixins: [],
  props: {
    wireframe: { // TODO: description
      type: Boolean,
      description: '',
    },
    src: {
      type: String,
      description: '',
      default: '', // TODO: descr
    },
    /*
    prop1: { // TODO: Component FuiImage
      type: Boolean,
      description: '',
    },
    prop2: {
      type: String,
      description: '',
      default: '',
    },
    prop3: {
      type: String,
      description: '',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    */
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        'ui',
        this.wireframe && 'wireframe',
        'image'
      );
    },
  },
};
</script>
