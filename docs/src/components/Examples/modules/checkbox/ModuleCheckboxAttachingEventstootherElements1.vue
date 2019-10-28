<template>
  <div>
      <div class="evaluated code">
        $('.test.checkbox').checkbox('attach events', '.toggle.button');
        $('.test.checkbox').checkbox('attach events', '.check.button', 'check');
        $('.test.checkbox').checkbox('attach events', '.uncheck.button', 'uncheck');
      </div>
      <div class="ui toggle button">Toggle</div>
      <div class="ui positive check button">Check</div>
      <div class="ui negative uncheck button">Uncheck</div>
      <div class="ui six column center aligned stackable divided grid segment">
        <div class="column">
          <div class="ui test slider checkbox">
            <input type="checkbox"/>
            <label>1</label>
          </div>
        </div>
        <div class="column">
          <div class="ui test toggle checkbox">
            <input type="checkbox" checked="checked"/>
            <label>2</label>
          </div>
        </div>
        <div class="column">
          <div class="ui test checkbox">
            <input type="checkbox"/>
            <label>3</label>
          </div>
        </div>
        <div class="column">
          <div class="ui test slider checkbox">
            <input type="checkbox" checked="checked"/>
            <label>4</label>
          </div>
        </div>
        <div class="column">
          <div class="ui test toggle checkbox">
            <input type="checkbox"/>
            <label>5</label>
          </div>
        </div>
        <div class="column">
          <div class="ui test checkbox">
            <input type="checkbox"/>
            <label>6</label>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxAttachingEventstootherElements1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Examples',
    title2: 'Attaching Events to other Elements',
    description: 'Checkbox can use the',
    model: '      <div class="evaluated code">\n' +
      '        $(\'.test.checkbox\').checkbox(\'attach events\', \'.toggle.button\');\n' +
      '        $(\'.test.checkbox\').checkbox(\'attach events\', \'.check.button\', \'check\');\n' +
      '        $(\'.test.checkbox\').checkbox(\'attach events\', \'.uncheck.button\', \'uncheck\');\n' +
      '      </div>\n' +
      '      <div class="ui toggle button">Toggle</div>\n' +
      '      <div class="ui positive check button">Check</div>\n' +
      '      <div class="ui negative uncheck button">Uncheck</div>\n' +
      '      <div class="ui six column center aligned stackable divided grid segment">\n' +
      '        <div class="column">\n' +
      '          <div class="ui test slider checkbox">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>1</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui test toggle checkbox">\n' +
      '            <input type="checkbox" checked="checked"/>\n' +
      '            <label>2</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui test checkbox">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>3</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui test slider checkbox">\n' +
      '            <input type="checkbox" checked="checked"/>\n' +
      '            <label>4</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui test toggle checkbox">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>5</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui test checkbox">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>6</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
