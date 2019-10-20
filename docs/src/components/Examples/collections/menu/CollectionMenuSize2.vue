<template>
  <div>
    <div class="ui tiny menu">
      <a class="active item">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <div class="right menu">
        <div class="ui dropdown item">
          Language <i class="dropdown icon"></i>
          <div class="menu">
            <a class="item">English</a>
            <a class="item">Russian</a>
            <a class="item">Spanish</a>
          </div>
        </div>
        <div class="item">
            <div class="ui primary button">Sign Up</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSize2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Size',
    description: 'A menu can vary in size',
    model: '    <div class="ui tiny menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="ui dropdown item">\n' +
      '          Language <i class="dropdown icon"></i>\n' +
      '          <div class="menu">\n' +
      '            <a class="item">English</a>\n' +
      '            <a class="item">Russian</a>\n' +
      '            <a class="item">Spanish</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '            <div class="ui primary button">Sign Up</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
