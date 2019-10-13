<template>
  <div>
    <div class="ui segment">
      <div class="ui left mini rail">
        Mini
      </div>
      <div class="ui right tiny rail">
        Tiny
      </div>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui segment">
      <div class="ui left small rail">
        Small
      </div>
      <div class="ui right large rail">
        Large
      </div>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui segment">
      <div class="ui left big rail">
        Big
      </div>
      <div class="ui right huge rail">
        Huge
      </div>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui segment">
      <div class="ui right massive rail">
        Massive
      </div>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRailSize1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'rail',
      title1: 'Variations',
      title2: 'Size',
      description: 'A rail can have different sizes',
      model: '    <div class="ui segment">\n' +
      '      <div class="ui left mini rail">\n' +
      '        Mini\n' +
      '      </div>\n' +
      '      <div class="ui right tiny rail">\n' +
      '        Tiny\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui left small rail">\n' +
      '        Small\n' +
      '      </div>\n' +
      '      <div class="ui right large rail">\n' +
      '        Large\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui left big rail">\n' +
      '        Big\n' +
      '      </div>\n' +
      '      <div class="ui right huge rail">\n' +
      '        Huge\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui right massive rail">\n' +
      '        Massive\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
