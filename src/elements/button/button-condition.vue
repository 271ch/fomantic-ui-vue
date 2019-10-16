<template>
  <div
    :class="classes"
    :data-text="dText()"
  />
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';

export default {
  name: 'FuiButtonCondition',
  data: () => ({
    text: "",
  }),
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses([
        'or',
      ]);
    },
  },
  mounted () {
    if (this.$slots.default === undefined) return;
    if (!(0 in this.$slots.default)) return;
    let slot = this.$slots.default[0];
    if (!('text' in slot)) return;
    this.text = slot.text;
  },
  methods: {
    dText: function () {
      if (this.text.trim() === "") return false;
      return this.text.trim();
    },
  },
};
</script>
