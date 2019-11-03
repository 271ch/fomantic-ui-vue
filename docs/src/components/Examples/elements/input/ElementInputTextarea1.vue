<template>
  <div>
    <FuiForm>
      <FuiInput corner=left labeled textarea placeholder="I have a left corner label">
        <template #before>
          <FuiLabel corner=left>
              <FuiIcon name=asterisk></FuiIcon>
          </FuiLabel>
        </template>
      </FuiInput>
      <FuiInput corner labeled textarea placeholder="I have a right corner label">
        <template #before>
          <FuiLabel corner>
              <FuiIcon name=asterisk></FuiIcon>
          </FuiLabel>
        </template>
      </FuiInput>
      <FuiInput icon=left textarea placeholder="I have a left icon">
          <FuiIcon name=search></FuiIcon>
      </FuiInput>
      <FuiInput icon textarea placeholder="I have a right icon">
          <FuiIcon name=search></FuiIcon>
      </FuiInput>
      <FuiInput corner=left labeled=left icon textarea placeholder="I have a left icon and left corner label">
        <template #before>
          <FuiLabel corner=left>
              <FuiIcon name=asterisk></FuiIcon>
          </FuiLabel>
        </template>
        <FuiIcon name=search></FuiIcon>
      </FuiInput>
      <FuiInput corner labeled icon textarea placeholder="I have a right icon and right corner label">
        <template #before>
          <FuiLabel corner>
              <FuiIcon name=asterisk></FuiIcon>
          </FuiLabel>
        </template>
        <FuiIcon name=search></FuiIcon>
      </FuiInput>
    </FuiForm>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTextarea1',
  info: {
    converted: true,
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
      '            <textarea placeholder="I have a left corner label"></textarea>\n' +
      '        </div>\n' +
      '        <div class="ui corner labeled input">\n' +
      '            <div class="ui corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea placeholder="I have a right corner label"></textarea>\n' +
      '        </div>\n' +
      '        <div class="ui left icon input">\n' +
      '            <textarea placeholder="I have a left icon"></textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui icon input">\n' +
      '            <textarea placeholder="I have a right icon"></textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui icon left corner left labeled input">\n' +
      '            <div class="ui left corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea placeholder="I have a left icon and left corner label"></textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '        <div class="ui icon corner labeled input">\n' +
      '            <div class="ui corner label">\n' +
      '                <i class="asterisk icon"></i>\n' +
      '            </div>\n' +
      '            <textarea placeholder="I have a right icon and right corner label"></textarea>\n' +
      '            <i class="search icon"></i>\n' +
      '        </div>\n' +
      '    </div>\n',
  },
};
</script>
