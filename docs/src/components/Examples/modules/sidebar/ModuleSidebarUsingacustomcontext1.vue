<template>
  <div>
      <div class="ui ignored info message">
        A sidebar's <code>context</code> cannot have any padding. You can solve this by padding its inner content, or using an additional containing element
      </div>
      <div class="ui top attached demo menu">
        <a class="item">
          <i class="sidebar icon"/>
          Menu
        </a>
      </div>
      <div class="ui bottom attached segment">
        <div class="ui inverted labeled icon left inline vertical sidebar menu">
          <a class="item">
            <i class="home icon"/>
            Home
          </a>
          <a class="item">
            <i class="block layout icon"/>
            Topics
          </a>
          <a class="item">
            <i class="smile icon"/>
            Friends
          </a>
          <a class="item">
            <i class="calendar icon"/>
            History
          </a>
        </div>
        <div class="pusher">
          <div class="ui basic segment">
            <h3 class="ui header">Application Content</h3>
            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
          </div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      // using context
      $('.context.example .ui.sidebar')
        .sidebar({
          context: $('.context.example .bottom.segment')
        })
        .sidebar('attach events', '.context.example .menu .item')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarUsingacustomcontext1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Using a custom context',
    description: 'A sidebar can be initialized inside any element, not just a page\'s',
    model: '      <div class="ui ignored info message">\n' +
      '        A sidebar\'s <code>context</code> cannot have any padding. You can solve this by padding its inner content, or using an additional containing element\n' +
      '      </div>\n' +
      '      <div class="ui top attached demo menu">\n' +
      '        <a class="item">\n' +
      '          <i class="sidebar icon"/>\n' +
      '          Menu\n' +
      '        </a>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached segment">\n' +
      '        <div class="ui inverted labeled icon left inline vertical sidebar menu">\n' +
      '          <a class="item">\n' +
      '            <i class="home icon"/>\n' +
      '            Home\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            <i class="block layout icon"/>\n' +
      '            Topics\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            <i class="smile icon"/>\n' +
      '            Friends\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            <i class="calendar icon"/>\n' +
      '            History\n' +
      '          </a>\n' +
      '        </div>\n' +
      '        <div class="pusher">\n' +
      '          <div class="ui basic segment">\n' +
      '            <h3 class="ui header">Application Content</h3>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      // using context\n' +
      '      $(\'.context.example .ui.sidebar\')\n' +
      '        .sidebar({\n' +
      '          context: $(\'.context.example .bottom.segment\')\n' +
      '        })\n' +
      '        .sidebar(\'attach events\', \'.context.example .menu .item\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
