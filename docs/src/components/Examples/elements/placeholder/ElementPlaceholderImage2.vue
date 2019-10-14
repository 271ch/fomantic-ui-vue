<template>
  <div>
    <div class="ui ignored info message">
      Using <code>square</code> (1:1) or <code>rectangular</code> (4:3) will embed an aspect ratio into the image loader so that they modify size correctly with responsive styles.
    </div>
    <div class="ui three cards">
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="square image"/>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="square image"/>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="square image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderImage2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'placeholder',
    title1: 'Content',
    title2: 'Image',
    description: 'A placeholder can contain an image',
    model: '    <div class="ui ignored info message">\n' +
      '      Using <code>square</code> (1:1) or <code>rectangular</code> (4:3) will embed an aspect ratio into the image loader so that they modify size correctly with responsive styles.\n' +
      '    </div>\n' +
      '    <div class="ui three cards">\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="square image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="square image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="square image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
