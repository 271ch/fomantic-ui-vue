<template>
  <div>
    <div class="ui ignored message">
      Vertical dividers requires <code>position: relative</code> on the element that you would like to contain the divider
    </div>
    <div class="ui warning ignored message">
      Due to a change in W3C implementation of <a href="https://github.com/w3c/csswg-drafts/issues/401" target="_blank" rel="nofollow">absolutely positioned elements in flex containers</a> vertical dividers now currently only support 50/50 splits automatically, and only if not positioned <b>as direct children of flex containers</b> (like grid).
    </div>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        </div>
      </div>
      <div class="ui vertical divider">
        and
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerVerticalDivider1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Vertical Divider',
    description: 'A divider can segment content vertically',
    model: '    <div class="ui ignored message">\n' +
      '      Vertical dividers requires <code>position: relative</code> on the element that you would like to contain the divider\n' +
      '    </div>\n' +
      '    <div class="ui warning ignored message">\n' +
      '      Due to a change in W3C implementation of <a href="https://github.com/w3c/csswg-drafts/issues/401" target="_blank" rel="nofollow">absolutely positioned elements in flex containers</a> vertical dividers now currently only support 50/50 splits automatically, and only if not positioned <b>as direct children of flex containers</b> (like grid).\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui two column very relaxed grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui vertical divider">\n' +
      '        and\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
