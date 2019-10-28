<template>
  <div>
      <div class="ui ignored info message">
        If you are using tab contexts inside of tabs, you can also specify <code>childrenOnly: true</code> which will only look for tabs as the immediate children of the given context, or <code>context: 'parent'</code> a special keyword which avoids having to create unique selectors for each group.
      </div>
      <div class="code" data-type="javascript">
        $('#context1 .menu .item')
          .tab({
            context: $('#context1')
          })
        ;
        $('#context2 .menu .item')
          .tab({
            // special keyword works same as above
            context: 'parent'
          })
        ;
      </div>
      <div id="context1">
        <div class="ui secondary menu">
          <a class="item" data-tab="first">First</a>
          <a class="item active" data-tab="second">Second</a>
          <a class="item" data-tab="third">Third</a>
        </div>
        <div class="ui tab segment" data-tab="first">
          <div class="ui top attached tabular menu">
            <a class="active item" data-tab="first/a">1A</a>
            <a class="item" data-tab="first/b">1B</a>
            <a class="item" data-tab="first/c">1C</a>
          </div>
          <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>
          <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>
          <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>
        </div>
        <div class="ui tab segment active" data-tab="second">
          <div class="ui top attached tabular menu">
            <a class="item" data-tab="second/a">2A</a>
            <a class="item" data-tab="second/b">2B</a>
            <a class="item active" data-tab="second/c">2C</a>
          </div>
          <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>
          <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>
          <div class="ui bottom attached tab segment active" data-tab="second/c">2C</div>
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
      <div class="ui divider"/>
      <div id="context2">
        <div class="ui secondary menu">
          <a class="item" data-tab="fourth">Fourth</a>
          <a class="item active" data-tab="fifth">Fifth</a>
          <a class="item" data-tab="sixth">Sixth</a>
        </div>
        <div class="ui tab segment" data-tab="fourth">
          4
        </div>
        <div class="ui active tab segment" data-tab="fifth">
          5
        </div>
        <div class="ui tab segment" data-tab="sixth">
          6
        </div>
      </div>
      <div class="existing code" data-type="html">
        <div id="context1">
          <div class="ui secondary menu">
            <a class="item" data-tab="first">First</a>
            <a class="item active" data-tab="second">Second</a>
            <a class="item" data-tab="third">Third</a>
          </div>
          <div class="ui tab segment" data-tab="first">
            <div class="ui top attached tabular menu">
              <a class="active item" data-tab="first/a">1A</a>
              <a class="item" data-tab="first/b">1B</a>
              <a class="item" data-tab="first/c">1C</a>
            </div>
            <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>
            <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>
            <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>
          </div>
          <div class="ui tab segment active" data-tab="second">
            <div class="ui top attached tabular menu">
              <a class="item" data-tab="second/a">2A</a>
              <a class="item" data-tab="second/b">2B</a>
              <a class="item active" data-tab="second/c">2C</a>
            </div>
            <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>
            <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>
            <div class="ui bottom attached tab segment active" data-tab="second/c">2C</div>
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
        <div class="ui divider"/>
        <div id="context2">
          <div class="ui secondary menu">
            <a class="item" data-tab="fourth">Fourth</a>
            <a class="item active" data-tab="fifth">Fifth</a>
            <a class="item" data-tab="sixth">Sixth</a>
          </div>
          <div class="ui tab segment" data-tab="fourth">
            4
          </div>
          <div class="ui active tab segment" data-tab="fifth">
            5
          </div>
          <div class="ui tab segment" data-tab="sixth">
            6
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabMultipleTabGroups1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Basic Examples',
    title2: 'Multiple Tab Groups',
    description: 'There are a several of ways to include independent tab groups on the same page, even with history. One of the easiest ways is provide a specific parent context for each tab group.',
    model: '      <div class="ui ignored info message">\n' +
      '        If you are using tab contexts inside of tabs, you can also specify <code>childrenOnly: true</code> which will only look for tabs as the immediate children of the given context, or <code>context: \'parent\'</code> a special keyword which avoids having to create unique selectors for each group.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'#context1 .menu .item\')\n' +
      '          .tab({\n' +
      '            context: $(\'#context1\')\n' +
      '          })\n' +
      '        ;\n' +
      '        $(\'#context2 .menu .item\')\n' +
      '          .tab({\n' +
      '            // special keyword works same as above\n' +
      '            context: \'parent\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div id="context1">\n' +
      '        <div class="ui secondary menu">\n' +
      '          <a class="item" data-tab="first">First</a>\n' +
      '          <a class="item active" data-tab="second">Second</a>\n' +
      '          <a class="item" data-tab="third">Third</a>\n' +
      '        </div>\n' +
      '        <div class="ui tab segment" data-tab="first">\n' +
      '          <div class="ui top attached tabular menu">\n' +
      '            <a class="active item" data-tab="first/a">1A</a>\n' +
      '            <a class="item" data-tab="first/b">1B</a>\n' +
      '            <a class="item" data-tab="first/c">1C</a>\n' +
      '          </div>\n' +
      '          <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>\n' +
      '        </div>\n' +
      '        <div class="ui tab segment active" data-tab="second">\n' +
      '          <div class="ui top attached tabular menu">\n' +
      '            <a class="item" data-tab="second/a">2A</a>\n' +
      '            <a class="item" data-tab="second/b">2B</a>\n' +
      '            <a class="item active" data-tab="second/c">2C</a>\n' +
      '          </div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>\n' +
      '          <div class="ui bottom attached tab segment active" data-tab="second/c">2C</div>\n' +
      '        </div>\n' +
      '        <div class="ui tab segment" data-tab="third">\n' +
      '          <div class="ui top attached tabular menu">\n' +
      '            <a class="item" data-tab="third/a">3A</a>\n' +
      '            <a class="item" data-tab="third/b">3B</a>\n' +
      '            <a class="item" data-tab="third/c">3C</a>\n' +
      '          </div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="third/a">3A</div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="third/b">3B</div>\n' +
      '          <div class="ui bottom attached tab segment" data-tab="third/c">3C</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div id="context2">\n' +
      '        <div class="ui secondary menu">\n' +
      '          <a class="item" data-tab="fourth">Fourth</a>\n' +
      '          <a class="item active" data-tab="fifth">Fifth</a>\n' +
      '          <a class="item" data-tab="sixth">Sixth</a>\n' +
      '        </div>\n' +
      '        <div class="ui tab segment" data-tab="fourth">\n' +
      '          4\n' +
      '        </div>\n' +
      '        <div class="ui active tab segment" data-tab="fifth">\n' +
      '          5\n' +
      '        </div>\n' +
      '        <div class="ui tab segment" data-tab="sixth">\n' +
      '          6\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="existing code" data-type="html">\n' +
      '        <div id="context1">\n' +
      '          <div class="ui secondary menu">\n' +
      '            <a class="item" data-tab="first">First</a>\n' +
      '            <a class="item active" data-tab="second">Second</a>\n' +
      '            <a class="item" data-tab="third">Third</a>\n' +
      '          </div>\n' +
      '          <div class="ui tab segment" data-tab="first">\n' +
      '            <div class="ui top attached tabular menu">\n' +
      '              <a class="active item" data-tab="first/a">1A</a>\n' +
      '              <a class="item" data-tab="first/b">1B</a>\n' +
      '              <a class="item" data-tab="first/c">1C</a>\n' +
      '            </div>\n' +
      '            <div class="ui bottom attached active tab segment" data-tab="first/a">1A</div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="first/b">1B</div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="first/c">1C</div>\n' +
      '          </div>\n' +
      '          <div class="ui tab segment active" data-tab="second">\n' +
      '            <div class="ui top attached tabular menu">\n' +
      '              <a class="item" data-tab="second/a">2A</a>\n' +
      '              <a class="item" data-tab="second/b">2B</a>\n' +
      '              <a class="item active" data-tab="second/c">2C</a>\n' +
      '            </div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="second/a">2A</div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="second/b">2B</div>\n' +
      '            <div class="ui bottom attached tab segment active" data-tab="second/c">2C</div>\n' +
      '          </div>\n' +
      '          <div class="ui tab segment" data-tab="third">\n' +
      '            <div class="ui top attached tabular menu">\n' +
      '              <a class="item" data-tab="third/a">3A</a>\n' +
      '              <a class="item" data-tab="third/b">3B</a>\n' +
      '              <a class="item" data-tab="third/c">3C</a>\n' +
      '            </div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="third/a">3A</div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="third/b">3B</div>\n' +
      '            <div class="ui bottom attached tab segment" data-tab="third/c">3C</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="ui divider"/>\n' +
      '        <div id="context2">\n' +
      '          <div class="ui secondary menu">\n' +
      '            <a class="item" data-tab="fourth">Fourth</a>\n' +
      '            <a class="item active" data-tab="fifth">Fifth</a>\n' +
      '            <a class="item" data-tab="sixth">Sixth</a>\n' +
      '          </div>\n' +
      '          <div class="ui tab segment" data-tab="fourth">\n' +
      '            4\n' +
      '          </div>\n' +
      '          <div class="ui active tab segment" data-tab="fifth">\n' +
      '            5\n' +
      '          </div>\n' +
      '          <div class="ui tab segment" data-tab="sixth">\n' +
      '            6\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
