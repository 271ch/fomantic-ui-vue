<template>
  <div>
    <a class="ui red empty circular label"/>
    <a class="ui orange empty circular label"/>
    <a class="ui yellow empty circular label"/>
    <a class="ui olive empty circular label"/>
    <a class="ui green empty circular label"/>
    <a class="ui teal empty circular label"/>
    <a class="ui blue empty circular label"/>
    <a class="ui violet empty circular label"/>
    <a class="ui purple empty circular label"/>
    <a class="ui pink empty circular label"/>
    <a class="ui brown empty circular label"/>
    <a class="ui grey empty circular label"/>
    <a class="ui black empty circular label"/>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelCircular2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Variations',
      title2: 'Circular',
      description: 'A label can be circular',
      model: '    <a class="ui red empty circular label"/>\n' +
      '    <a class="ui orange empty circular label"/>\n' +
      '    <a class="ui yellow empty circular label"/>\n' +
      '    <a class="ui olive empty circular label"/>\n' +
      '    <a class="ui green empty circular label"/>\n' +
      '    <a class="ui teal empty circular label"/>\n' +
      '    <a class="ui blue empty circular label"/>\n' +
      '    <a class="ui violet empty circular label"/>\n' +
      '    <a class="ui purple empty circular label"/>\n' +
      '    <a class="ui pink empty circular label"/>\n' +
      '    <a class="ui brown empty circular label"/>\n' +
      '    <a class="ui grey empty circular label"/>\n' +
      '    <a class="ui black empty circular label"/>\n',
    };
  },
};
</script>
