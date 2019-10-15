<template>
  <div>
    <FuiButton tag=div focusable animated>
      <FuiButtonContent visible>Next</FuiButtonContent>
      <FuiButtonContent hidden>
        <FuiIcon name="right arrow"></FuiIcon>
      </FuiButtonContent>
    </FuiButton>
    <FuiButton tag=div focusable animated=vertical>
      <FuiButtonContent hidden>Shop</FuiButtonContent>
      <FuiButtonContent visible>
        <FuiIcon name=shop></FuiIcon>
      </FuiButtonContent>
    </FuiButton>
    <FuiButton tag=div focusable animated=fade>
      <FuiButtonContent visible>Sign-up for a Pro account</FuiButtonContent>
      <FuiButtonContent hidden>$12.99 a month</FuiButtonContent>
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonAnimated1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Animated',
    description: 'A button can animate to show hidden content',
    model: '    <div class="ui animated button" tabindex="0">\n' +
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
  },
};
</script>
