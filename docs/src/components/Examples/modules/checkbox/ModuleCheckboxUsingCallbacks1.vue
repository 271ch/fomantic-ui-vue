<template>
  <div>
      <div class="ui equal width stretched grid">
        <div class="column">
          <div class="ui segment">
            <div class="ui top right attached label">
              Example
            </div>
            <div class="ui checkbox">
              <input type="checkbox"/>
              <label>Checkbox</label>
            </div>
            <div class="ui divider"/>
            <div class="ui radio checkbox">
              <input type="radio"/>
              <label>Radio</label>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui console segment">
            <div class="ui top right attached label">
              Console
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui vertical buttons">
            <div class="ui button" data-method="toggle">Toggle</div>
            <div class="ui button" data-method="check">Check</div>
            <div class="ui button" data-method="uncheck">Uncheck</div>
            <div class="ui button" data-method="indeterminate">Indeterminate</div>
            <div class="ui button" data-method="determinate">Determinate</div>
            <div class="ui button" data-method="enable">Enable</div>
            <div class="ui button" data-method="disable">Disable</div>
          </div>
          <div class="ui divider"/>
          <div class="ui vertical buttons">
            <div class="ui button" data-method="set checked">Set Checked</div>
            <div class="ui button" data-method="set unchecked">Set Unchecked</div>
            <div class="ui button" data-method="set indeterminate">Set Indeterminate</div>
            <div class="ui button" data-method="set determinate">Set Determinate</div>
            <div class="ui button" data-method="set enabled">Set Enabled</div>
            <div class="ui button" data-method="set disabled">Set Disabled</div>
          </div>
        </div>
      </div>
      <div class="evaluated code">
        var
          $console = $('.callback .console')
        ;
        $('.callback.example .checkbox')
          .checkbox()
          .first().checkbox({
            onChecked: function() {
              $console.append('onChecked called<br/>');
            },
            onUnchecked: function() {
              $console.append('onUnchecked called<br/>');
            },
            onEnable: function() {
              $console.append('onEnable called<br/>');
            },
            onDisable: function() {
              $console.append('onDisable called<br/>');
            },
            onDeterminate: function() {
              $console.append('onDeterminate called<br/>');
            },
            onIndeterminate: function() {
              $console.append('onIndeterminate called<br/>');
            },
            onChange: function() {
              $console.append('onChange called<br/>');
            }
          })
        ;
        // bind events to buttons
        $('.callback.example .button')
          .on('click', function() {
            $('.callback .checkbox').checkbox( $(this).data('method') );
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxUsingCallbacks1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Examples',
    title2: 'Using Callbacks',
    description: '???',
    model: '      <div class="ui equal width stretched grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top right attached label">\n' +
      '              Example\n' +
      '            </div>\n' +
      '            <div class="ui checkbox">\n' +
      '              <input type="checkbox"/>\n' +
      '              <label>Checkbox</label>\n' +
      '            </div>\n' +
      '            <div class="ui divider"/>\n' +
      '            <div class="ui radio checkbox">\n' +
      '              <input type="radio"/>\n' +
      '              <label>Radio</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui console segment">\n' +
      '            <div class="ui top right attached label">\n' +
      '              Console\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui vertical buttons">\n' +
      '            <div class="ui button" data-method="toggle">Toggle</div>\n' +
      '            <div class="ui button" data-method="check">Check</div>\n' +
      '            <div class="ui button" data-method="uncheck">Uncheck</div>\n' +
      '            <div class="ui button" data-method="indeterminate">Indeterminate</div>\n' +
      '            <div class="ui button" data-method="determinate">Determinate</div>\n' +
      '            <div class="ui button" data-method="enable">Enable</div>\n' +
      '            <div class="ui button" data-method="disable">Disable</div>\n' +
      '          </div>\n' +
      '          <div class="ui divider"/>\n' +
      '          <div class="ui vertical buttons">\n' +
      '            <div class="ui button" data-method="set checked">Set Checked</div>\n' +
      '            <div class="ui button" data-method="set unchecked">Set Unchecked</div>\n' +
      '            <div class="ui button" data-method="set indeterminate">Set Indeterminate</div>\n' +
      '            <div class="ui button" data-method="set determinate">Set Determinate</div>\n' +
      '            <div class="ui button" data-method="set enabled">Set Enabled</div>\n' +
      '            <div class="ui button" data-method="set disabled">Set Disabled</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code">\n' +
      '        var\n' +
      '          $console = $(\'.callback .console\')\n' +
      '        ;\n' +
      '        $(\'.callback.example .checkbox\')\n' +
      '          .checkbox()\n' +
      '          .first().checkbox({\n' +
      '            onChecked: function() {\n' +
      '              $console.append(\'onChecked called<br/>\');\n' +
      '            },\n' +
      '            onUnchecked: function() {\n' +
      '              $console.append(\'onUnchecked called<br/>\');\n' +
      '            },\n' +
      '            onEnable: function() {\n' +
      '              $console.append(\'onEnable called<br/>\');\n' +
      '            },\n' +
      '            onDisable: function() {\n' +
      '              $console.append(\'onDisable called<br/>\');\n' +
      '            },\n' +
      '            onDeterminate: function() {\n' +
      '              $console.append(\'onDeterminate called<br/>\');\n' +
      '            },\n' +
      '            onIndeterminate: function() {\n' +
      '              $console.append(\'onIndeterminate called<br/>\');\n' +
      '            },\n' +
      '            onChange: function() {\n' +
      '              $console.append(\'onChange called<br/>\');\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '        // bind events to buttons\n' +
      '        $(\'.callback.example .button\')\n' +
      '          .on(\'click\', function() {\n' +
      '            $(\'.callback .checkbox\').checkbox( $(this).data(\'method\') );\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
