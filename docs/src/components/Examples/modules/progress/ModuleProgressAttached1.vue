<template>
  <div>
      <div class="ui segment">
        <div class="ui top attached progress">
          <div class="bar"/>
        </div>
        <p>La la la la</p>
        <div class="ui bottom attached progress">
          <div class="bar"/>
        </div>
      </div>
      <div class="ignored">
        <div class="ui icon buttons">
          <div class="decrement ui basic red button icon"><i class="minus icon"/></div>
          <div class="increment ui basic green button icon"><i class="plus icon"/></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressAttached1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A progress bar can show progress of an element',
    model: '      <div class="ui segment">\n' +
      '        <div class="ui top attached progress">\n' +
      '          <div class="bar"/>\n' +
      '        </div>\n' +
      '        <p>La la la la</p>\n' +
      '        <div class="ui bottom attached progress">\n' +
      '          <div class="bar"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ignored">\n' +
      '        <div class="ui icon buttons">\n' +
      '          <div class="decrement ui basic red button icon"><i class="minus icon"/></div>\n' +
      '          <div class="increment ui basic green button icon"><i class="plus icon"/></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
