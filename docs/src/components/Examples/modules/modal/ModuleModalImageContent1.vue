<template>
  <div>
      <div class="ui ignored info message">
        Modals with image content must use the <code>image content</code> class in <code>2.0</code>. This is to make sure flex-box rules do not affect regular content.
      </div>
      <div class="code" data-type="html">
        <div class="ui modal">
          <div class="header">Header</div>
          <div class="image content">
            <img class="image"/>
            <div class="description">
              <p/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalImageContent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Content',
    title2: 'Image Content',
    description: 'A modal can contain image content',
    model: '      <div class="ui ignored info message">\n' +
      '        Modals with image content must use the <code>image content</code> class in <code>2.0</code>. This is to make sure flex-box rules do not affect regular content.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui modal">\n' +
      '          <div class="header">Header</div>\n' +
      '          <div class="image content">\n' +
      '            <img class="image"/>\n' +
      '            <div class="description">\n' +
      '              <p/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
