<template>
  <div>
      <div class="evaluated code">
      $('.test.button')
        .popup({
          position : 'right center',
          target   : '.test.image',
          title    : 'My favorite dog',
          content  : 'My favorite dog would like other dogs as much as themselves'
        })
      ;
      </div>
      <div class="ui green test button">Hover Me</div>
      <div class="ui divider"/>
      <img class="medium ui test image" src="/images/wireframe/image.png"/>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupTargetElement1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Target Element',
    description: 'A popup can specify a different target element than itself to show a popup',
    model: '      <div class="evaluated code">\n' +
      '      $(\'.test.button\')\n' +
      '        .popup({\n' +
      '          position : \'right center\',\n' +
      '          target   : \'.test.image\',\n' +
      '          title    : \'My favorite dog\',\n' +
      '          content  : \'My favorite dog would like other dogs as much as themselves\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui green test button">Hover Me</div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <img class="medium ui test image" src="/images/wireframe/image.png"/>\n',
  },
};
</script>
