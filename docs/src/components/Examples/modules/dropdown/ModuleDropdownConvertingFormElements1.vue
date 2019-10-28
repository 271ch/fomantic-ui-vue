<template>
  <div>
      <div class="code" data-label="HTML" data-type="html">
        <select name="gender" class="ui dropdown" id="select">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#select')
          .dropdown()
        ;
      </div>
      <select class="ui dropdown" name="gender" id="select">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownConvertingFormElements1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Converting Form Elements',
    description: 'For convenience,',
    model: '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <select name="gender" class="ui dropdown" id="select">\n' +
      '          <option value="">Gender</option>\n' +
      '          <option value="male">Male</option>\n' +
      '          <option value="female">Female</option>\n' +
      '        </select>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#select\')\n' +
      '          .dropdown()\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <select class="ui dropdown" name="gender" id="select">\n' +
      '        <option value="">Gender</option>\n' +
      '        <option value="male">Male</option>\n' +
      '        <option value="female">Female</option>\n' +
      '      </select>\n',
  },
};
</script>
