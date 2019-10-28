<template>
  <div>
      <div class="code" data-type="javascript">
        $('.history.example .menu .item')
          .tab({
            context : '.history.example',
            history : true
          })
        ;
      </div>
      <div class="ui pointing secondary menu">
        <a class="active item" data-tab="first">First</a>
        <a class="item" data-tab="second">Second</a>
        <a class="item" data-tab="third">Third</a>
      </div>
      <div class="ui active tab segment" data-tab="first">
        <div class="ui top attached tabular menu">
          <a class="active item" data-tab="first/a">1A</a>
          <a class="item" data-tab="first/b">1B</a>
          <a class="item" data-tab="first/c">1C</a>
        </div>
        <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>
        <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>
        <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>
      </div>
      <div class="ui tab segment" data-tab="second">
        <div class="ui top attached tabular menu">
          <a class="item" data-tab="second/a">2A</a>
          <a class="item" data-tab="second/b">2B</a>
          <a class="item" data-tab="second/c">2C</a>
        </div>
        <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>
        <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>
        <div class="ui bottom attached tab segment" data-tab="second/c">2C</div>
      </div>
      <div class="ui tab segment" data-tab="third">
        <div class="ui top attached tabular menu">
          <a class="item" data-tab="third/a">3A</a>
          <a class="item" data-tab="third/b">3B</a>
          <a class="item" data-tab="third/c">3C</a>
        </div>
        <div class="ui bottom attached tab segment" data-tab="third/a">3A</div>
        <div class="ui bottom attached tab segment" data-tab="third/b">3B</div>
        <div class="ui bottom attached tab segment" data-tab="third/c">3C</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabUsingHashHistory1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'History Examples',
    title2: 'Using Hash History',
    description: 'For static sites, or sites that only require simple history, in-page links can be used to trigger different local tab states',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.history.example .menu .item\')\n' +
      '          .tab({\n' +
      '            context : \'.history.example\',\n' +
      '            history : true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui pointing secondary menu">\n' +
      '        <a class="active item" data-tab="first">First</a>\n' +
      '        <a class="item" data-tab="second">Second</a>\n' +
      '        <a class="item" data-tab="third">Third</a>\n' +
      '      </div>\n' +
      '      <div class="ui active tab segment" data-tab="first">\n' +
      '        <div class="ui top attached tabular menu">\n' +
      '          <a class="active item" data-tab="first/a">1A</a>\n' +
      '          <a class="item" data-tab="first/b">1B</a>\n' +
      '          <a class="item" data-tab="first/c">1C</a>\n' +
      '        </div>\n' +
      '        <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>\n' +
      '      </div>\n' +
      '      <div class="ui tab segment" data-tab="second">\n' +
      '        <div class="ui top attached tabular menu">\n' +
      '          <a class="item" data-tab="second/a">2A</a>\n' +
      '          <a class="item" data-tab="second/b">2B</a>\n' +
      '          <a class="item" data-tab="second/c">2C</a>\n' +
      '        </div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="second/c">2C</div>\n' +
      '      </div>\n' +
      '      <div class="ui tab segment" data-tab="third">\n' +
      '        <div class="ui top attached tabular menu">\n' +
      '          <a class="item" data-tab="third/a">3A</a>\n' +
      '          <a class="item" data-tab="third/b">3B</a>\n' +
      '          <a class="item" data-tab="third/c">3C</a>\n' +
      '        </div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="third/a">3A</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="third/b">3B</div>\n' +
      '        <div class="ui bottom attached tab segment" data-tab="third/c">3C</div>\n' +
      '      </div>\n',
  },
};
</script>
