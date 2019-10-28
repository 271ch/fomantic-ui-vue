<template>
  <div>
      <div class="ui ignored info message">
        <p>It's recommended to use a responsive pattern like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary.</p>
      </div>
      <div class="ui grid">
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridResponsiveWidth1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Responsive Width',
    description: 'A column can specify a width for a specific device',
    model: '      <div class="ui ignored info message">\n' +
      '        <p>It\'s recommended to use a responsive pattern like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary.</p>\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
