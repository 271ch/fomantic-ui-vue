<template>
  <div>
    <div class="ui right floated horizontal list">
      <div class="disabled item" href="#">© GitHub, Inc.</div>
      <a class="item" href="#">Terms</a>
      <a class="item" href="#">Privacy</a>
      <a class="item" href="#">Contact</a>
    </div>
    <div class="ui horizontal list">
      <a class="item" href="#">About Us</a>
      <a class="item" href="#">Jobs</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListFloated2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Content Variations',
      title2: 'Floated',
      description: 'An list, or an element inside a list can be floated left or right',
      model: '    <div class="ui right floated horizontal list">\n' +
      '      <div class="disabled item" href="#">© GitHub, Inc.</div>\n' +
      '      <a class="item" href="#">Terms</a>\n' +
      '      <a class="item" href="#">Privacy</a>\n' +
      '      <a class="item" href="#">Contact</a>\n' +
      '    </div>\n' +
      '    <div class="ui horizontal list">\n' +
      '      <a class="item" href="#">About Us</a>\n' +
      '      <a class="item" href="#">Jobs</a>\n' +
      '    </div>\n',
    };
  },
};
</script>
