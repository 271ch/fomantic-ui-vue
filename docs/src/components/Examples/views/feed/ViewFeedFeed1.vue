<template>
  <div>
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/elliot.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            <a class="user">
              Elliot Fu
            </a> added you as a friend
            <div class="date">
              1 Hour Ago
            </div>
          </div>
          <div class="meta">
            <a class="like">
              <i class="like icon"/> 4 Likes
            </a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/helen.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <div class="date">
              4 days ago
            </div>
          </div>
          <div class="extra images">
            <a><img src="/images/wireframe/image.png"></a>
            <a><img src="/images/wireframe/image.png"></a>
          </div>
          <div class="meta">
            <a class="like">
              <i class="like icon"/> 1 Like
            </a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/jenny.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            <a class="user">
              Jenny Hess
            </a> added you as a friend
            <div class="date">
              2 Days Ago
            </div>
          </div>
          <div class="meta">
            <a class="like">
              <i class="like icon"/> 8 Likes
            </a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/joe.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            <a>Joe Henderson</a> posted on his page
            <div class="date">
              3 days ago
            </div>
          </div>
          <div class="extra text">
            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
          </div>
          <div class="meta">
            <a class="like">
              <i class="like icon"/> 5 Likes
            </a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/justen.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
            <div class="date">
              4 days ago
            </div>
          </div>
          <div class="extra images">
            <a><img src="/images/wireframe/image.png"></a>
            <a><img src="/images/wireframe/image.png"></a>
          </div>
          <div class="meta">
            <a class="like">
              <i class="like icon"/> 41 Likes
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewFeedFeed1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'feed',
    title1: 'Types',
    title2: 'Feed',
    description: 'A feed',
    model: '    <div class="ui feed">\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            <a class="user">\n' +
      '              Elliot Fu\n' +
      '            </a> added you as a friend\n' +
      '            <div class="date">\n' +
      '              1 Hour Ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            <a class="like">\n' +
      '              <i class="like icon"/> 4 Likes\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/helen.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            <a>Helen Troy</a> added <a>2 new illustrations</a>\n' +
      '            <div class="date">\n' +
      '              4 days ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="extra images">\n' +
      '            <a><img src="/images/wireframe/image.png"></a>\n' +
      '            <a><img src="/images/wireframe/image.png"></a>\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            <a class="like">\n' +
      '              <i class="like icon"/> 1 Like\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/jenny.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            <a class="user">\n' +
      '              Jenny Hess\n' +
      '            </a> added you as a friend\n' +
      '            <div class="date">\n' +
      '              2 Days Ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            <a class="like">\n' +
      '              <i class="like icon"/> 8 Likes\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/joe.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            <a>Joe Henderson</a> posted on his page\n' +
      '            <div class="date">\n' +
      '              3 days ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="extra text">\n' +
      '            Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            <a class="like">\n' +
      '              <i class="like icon"/> 5 Likes\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/justen.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            <a>Justen Kitsune</a> added <a>2 new photos</a> of you\n' +
      '            <div class="date">\n' +
      '              4 days ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="extra images">\n' +
      '            <a><img src="/images/wireframe/image.png"></a>\n' +
      '            <a><img src="/images/wireframe/image.png"></a>\n' +
      '          </div>\n' +
      '          <div class="meta">\n' +
      '            <a class="like">\n' +
      '              <i class="like icon"/> 41 Likes\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
