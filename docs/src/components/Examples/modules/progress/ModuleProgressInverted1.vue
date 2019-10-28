<template>
  <div>
      <div class="ui inverted segment">
        <div class="ui inverted progress">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Uploading Files</div>
        </div>
        <div class="ui inverted progress success">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Success</div>
        </div>
        <div class="ui inverted progress warning">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Warning</div>
        </div>
        <div class="ui inverted progress error">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Error</div>
        </div>
      </div>
      <div class="ignored">
        <div class="ui icon buttons">
          <div class="increment ui basic green button icon"><i class="plus icon"/></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressInverted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A progress bar can have its colors inverted',
    model: '      <div class="ui inverted segment">\n' +
      '        <div class="ui inverted progress">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Uploading Files</div>\n' +
      '        </div>\n' +
      '        <div class="ui inverted progress success">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Success</div>\n' +
      '        </div>\n' +
      '        <div class="ui inverted progress warning">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Warning</div>\n' +
      '        </div>\n' +
      '        <div class="ui inverted progress error">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Error</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ignored">\n' +
      '        <div class="ui icon buttons">\n' +
      '          <div class="increment ui basic green button icon"><i class="plus icon"/></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
