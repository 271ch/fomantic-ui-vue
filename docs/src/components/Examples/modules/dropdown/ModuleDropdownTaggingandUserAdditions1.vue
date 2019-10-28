<template>
  <div>
      <div class="ui ignored warning message">
        Although all dropdowns support <code>select</code> initialization, custom choices <b>will not be saved on page refresh</b> unless you use a hidden input. This is because <code>option</code> created dynamically are not preserved on page refresh.
      </div>
      <div class="ui sub header">Single</div>
      <select name="skills" class="ui fluid search dropdown">
      </select>
      <div class="ui sub header">Multiple</div>
      <div class="ui fluid multiple search selection dropdown">
        <input name="tags" type="hidden"/>
        <i class="dropdown icon"/>
        <div class="default text">Skills</div>
        <div class="menu">
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.tag.example .ui.dropdown')
          .dropdown({
            allowAdditions: true
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownTaggingandUserAdditions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Tagging and User Additions',
    description: 'Using',
    model: '      <div class="ui ignored warning message">\n' +
      '        Although all dropdowns support <code>select</code> initialization, custom choices <b>will not be saved on page refresh</b> unless you use a hidden input. This is because <code>option</code> created dynamically are not preserved on page refresh.\n' +
      '      </div>\n' +
      '      <div class="ui sub header">Single</div>\n' +
      '      <select name="skills" class="ui fluid search dropdown">\n' +
      '      </select>\n' +
      '      <div class="ui sub header">Multiple</div>\n' +
      '      <div class="ui fluid multiple search selection dropdown">\n' +
      '        <input name="tags" type="hidden"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Skills</div>\n' +
      '        <div class="menu">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.tag.example .ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            allowAdditions: true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
