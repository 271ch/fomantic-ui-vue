<template>
  <div>
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <i class="pencil icon"/>
        </div>
        <div class="content">
          <div class="summary">
            You posted on your friend <a>Stevie Feliciano's</a> wall.
            <div class="date">Today</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewFeedLabel2',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'feed',
      title1: 'Content',
      title2: 'Label',
      description: 'An event can contain an image or icon label',
      model: '    <div class="ui feed">\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <i class="pencil icon"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            You posted on your friend <a>Stevie Feliciano\'s</a> wall.\n' +
      '            <div class="date">Today</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
