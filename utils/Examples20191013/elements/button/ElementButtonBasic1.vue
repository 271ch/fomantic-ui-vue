<template>
  <div>
    <button class="ui basic button">
      <i class="icon user"/>
      Add Friend
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasic1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Basic',
      description: 'A basic button is less pronounced',
      model: '    <button class="ui basic button">\n' +
      '      <i class="icon user"/>\n' +
      '      Add Friend\n' +
      '    </button>\n',
    };
  },
};
</script>
