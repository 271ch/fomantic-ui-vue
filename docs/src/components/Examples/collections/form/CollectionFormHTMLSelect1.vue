<template>
  <div>
    <div class="ui form">
      <div class="field">
        <select>
          <option value="">Gender</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormHTMLSelect1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Content',
      title2: 'HTML Select',
      description: 'If Javascript or',
      model: '    <div class="ui form">\n' +
      '      <div class="field">\n' +
      '        <select>\n' +
      '          <option value="">Gender</option>\n' +
      '          <option value="1">Male</option>\n' +
      '          <option value="0">Female</option>\n' +
      '        </select>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
