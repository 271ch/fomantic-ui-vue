<template>
  <component
    :is="a?'a':'div'"
    :class="classes"
  >
    <img
      v-if="src"
      :src="src"
    >
    <div
      v-if="header"
      class="header"
    >
      {{ header }}
    </div>
    <a
      v-if="headerA"
      class="header"
    >
      {{ headerA }}
    </a>
    <i
      v-if="iconName"
      :class="iconName + ' icon'"
    />
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiItem',
  mixins: [
    Mixins.PFitted,
    Mixins.PColor,
  ],
  props: {
    iconName: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    header: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    headerA: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    src: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    disabled: {
      type: Boolean,
      description: '',
    },
    a: {
      type: Boolean,
      description: 'Use tag a istead of div.',
    },
    active: {
      type: Boolean,
      description: '',
    },
    link: {
      type: Boolean,
      description: '',
    },
    search: {
      type: Boolean,
      description: '',
    },
    dropdown: {
      type: Boolean,
      description: '',
    },
    isHeader: {
      type: Boolean,
      description: '',
    },
    right: {
      type: Boolean,
      description: '',
    },
    icon: {
      type: Boolean,
      description: '',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        this.dropdown && 'ui dropdown',
        this.disabled && 'disabled',
        this.active && 'active',
        this.link && 'link',
        this.search && 'search',
        ...this.getClassesFitted,
        ...this.getClassesColor,
        this.isHeader && 'header',
        this.right && 'right',
        this.icon && 'icon',
        'item'
      );
    },
  },
};
</script>
