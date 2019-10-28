<template>
  <div>
      <div class="code" data-demo="true" data-eval="$('.standard.test.modal').modal('show');">
      $('.ui.modal')
        .modal('show')
      ;
      </div>
      <div class="existing code" data-type="html">
        <div class="ui modal">
          <i class="close icon"/>
          <div class="header">
            Profile Picture
          </div>
          <div class="image content">
            <div class="ui medium image">
              <img src="/images/avatar/large/chris.jpg"/>
            </div>
            <div class="description">
              <div class="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div class="actions">
            <div class="ui black deny button">
              Nope
            </div>
            <div class="ui positive right labeled icon button">
              Yep, that's me
              <i class="checkmark icon"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalModal1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Types',
    title2: 'Modal',
    description: 'A standard modal',
    model: '      <div class="code" data-demo="true" data-eval="$(\'.standard.test.modal\').modal(\'show\');">\n' +
      '      $(\'.ui.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="existing code" data-type="html">\n' +
      '        <div class="ui modal">\n' +
      '          <i class="close icon"/>\n' +
      '          <div class="header">\n' +
      '            Profile Picture\n' +
      '          </div>\n' +
      '          <div class="image content">\n' +
      '            <div class="ui medium image">\n' +
      '              <img src="/images/avatar/large/chris.jpg"/>\n' +
      '            </div>\n' +
      '            <div class="description">\n' +
      '              <div class="ui header">We\'ve auto-chosen a profile image for you.</div>\n' +
      '              <p>We\'ve grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>\n' +
      '              <p>Is it okay to use this photo?</p>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <div class="ui black deny button">\n' +
      '              Nope\n' +
      '            </div>\n' +
      '            <div class="ui positive right labeled icon button">\n' +
      '              Yep, that\'s me\n' +
      '              <i class="checkmark icon"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
