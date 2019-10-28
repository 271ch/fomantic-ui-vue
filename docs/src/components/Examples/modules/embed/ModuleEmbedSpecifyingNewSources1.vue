<template>
  <div>
      <div class="code" data-type="javascript">
        // built in
        $.fn.embed.settings.sources = {
          youtube: {
            name   : 'youtube',
            type   : 'video',
            icon   : 'video play',
            domain : 'youtube.com',
            url    : '//www.youtube.com/embed/{id}',
            parameters: function(settings) {
              return {
                autohide       : !settings.showUI,
                autoplay       : settings.autoplay,
                color          : settings.colors || undefined,
                hq             : settings.hd,
                jsapi          : settings.api,
                modestbranding : 1
              };
            }
          },
          vimeo: {
            name   : 'vimeo',
            type   : 'video',
            icon   : 'video play',
            domain : 'vimeo.com',
            url    : '//www.youtube.com/embed/{id}',
            parameters: function(settings) {
              return {
                api      : settings.api,
                autoplay : settings.autoplay,
                byline   : settings.showUI,
                color    : settings.colors || undefined,
                portrait : settings.showUI,
                title    : settings.showUI
              };
            }
          }
        };
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleEmbedSpecifyingNewSources1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'embed',
    title1: 'Initializing',
    title2: 'Specifying New Sources',
    description: '???',
    model: '      <div class="code" data-type="javascript">\n' +
      '        // built in\n' +
      '        $.fn.embed.settings.sources = {\n' +
      '          youtube: {\n' +
      '            name   : \'youtube\',\n' +
      '            type   : \'video\',\n' +
      '            icon   : \'video play\',\n' +
      '            domain : \'youtube.com\',\n' +
      '            url    : \'//www.youtube.com/embed/{id}\',\n' +
      '            parameters: function(settings) {\n' +
      '              return {\n' +
      '                autohide       : !settings.showUI,\n' +
      '                autoplay       : settings.autoplay,\n' +
      '                color          : settings.colors || undefined,\n' +
      '                hq             : settings.hd,\n' +
      '                jsapi          : settings.api,\n' +
      '                modestbranding : 1\n' +
      '              };\n' +
      '            }\n' +
      '          },\n' +
      '          vimeo: {\n' +
      '            name   : \'vimeo\',\n' +
      '            type   : \'video\',\n' +
      '            icon   : \'video play\',\n' +
      '            domain : \'vimeo.com\',\n' +
      '            url    : \'//www.youtube.com/embed/{id}\',\n' +
      '            parameters: function(settings) {\n' +
      '              return {\n' +
      '                api      : settings.api,\n' +
      '                autoplay : settings.autoplay,\n' +
      '                byline   : settings.showUI,\n' +
      '                color    : settings.colors || undefined,\n' +
      '                portrait : settings.showUI,\n' +
      '                title    : settings.showUI\n' +
      '              };\n' +
      '            }\n' +
      '          }\n' +
      '        };\n' +
      '      </div>\n',
  },
};
</script>
