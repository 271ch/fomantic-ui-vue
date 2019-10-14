<template>
  <div>
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/elliot.jpg"/>
        </div>
        <div class="content">
          You added Elliot Fu to the group <a>Coworkers</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewFeedLabel1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'feed',
    title1: 'Content',
    title2: 'Label',
    description: 'An event can contain an image or icon label',
    model: '    <div class="ui feed">\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          You added Elliot Fu to the group <a>Coworkers</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
