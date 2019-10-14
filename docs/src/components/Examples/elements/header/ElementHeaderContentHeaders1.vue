<template>
  <div>
    <div class="ignored info ui message">Content headings are sized with <a href="https://j.eremy.net/confused-about-rem-and-em/" target="_blank"><code>em</code></a> and are based on the font-size of their container.</div>
    <div class="ui ignored icon font buttons">
      <a class="increase ui button"> <i class="plus icon"/></a>
      <a class="decrease ui button"> <i class="minus icon"/></a>
    </div>
    <div class="ui sizer vertical segment">
      <div class="ui huge header">Huge Header</div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui large header">Large Header</div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui medium header">Medium Header</div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui small header">Small Header</div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui tiny header">Tiny Header</div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderContentHeaders1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'header',
    title1: 'Types',
    title2: 'Content Headers',
    description: 'Headers may be oriented to give the importance of a section in the context of the content that surrounds it',
    model: '    <div class="ignored info ui message">Content headings are sized with <a href="https://j.eremy.net/confused-about-rem-and-em/" target="_blank"><code>em</code></a> and are based on the font-size of their container.</div>\n' +
      '    <div class="ui ignored icon font buttons">\n' +
      '      <a class="increase ui button"> <i class="plus icon"/></a>\n' +
      '      <a class="decrease ui button"> <i class="minus icon"/></a>\n' +
      '    </div>\n' +
      '    <div class="ui sizer vertical segment">\n' +
      '      <div class="ui huge header">Huge Header</div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui large header">Large Header</div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui medium header">Medium Header</div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui small header">Small Header</div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui tiny header">Tiny Header</div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
  },
};
</script>
