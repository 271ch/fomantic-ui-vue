<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"></i>
      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced
    </div>
    <div class="ui card">
      <div class="content">
        <div class="center aligned header">Jenny Hess</div>
        <div class="center aligned description">
          <p>Jenny is a student studying Media Management at the New School</p>
        </div>
      </div>
      <div class="extra content">
        <div class="center aligned author">
          <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/> Jenny
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardTextAlignment1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Variations',
    title2: 'Text Alignment',
    description: 'Any element inside a card can have its text alignment specified',
    model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"></i>\n' +
      '      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced\n' +
      '    </div>\n' +
      '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <div class="center aligned header">Jenny Hess</div>\n' +
      '        <div class="center aligned description">\n' +
      '          <p>Jenny is a student studying Media Management at the New School</p>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <div class="center aligned author">\n' +
      '          <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/> Jenny\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
