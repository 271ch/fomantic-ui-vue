<template>
  <div>
      <div class="ui celled relaxed list">
        <div class="item">
          <div class="ui master checkbox">
            <input type="checkbox" name="fruits"/>
            <label>Fruits</label>
          </div>
          <div class="list">
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="apple"/>
                <label>Apple</label>
              </div>
            </div>
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="orange"/>
                <label>Orange</label>
              </div>
            </div>
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="pear"/>
                <label>Pear</label>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="ui master checkbox">
            <input type="checkbox" name="vegetables"/>
            <label>Vegetables</label>
          </div>
          <div class="list">
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="lettuce"/>
                <label>Lettuce</label>
              </div>
            </div>
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="carrot"/>
                <label>Carrot</label>
              </div>
            </div>
            <div class="item">
              <div class="ui child checkbox">
                <input type="checkbox" name="spinach"/>
                <label>Spinach</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="evaluated code" data-title="Master Checkboxes">
        $('.list .master.checkbox')
          .checkbox({
            // check all children
            onChecked: function() {
              var
                $childCheckbox  = $(this).closest('.checkbox').siblings('.list').find('.checkbox')
              ;
              $childCheckbox.checkbox('check');
            },
            // uncheck all children
            onUnchecked: function() {
              var
                $childCheckbox  = $(this).closest('.checkbox').siblings('.list').find('.checkbox')
              ;
              $childCheckbox.checkbox('uncheck');
            }
          })
        ;
      </div>
      <div class="evaluated code" data-title="Child Checkboxes">
        $('.list .child.checkbox')
          .checkbox({
            // Fire on load to set parent value
            fireOnInit : true,
            // Change parent state on each child checkbox change
            onChange   : function() {
              var
                $listGroup      = $(this).closest('.list'),
                $parentCheckbox = $listGroup.closest('.item').children('.checkbox'),
                $checkbox       = $listGroup.find('.checkbox'),
                allChecked      = true,
                allUnchecked    = true
              ;
              // check to see if all other siblings are checked or unchecked
              $checkbox.each(function() {
                if( $(this).checkbox('is checked') ) {
                  allUnchecked = false;
                }
                else {
                  allChecked = false;
                }
              });
              // set parent checkbox state, but dont trigger its onChange callback
              if(allChecked) {
                $parentCheckbox.checkbox('set checked');
              }
              else if(allUnchecked) {
                $parentCheckbox.checkbox('set unchecked');
              }
              else {
                $parentCheckbox.checkbox('set indeterminate');
              }
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxGroupedCheckboxes1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Examples',
    title2: 'Grouped Checkboxes',
    description: '???',
    model: '      <div class="ui celled relaxed list">\n' +
      '        <div class="item">\n' +
      '          <div class="ui master checkbox">\n' +
      '            <input type="checkbox" name="fruits"/>\n' +
      '            <label>Fruits</label>\n' +
      '          </div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="apple"/>\n' +
      '                <label>Apple</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="orange"/>\n' +
      '                <label>Orange</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="pear"/>\n' +
      '                <label>Pear</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="ui master checkbox">\n' +
      '            <input type="checkbox" name="vegetables"/>\n' +
      '            <label>Vegetables</label>\n' +
      '          </div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="lettuce"/>\n' +
      '                <label>Lettuce</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="carrot"/>\n' +
      '                <label>Carrot</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="ui child checkbox">\n' +
      '                <input type="checkbox" name="spinach"/>\n' +
      '                <label>Spinach</label>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-title="Master Checkboxes">\n' +
      '        $(\'.list .master.checkbox\')\n' +
      '          .checkbox({\n' +
      '            // check all children\n' +
      '            onChecked: function() {\n' +
      '              var\n' +
      '                $childCheckbox  = $(this).closest(\'.checkbox\').siblings(\'.list\').find(\'.checkbox\')\n' +
      '              ;\n' +
      '              $childCheckbox.checkbox(\'check\');\n' +
      '            },\n' +
      '            // uncheck all children\n' +
      '            onUnchecked: function() {\n' +
      '              var\n' +
      '                $childCheckbox  = $(this).closest(\'.checkbox\').siblings(\'.list\').find(\'.checkbox\')\n' +
      '              ;\n' +
      '              $childCheckbox.checkbox(\'uncheck\');\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-title="Child Checkboxes">\n' +
      '        $(\'.list .child.checkbox\')\n' +
      '          .checkbox({\n' +
      '            // Fire on load to set parent value\n' +
      '            fireOnInit : true,\n' +
      '            // Change parent state on each child checkbox change\n' +
      '            onChange   : function() {\n' +
      '              var\n' +
      '                $listGroup      = $(this).closest(\'.list\'),\n' +
      '                $parentCheckbox = $listGroup.closest(\'.item\').children(\'.checkbox\'),\n' +
      '                $checkbox       = $listGroup.find(\'.checkbox\'),\n' +
      '                allChecked      = true,\n' +
      '                allUnchecked    = true\n' +
      '              ;\n' +
      '              // check to see if all other siblings are checked or unchecked\n' +
      '              $checkbox.each(function() {\n' +
      '                if( $(this).checkbox(\'is checked\') ) {\n' +
      '                  allUnchecked = false;\n' +
      '                }\n' +
      '                else {\n' +
      '                  allChecked = false;\n' +
      '                }\n' +
      '              });\n' +
      '              // set parent checkbox state, but dont trigger its onChange callback\n' +
      '              if(allChecked) {\n' +
      '                $parentCheckbox.checkbox(\'set checked\');\n' +
      '              }\n' +
      '              else if(allUnchecked) {\n' +
      '                $parentCheckbox.checkbox(\'set unchecked\');\n' +
      '              }\n' +
      '              else {\n' +
      '                $parentCheckbox.checkbox(\'set indeterminate\');\n' +
      '              }\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
