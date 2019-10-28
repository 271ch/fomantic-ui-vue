<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example2').progress({
          percent: 22
        });
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui teal progress" id="example2">
          <div class="bar"/>
          <div class="label">22% Earned</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressWithJavascript1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Initializing a progress bar',
    title2: 'With Javascript',
    description: 'A progress bar can be initialized with a Javascript settings object',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example2\').progress({\n' +
      '          percent: 22\n' +
      '        });\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui teal progress" id="example2">\n' +
      '          <div class="bar"/>\n' +
      '          <div class="label">22% Earned</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
