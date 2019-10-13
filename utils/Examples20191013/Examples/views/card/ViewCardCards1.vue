<template>
  <div>
    <div class="ui ignored info message">
      <p>Cards are designed to be flexible to your content. <code>content</code> blocks can include any custom elements related to your content.</p>
    </div>
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
          <div class="header">
            Elliot Fu
          </div>
          <div class="meta">
            Friends of Veronika
          </div>
          <div class="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg"/>
          <div class="header">
            Jenny Hess
          </div>
          <div class="meta">
            New Member
          </div>
          <div class="description">
            Jenny wants to add you to the group <b>best friends</b>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardCards1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Types',
      title2: 'Cards',
      description: 'A group of cards.',
      model: '    <div class="ui ignored info message">\n' +
      '      <p>Cards are designed to be flexible to your content. <code>content</code> blocks can include any custom elements related to your content.</p>\n' +
      '    </div>\n' +
      '    <div class="ui cards">\n' +
      '      <div class="card">\n' +
      '        <div class="content">\n' +
      '          <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>\n' +
      '          <div class="header">\n' +
      '            Elliot Fu\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            Friends of Veronika\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            Elliot requested permission to view your contact details\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="extra content">\n' +
      '          <div class="ui two buttons">\n' +
      '            <div class="ui basic green button">Approve</div>\n' +
      '            <div class="ui basic red button">Decline</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="content">\n' +
      '          <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg"/>\n' +
      '          <div class="header">\n' +
      '            Jenny Hess\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            New Member\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            Jenny wants to add you to the group <b>best friends</b>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="extra content">\n' +
      '          <div class="ui two buttons">\n' +
      '            <div class="ui basic green button">Approve</div>\n' +
      '            <div class="ui basic red button">Decline</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
