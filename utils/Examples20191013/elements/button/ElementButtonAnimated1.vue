<template>
  <div>
    <div class="ui ignored message">The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show</div>
    <div class="ui animated button" tabindex="0">
      <div class="visible content">Next</div>
      <div class="hidden content">
        <i class="right arrow icon"/>
      </div>
    </div>
    <div class="ui vertical animated button" tabindex="0">
      <div class="hidden content">Shop</div>
      <div class="visible content">
        <i class="shop icon"/>
      </div>
    </div>
    <div class="ui animated fade button" tabindex="0">
      <div class="visible content">Sign-up for a Pro account</div>
      <div class="hidden content">
        $12.99 a month
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonAnimated1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Animated',
      description: 'A button can animate to show hidden content',
      model: '    <div class="ui ignored message">The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show</div>\n' +
      '    <div class="ui animated button" tabindex="0">\n' +
      '      <div class="visible content">Next</div>\n' +
      '      <div class="hidden content">\n' +
      '        <i class="right arrow icon"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui vertical animated button" tabindex="0">\n' +
      '      <div class="hidden content">Shop</div>\n' +
      '      <div class="visible content">\n' +
      '        <i class="shop icon"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui animated fade button" tabindex="0">\n' +
      '      <div class="visible content">Sign-up for a Pro account</div>\n' +
      '      <div class="hidden content">\n' +
      '        $12.99 a month\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
