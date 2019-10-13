<template>
  <div>
    <div class="ui circular labels">
      <a class="ui label">
        11
      </a>
      <a class="ui label">
        22
      </a>
      <a class="ui label">
        33
      </a>
      <a class="ui label">
        44
      </a>
      <a class="ui label">
        141
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelCircularGroup1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Groups',
      title2: 'Circular Group',
      description: 'Labels can share shapes',
      model: '    <div class="ui circular labels">\n' +
      '      <a class="ui label">\n' +
      '        11\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        22\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        33\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        44\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        141\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
