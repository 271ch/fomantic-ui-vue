<template>
  <div>
    <div class="ui ignored warning message">A floating label must be positioned inside a container with <b>position: relative</b> to display properly.</div>
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"/> Messages
        <div class="floating ui red label">22</div>
      </a>
      <a class="item">
        <i class="icon users"/> Friends
        <div class="floating ui teal label">22</div>
      </a>
    </div>
    <br/><br/>
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"/> Messages
        <div class="floating ui red label">22 Mails</div>
      </a>
      <a class="item">
        <i class="icon users"/> Friends
        <div class="floating ui teal label">22 Friends</div>
      </a>
    </div>
    <br/><br/>
    <div class="ui black bottom pointing label">New in 2.7.2</div>
    <br/>
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"/> Messages
        <div class="bottom floating ui red label">22</div>
      </a>
      <a class="item">
        <i class="icon users"/> Friends
        <div class="bottom floating ui teal label">22</div>
      </a>
    </div>
    <br/><br/>
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"/> Messages
        <div class="bottom floating ui red label">22 Mails</div>
      </a>
      <a class="item">
        <i class="icon users"/> Friends
        <div class="bottom floating ui teal label">22 Friends</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelFloating1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Floating',
      description: 'A label can float above or below another element.',
      model: '    <div class="ui ignored warning message">A floating label must be positioned inside a container with <b>position: relative</b> to display properly.</div>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="icon mail"/> Messages\n' +
      '        <div class="floating ui red label">22</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="icon users"/> Friends\n' +
      '        <div class="floating ui teal label">22</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br/><br/>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="icon mail"/> Messages\n' +
      '        <div class="floating ui red label">22 Mails</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="icon users"/> Friends\n' +
      '        <div class="floating ui teal label">22 Friends</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br/><br/>\n' +
      '    <div class="ui black bottom pointing label">New in 2.7.2</div>\n' +
      '    <br/>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="icon mail"/> Messages\n' +
      '        <div class="bottom floating ui red label">22</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="icon users"/> Friends\n' +
      '        <div class="bottom floating ui teal label">22</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br/><br/>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="icon mail"/> Messages\n' +
      '        <div class="bottom floating ui red label">22 Mails</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="icon users"/> Friends\n' +
      '        <div class="bottom floating ui teal label">22 Friends</div>\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
