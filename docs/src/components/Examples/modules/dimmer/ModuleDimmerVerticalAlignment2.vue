<template>
  <div>
      <div class="ui segment">
        <div class="ui bottom aligned dimmer">
          <div class="content">
            <h2 class="ui inverted header">Title</h2>
            <div class="ui primary button">Add</div>
            <div class="ui button">View</div>
          </div>
        </div>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      </div>
      <div class="ui ignored ignored icon buttons">
        <div class="ui show button"><i class="plus icon"/></div>
        <div class="ui hide button"><i class="minus icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerVerticalAlignment2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'States',
    title2: 'Vertical Alignment',
    description: 'A dimmer can have its content top or bottom aligned.',
    model: '      <div class="ui segment">\n' +
      '        <div class="ui bottom aligned dimmer">\n' +
      '          <div class="content">\n' +
      '            <h2 class="ui inverted header">Title</h2>\n' +
      '            <div class="ui primary button">Add</div>\n' +
      '            <div class="ui button">View</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui ignored ignored icon buttons">\n' +
      '        <div class="ui show button"><i class="plus icon"/></div>\n' +
      '        <div class="ui hide button"><i class="minus icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
