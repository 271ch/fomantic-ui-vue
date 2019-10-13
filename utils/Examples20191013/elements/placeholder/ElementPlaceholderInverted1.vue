<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui active inverted placeholder">
        <div class="image header">
          <div class="line"/>
          <div class="line"/>
        </div>
        <div class="paragraph">
          <div class="line"/>
          <div class="line"/>
          <div class="line"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A placeholder can have their colors inverted.',
      model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui active inverted placeholder">\n' +
      '        <div class="image header">\n' +
      '          <div class="line"/>\n' +
      '          <div class="line"/>\n' +
      '        </div>\n' +
      '        <div class="paragraph">\n' +
      '          <div class="line"/>\n' +
      '          <div class="line"/>\n' +
      '          <div class="line"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
