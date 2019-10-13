<template>
  <div>
    <div class="ui list">
      <div class="item">
        <a class="header">Header</a>
        <div class="description">
          Click a link in our <a>description</a>.
        </div>
      </div>
      <div class="item">
        <a class="header">Learn More</a>
        <div class="description">
          Learn more about this site on <a>our FAQ page</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListLink2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Content',
      title2: 'Link',
      description: 'A list can contain links',
      model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <a class="header">Header</a>\n' +
      '        <div class="description">\n' +
      '          Click a link in our <a>description</a>.\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <a class="header">Learn More</a>\n' +
      '        <div class="description">\n' +
      '          Learn more about this site on <a>our FAQ page</a>.\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
