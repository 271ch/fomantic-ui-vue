<template>
  <div>
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/helen.jpg"/>
        </div>
        <div class="content">
          <div class="date">
            3 days ago
          </div>
          <div class="summary">
             <a>Helen Troy</a> added 2 photos
          </div>
          <div class="extra images">
            <a><img src="/images/wireframe/image.png"/></a>
            <a><img src="/images/wireframe/image.png"/></a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/laura.jpg"/>
        </div>
        <div class="content">
          <div class="date">
            3 days ago
          </div>
          <div class="summary">
             <a>Laura Faucet</a> created a post
          </div>
          <div class="extra text">
            Have you seen what's going on in Israel? Can you believe it.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewFeedAdditionalinformation1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'feed',
    title1: 'Content',
    title2: 'Additional information',
    description: 'An event can contain additional information like a set of images or text',
    model: '    <div class="ui feed">\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/helen.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="date">\n' +
      '            3 days ago\n' +
      '          </div>\n' +
      '          <div class="summary">\n' +
      '             <a>Helen Troy</a> added 2 photos\n' +
      '          </div>\n' +
      '          <div class="extra images">\n' +
      '            <a><img src="/images/wireframe/image.png"/></a>\n' +
      '            <a><img src="/images/wireframe/image.png"/></a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/laura.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="date">\n' +
      '            3 days ago\n' +
      '          </div>\n' +
      '          <div class="summary">\n' +
      '             <a>Laura Faucet</a> created a post\n' +
      '          </div>\n' +
      '          <div class="extra text">\n' +
      '            Have you seen what\'s going on in Israel? Can you believe it.\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
