<template>
  <div>
    <div class="ui menu">
      <a class="item">Browse</a>
      <a class="item">Submit</a>
      <div class="right menu">
        <a class="item">Sign Up</a>
        <a class="item">Help</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu1A',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Content',
      title2: 'Menu',
      description: 'A menu may contain another menu group in the same level as menu items.',
      model: '    <div class="ui menu">\n' +
      '      <a class="item">Browse</a>\n' +
      '      <a class="item">Submit</a>\n' +
      '      <div class="right menu">\n' +
      '        <a class="item">Sign Up</a>\n' +
      '        <a class="item">Help</a>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
