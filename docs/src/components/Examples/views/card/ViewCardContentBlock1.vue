<template>
  <div>
    <div class="ui card">
      <div class="content">
        <div class="header">Project Timeline</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Activity</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Helen Troy</a> added two pictures
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <button class="ui button">Join Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardContentBlock1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Content',
      title2: 'Content Block',
      description: 'A card can contain blocks of content',
      model: '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <div class="header">Project Timeline</div>\n' +
      '      </div>\n' +
      '      <div class="content">\n' +
      '        <h4 class="ui sub header">Activity</h4>\n' +
      '        <div class="ui small feed">\n' +
      '          <div class="event">\n' +
      '            <div class="content">\n' +
      '              <div class="summary">\n' +
      '                 <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="event">\n' +
      '            <div class="content">\n' +
      '              <div class="summary">\n' +
      '                 <a>Stevie Feliciano</a> was added as an <a>Administrator</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="event">\n' +
      '            <div class="content">\n' +
      '              <div class="summary">\n' +
      '                 <a>Helen Troy</a> added two pictures\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <button class="ui button">Join Project</button>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
