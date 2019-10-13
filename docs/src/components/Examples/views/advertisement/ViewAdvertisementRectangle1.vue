<template>
  <div>
    <div class="ui vertical rectangle test ad" data-text="Vertical Rectangle"/>
    <div class="ui small rectangle test ad" data-text="Small Rectangle"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementRectangle1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'advertisement',
      title1: 'Types',
      title2: 'Rectangle',
      description: 'An ad can use a common rectangle ad unit size',
      model: '    <div class="ui vertical rectangle test ad" data-text="Vertical Rectangle"/>\n' +
      '    <div class="ui small rectangle test ad" data-text="Small Rectangle"/>\n',
    };
  },
};
</script>
