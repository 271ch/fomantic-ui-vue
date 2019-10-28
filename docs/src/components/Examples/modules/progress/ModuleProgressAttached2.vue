<template>
  <div>
      <div class="ui card">
        <div class="image">
          <img src="/images/wireframe/image.png"/>
        </div>
        <div class="content">
          <a class="header">Project</a>
          <div class="meta">
            <span class="date">Started in 2014</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"/>
            22 Friends
          </a>
        </div>
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
  name: 'ModuleProgressAttached2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A progress bar can show progress of an element',
    model: '      <div class="ui card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Project</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="date">Started in 2014</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="extra content">\n' +
      '          <a>\n' +
      '            <i class="user icon"/>\n' +
      '            22 Friends\n' +
      '          </a>\n' +
      '        </div>\n' +
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
