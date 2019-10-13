<template>
  <div>
    <div class="evaluated code" data-type="javascript">
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
    </div>
    <div class="ui special cards">
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="/images/avatar/large/elliot.jpg"/>
        </div>
        <div class="content">
          <a class="header">Team Fu</a>
          <div class="meta">
            <span class="date">Created in Sep 2014</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"/>
            2 Members
          </a>
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui inverted dimmer">
            <div class="content">
              <div class="center">
                <div class="ui primary button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="/images/avatar/large/jenny.jpg"/>
        </div>
        <div class="content">
          <a class="header">Team Hess</a>
          <div class="meta">
            <span class="date">Created in Aug 2014</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"/>
            2 Members
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardImage2',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Content',
      title2: 'Image',
      description: 'A card can contain an image',
      model: '    <div class="evaluated code" data-type="javascript">\n' +
      '    $(\'.special.cards .image\').dimmer({\n' +
      '      on: \'hover\'\n' +
      '    });\n' +
      '    </div>\n' +
      '    <div class="ui special cards">\n' +
      '      <div class="card">\n' +
      '        <div class="blurring dimmable image">\n' +
      '          <div class="ui dimmer">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                <div class="ui inverted button">Add Friend</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <img src="/images/avatar/large/elliot.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Team Fu</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="date">Created in Sep 2014</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="extra content">\n' +
      '          <a>\n' +
      '            <i class="users icon"/>\n' +
      '            2 Members\n' +
      '          </a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="blurring dimmable image">\n' +
      '          <div class="ui inverted dimmer">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                <div class="ui primary button">Add Friend</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <img src="/images/avatar/large/jenny.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Team Hess</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="date">Created in Aug 2014</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="extra content">\n' +
      '          <a>\n' +
      '            <i class="users icon"/>\n' +
      '            2 Members\n' +
      '          </a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
