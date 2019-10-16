<template>
  <div :class="classes">
    <img
      v-if="image"
      :src="imageSrc"
    >
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';

export default {
  name: 'FuiLabel',
  props: {
    image: {
      type: Boolean,
      description: 'A label can be formatted to emphasize an image.',
    },
    imageSrc: {
      type: String,
      description: 'Image path.',
      default: '',
    },
    pointing: {
      type: String,
      description: 'A label can point to content next to it.',
      validator: (value) => {
        return !value || Enum.PointingLabel.check(value);
      },
      default: '',
    },
    corner: {
      type: Boolean,
      description: 'A label can position itself in the corner of an element.',
    },
    cornerPosition: {
      type: String,
      description: 'Corner position of the label.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    tag: {
      type: Boolean,
      description: 'A label can appear as a tag.',
    },
    ribbon: {
      type: Boolean,
      description: 'A label can appear as a ribbon attaching itself to an element.',
    },
    ribbonPosition: {
      type: String,
      description: 'Ribbon position.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    attached: {
      type: String,
      description: 'A label can attach to a content segment.',
      validator: (value) => {
        return !value || Enum.Attached.check(value);
      },
      default: '',
    },
    horizontal: {
      type: Boolean,
      description: 'A horizontal label is formatted to label content along-side it horizontally.',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        'ui',
        this.pointing && 'pointing',
        this.pointing !== 'above' && this.pointing,
        // color
        this.image && 'image',
        this.corner && [this.cornerPosition, 'corner'].join(' '),
        this.tag && 'tag',
        this.ribbonPosition !== 'left' && this.ribbonPosition,
        this.ribbon && 'ribbon',
        // icon position
        // icon
        this.horizontal && 'horizontal',
        // basic
        'label'
      );
    },
  },
};
</script>
