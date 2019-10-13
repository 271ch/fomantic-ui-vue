<template>
  <div>
    <div class="ui small basic icon buttons">
      <button class="ui button"><i class="file icon"/></button>
      <button class="ui button"><i class="save icon"/></button>
      <button class="ui button"><i class="upload icon"/></button>
      <button class="ui button"><i class="download icon"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonGroupSizes2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Group Variations',
      title2: 'Group Sizes',
      description: 'Groups can have a shared size',
      model: '    <div class="ui small basic icon buttons">\n' +
      '      <button class="ui button"><i class="file icon"/></button>\n' +
      '      <button class="ui button"><i class="save icon"/></button>\n' +
      '      <button class="ui button"><i class="upload icon"/></button>\n' +
      '      <button class="ui button"><i class="download icon"/></button>\n' +
      '    </div>\n',
    };
  },
};
</script>
