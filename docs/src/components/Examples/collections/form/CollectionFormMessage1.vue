<template>
  <div>
    <div class="ui ignored info message">
      Any <code>info</code>, <code>error</code>, <code>success</code>, or <code>warning</code> message blocks found inside a form are hidden by default.
    </div>
    <div class="ui form">
      <div class="ui message">
        <div class="header">We had some issues</div>
        <ul class="list">
          <li>Please enter your first name</li>
          <li>Please enter your last name</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormMessage1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Content',
      title2: 'Message',
      description: 'A form can contain a',
      model: '    <div class="ui ignored info message">\n' +
      '      Any <code>info</code>, <code>error</code>, <code>success</code>, or <code>warning</code> message blocks found inside a form are hidden by default.\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="ui message">\n' +
      '        <div class="header">We had some issues</div>\n' +
      '        <ul class="list">\n' +
      '          <li>Please enter your first name</li>\n' +
      '          <li>Please enter your last name</li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
