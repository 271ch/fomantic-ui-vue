<template>
  <div>
    <div class="ui ignored message">Horizontal dividers can also be used in combination with <a href="/elements/header.html">headers</a> and <a href="/elements/icon.html">icons</a> to create different styles of dividers.
    </div>
    <div class="ui ignored info message">Dividers will automatically vary the size of their dividing rules to match the length of your text</div>
    <div class="ui center aligned basic segment">
      <div class="ui left icon action input">
        <i class="search icon"/>
        <input type="text" placeholder="Order #"/>
        <div class="ui blue submit button">Search</div>
      </div>
      <div class="ui horizontal divider">
        Or
      </div>
      <div class="ui teal labeled icon button">
        Create New Order
        <i class="add icon"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHorizontalDivider1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Horizontal Divider',
    description: 'A divider can segment content horizontally',
    model: '    <div class="ui ignored message">Horizontal dividers can also be used in combination with <a href="/elements/header.html">headers</a> and <a href="/elements/icon.html">icons</a> to create different styles of dividers.\n' +
      '    </div>\n' +
      '    <div class="ui ignored info message">Dividers will automatically vary the size of their dividing rules to match the length of your text</div>\n' +
      '    <div class="ui center aligned basic segment">\n' +
      '      <div class="ui left icon action input">\n' +
      '        <i class="search icon"/>\n' +
      '        <input type="text" placeholder="Order #"/>\n' +
      '        <div class="ui blue submit button">Search</div>\n' +
      '      </div>\n' +
      '      <div class="ui horizontal divider">\n' +
      '        Or\n' +
      '      </div>\n' +
      '      <div class="ui teal labeled icon button">\n' +
      '        Create New Order\n' +
      '        <i class="add icon"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
