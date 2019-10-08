<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util'

export default {
  name: 'FuiButtonContent',
  props: {
    visible: {
      type: Boolean,
      description: 'Content visible by pointer hovering.',
    },
    hidden: {
      type: Boolean,
      description: 'Content visible by pointer not hovering.'
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
		classes: function() {
      return u.concatClasses(
        (this.visible || !this.hidden) && 'visible',
        this.hidden && !this.visible && 'hidden',
        'content'
      )
    }
	},
};
</script>
