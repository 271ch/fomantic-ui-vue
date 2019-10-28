<template>
  <div>
      <div class="ui ignored warning message">
        API requests for the following example have been faked using <a href="/behaviors/api.html#using-custom-backends">mockResponse</a> API setting to avoid network overhead.
      </div>
      <div class="code">
      $('.dynamic.example .menu .item')
        .tab({
          cache: false,
          // faking API request
          apiSettings: {
            loadingDuration : 300,
            mockResponse    : function(settings) {
              var response = {
                first  : 'AJAX Tab One',
                second : 'AJAX Tab Two',
                third  : 'AJAX Tab Three'
              };
              return response[settings.urlData.tab];
            }
          },
          context : 'parent',
          auto    : true,
          path    : '/'
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
  name: 'ModuleTabRetreivingRemoteContent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Remote Examples',
    title2: 'Retreiving Remote Content',
    description: 'Using',
    model: '      <div class="ui ignored warning message">\n' +
      '        API requests for the following example have been faked using <a href="/behaviors/api.html#using-custom-backends">mockResponse</a> API setting to avoid network overhead.\n' +
      '      </div>\n' +
      '      <div class="code">\n' +
      '      $(\'.dynamic.example .menu .item\')\n' +
      '        .tab({\n' +
      '          cache: false,\n' +
      '          // faking API request\n' +
      '          apiSettings: {\n' +
      '            loadingDuration : 300,\n' +
      '            mockResponse    : function(settings) {\n' +
      '              var response = {\n' +
      '                first  : \'AJAX Tab One\',\n' +
      '                second : \'AJAX Tab Two\',\n' +
      '                third  : \'AJAX Tab Three\'\n' +
      '              };\n' +
      '              return response[settings.urlData.tab];\n' +
      '            }\n' +
      '          },\n' +
      '          context : \'parent\',\n' +
      '          auto    : true,\n' +
      '          path    : \'/\'\n' +
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
