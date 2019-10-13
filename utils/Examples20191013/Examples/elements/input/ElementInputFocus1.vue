<template>
  <div>
    <div class="ui input focus">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputFocus1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'States',
      title2: 'Focus',
      description: 'An input field can show a user is currently interacting with it',
      model: '    <div class="ui input focus">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '    </div>\n',
    };
  },
};
</script>
