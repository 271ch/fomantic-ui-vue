<template>
  <div>
    <div class="ui three cards">
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"/>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"/>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderImage3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Content',
      title2: 'Image',
      description: 'A placeholder can contain an image',
      model: '    <div class="ui three cards">\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="rectangular image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="rectangular image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui card">\n' +
      '        <div class="content">\n' +
      '          <div class="ui placeholder">\n' +
      '            <div class="rectangular image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
