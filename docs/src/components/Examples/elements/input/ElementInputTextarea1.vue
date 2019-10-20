<template>
  <div>
    <div class="ui form">
        <div class="ui left corner labeled input">
            <div class="ui left corner label">
                <i class="asterisk icon"></i>
            </div>
            <textarea> I have a left corner label</textarea>
        </div>
        <div class="ui corner labeled input">
            <div class="ui corner label">
                <i class="asterisk icon"></i>
            </div>
            <textarea> I have a right corner label</textarea>
        </div>
        <div class="ui left icon input">
            <textarea> I have an left icon</textarea>
            <i class="search icon"></i>
        </div>
        <div class="ui icon input">
            <textarea> I have a right icon</textarea>
            <i class="search icon"></i>
        </div>
        <div class="ui left corner labeled left icon input">
            <div class="ui left corner label">
                <i class="asterisk icon"></i>
            </div>
            <textarea> I have a left icon and left corner label</textarea>
            <i class="search icon"></i>
        </div>
        <div class="ui corner labeled icon input">
            <div class="ui  corner label">
                <i class="asterisk icon"></i>
            </div>
            <textarea>I have a right icon and right corner label</textarea>
            <i class="search icon"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTextarea1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Textarea',
    description: 'Using the input class you can also use some features on',
    model: '    <div class="ui form">\n' +
      '        <div class="ui left corner labeled input">\n' +
      '            <div class="ui left corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea> I have a left corner label</textarea>\n' +
      '        </div>\n' +
      '        <div class="ui corner labeled input">\n' +
      '            <div class="ui corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea> I have a right corner label</textarea>\n' +
      '        </div>\n' +
      '        <div class="ui left icon input">\n' +
      '            <textarea> I have an left icon</textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui icon input">\n' +
      '            <textarea> I have a right icon</textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui left corner labeled left icon input">\n' +
      '            <div class="ui left corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea> I have a left icon and left corner label</textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui corner labeled icon input">\n' +
      '            <div class="ui  corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea>I have a right icon and right corner label</textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '    </div>\n',
  },
};
</script>
