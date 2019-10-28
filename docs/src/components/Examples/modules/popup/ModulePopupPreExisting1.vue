<template>
  <div>
      <div class="ui card">
        <div class="image">
          <img src="/images/movies/watchmen-horizontal.jpg"/>
        </div>
        <div class="content">
          <div class="header">Watchmen</div>
          <div class="description">
            In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.
          </div>
        </div>
        <div class="ui two bottom attached buttons">
          <div class="ui button">
            <i class="add icon"/>
            Queue
          </div>
          <div class="ui primary button">
            <i class="play icon"/>
            Watch
          </div>
        </div>
      </div>
      <div class="ui popup">
        <div class="header">User Rating</div>
        <div class="ui yellow rating" data-rating="3"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupPreExisting1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: '???',
    title2: 'Pre-Existing',
    description: 'An element can display a popup that is already included in the page',
    model: '      <div class="ui card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/movies/watchmen-horizontal.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Watchmen</div>\n' +
      '          <div class="description">\n' +
      '            In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="ui two bottom attached buttons">\n' +
      '          <div class="ui button">\n' +
      '            <i class="add icon"/>\n' +
      '            Queue\n' +
      '          </div>\n' +
      '          <div class="ui primary button">\n' +
      '            <i class="play icon"/>\n' +
      '            Watch\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui popup">\n' +
      '        <div class="header">User Rating</div>\n' +
      '        <div class="ui yellow rating" data-rating="3"/>\n' +
      '      </div>\n',
  },
};
</script>
