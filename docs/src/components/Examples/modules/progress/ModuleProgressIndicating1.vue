<template>
  <div>
      <div class="ui indicating progress">
        <div class="bar"/>
        <div class="label">Funding</div>
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
  name: 'ModuleProgressIndicating1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Types',
    title2: 'Indicating',
    description: 'An indicating progress bar visually indicates the current level of progress of a task',
    model: '      <div class="ui indicating progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Funding</div>\n' +
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
