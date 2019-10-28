<template>
  <div>
      <div class="ui ignored warning message">
        You must include the class <code>pushable</code> on a sidebars containing element for it to appear correctly before Javascript initializes the element
      </div>
      <div class="ui ignored info message">
        Although sidebars support any size content, sidebars that are visible on load only support standard, predefined sizes like <code>thin</code> or <code>wide</code>. This makes sure content can be positioned correctly before Javascript is available.
      </div>
      <div class="ui bottom attached segment pushable">
        <div class="ui visible inverted left vertical sidebar menu">
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
      <div class="code" data-demo="true" data-type="javascript">
      // showing multiple
      $('.visible.example .ui.sidebar')
        .sidebar({
          context: '.visible.example .bottom.segment'
        })
        .sidebar('hide')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarStartingVisible1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Starting Visible',
    description: 'A sidebar can start visible by adding the class name',
    model: '      <div class="ui ignored warning message">\n' +
      '        You must include the class <code>pushable</code> on a sidebars containing element for it to appear correctly before Javascript initializes the element\n' +
      '      </div>\n' +
      '      <div class="ui ignored info message">\n' +
      '        Although sidebars support any size content, sidebars that are visible on load only support standard, predefined sizes like <code>thin</code> or <code>wide</code>. This makes sure content can be positioned correctly before Javascript is available.\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached segment pushable">\n' +
      '        <div class="ui visible inverted left vertical sidebar menu">\n' +
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
      '      <div class="code" data-demo="true" data-type="javascript">\n' +
      '      // showing multiple\n' +
      '      $(\'.visible.example .ui.sidebar\')\n' +
      '        .sidebar({\n' +
      '          context: \'.visible.example .bottom.segment\'\n' +
      '        })\n' +
      '        .sidebar(\'hide\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
