<template>
  <div>
    <div class="ui ignored warning message">A corner label must be positioned inside a container with <b>position: relative</b> to display properly. If a container is rounded you will need to add <code>overflow:hidden</code> to the container to produce a rounded label.</div>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui fluid image">
          <a class="ui left corner label">
            <i class="heart icon"/>
          </a>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid image">
          <a class="ui red right corner label">
            <i class="save icon"/>
          </a>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelCorner1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Corner',
      description: 'A label can position itself in the corner of an element',
      model: '    <div class="ui ignored warning message">A corner label must be positioned inside a container with <b>position: relative</b> to display properly. If a container is rounded you will need to add <code>overflow:hidden</code> to the container to produce a rounded label.</div>\n' +
      '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <a class="ui left corner label">\n' +
      '            <i class="heart icon"/>\n' +
      '          </a>\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <a class="ui red right corner label">\n' +
      '            <i class="save icon"/>\n' +
      '          </a>\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
