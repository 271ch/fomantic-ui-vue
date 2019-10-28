<template>
  <div>
      <div class="code">
      $('.eval.example .menu .item')
        .tab({
          evaluateScripts : 'once',
          context         : 'parent',
          auto            : true,
          path            : '/'
        })
      ;
      </div>
      <div class="ui pointing secondary menu">
        <a class="active item" data-tab="first">First</a>
        <a class="item" data-tab="second">Second</a>
        <a class="item" data-tab="third">Third</a>
      </div>
      <div class="ui active tab segment" data-tab="first">
        <h3 class="ui header">AJAX Tab One</h3>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
      <div class="ui tab segment" data-tab="second">
      </div>
      <div class="ui tab segment" data-tab="third">
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabEvaluatingScriptsinHTML1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Remote Examples',
    title2: 'Evaluating Scripts in HTML',
    description: 'By default,',
    model: '      <div class="code">\n' +
      '      $(\'.eval.example .menu .item\')\n' +
      '        .tab({\n' +
      '          evaluateScripts : \'once\',\n' +
      '          context         : \'parent\',\n' +
      '          auto            : true,\n' +
      '          path            : \'/\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui pointing secondary menu">\n' +
      '        <a class="active item" data-tab="first">First</a>\n' +
      '        <a class="item" data-tab="second">Second</a>\n' +
      '        <a class="item" data-tab="third">Third</a>\n' +
      '      </div>\n' +
      '      <div class="ui active tab segment" data-tab="first">\n' +
      '        <h3 class="ui header">AJAX Tab One</h3>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui tab segment" data-tab="second">\n' +
      '      </div>\n' +
      '      <div class="ui tab segment" data-tab="third">\n' +
      '      </div>\n',
  },
};
</script>
