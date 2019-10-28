<template>
  <div>
      <div class="ui warning ignored message">
        Sticky does not work in tables without using <code>table-layout: fixed</code> to prevent automatic resizing with content
      </div>
      <div class="code" data-type="html">
        <div class="ui rail">
          <div class="ui sticky">
            <!-- Any arbitrary content !-->
          </div>
        </div>
        <div id="context">
          <!-- Long flowing text content !-->
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('.ui.sticky')
        .sticky({
          context: '#context'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleStickyInitializing1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sticky',
    title1: 'Usage',
    title2: 'Initializing',
    description: 'Sticky is initialized on content that should be stuck to viewport. Most instances require specifying a secondary',
    model: '      <div class="ui warning ignored message">\n' +
      '        Sticky does not work in tables without using <code>table-layout: fixed</code> to prevent automatic resizing with content\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui rail">\n' +
      '          <div class="ui sticky">\n' +
      '            <!-- Any arbitrary content !-->\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div id="context">\n' +
      '          <!-- Long flowing text content !-->\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'.ui.sticky\')\n' +
      '        .sticky({\n' +
      '          context: \'#context\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
