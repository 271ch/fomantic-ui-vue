<template>
  <div>
      <div class="ui info message">
        For nested accordions you only need to initialize the parent accordion.
      </div>
      <div class="ui styled accordion">
        <div class="active title">
          <i class="dropdown icon"/>
          Level 1
        </div>
        <div class="active content">
          Welcome to level 1
          <div class="accordion">
            <div class="active title">
                <i class="dropdown icon"/>
                Level 1A
            </div>
            <div class="active content">
              <p>Level 1A Contents</p>
              <div class="accordion">
                <div class="title">
                    <i class="dropdown icon"/>
                    Level 1A-A
                </div>
                <div class="content">
                    Level 1A-A Contents
                </div>
                <div class="title">
                    <i class="dropdown icon"/>
                    Level 1A-B
                </div>
                <div class="content">
                    Level 1A-B Contents
                </div>
              </div>
            </div>
            <div class="title">
                <i class="dropdown icon"/>
                Level 1B
            </div>
            <div class="content">
                Level 1B Contents
            </div>
            <div class="title">
                <i class="dropdown icon"/>
                Level 1C
            </div>
            <div class="content">
                Level 1C Contents
            </div>
          </div>
        </div>
        <div class="title">
          <i class="dropdown icon"/>
          Level 2
        </div>
        <div class="content">
          <p>Welcome to level 2</p>
          <div class="accordion">
            <div class="active title">
              <i class="dropdown icon"/>
              Level 2A
            </div>
            <div class="active content">
              <p>Level 2A Contents</p>
              <div class="accordion">
                <div class="title">
                    <i class="dropdown icon"/>
                    Level 2A-A
                </div>
                <div class="content">
                    Level 2A-A Contents
                </div>
                <div class="title">
                    <i class="dropdown icon"/>
                    Level 2A-B
                </div>
                <div class="content">
                    Level 2A-B Contents
                </div>
              </div>
            </div>
            <div class="title">
                <i class="dropdown icon"/>
                Level 2B
            </div>
            <div class="content">
                Level 2B Contents
            </div>
            <div class="title">
                <i class="dropdown icon"/>
                Level 2C
            </div>
            <div class="content">
                Level 2C Contents
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleAccordionNestedAccordions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'accordion',
    title1: 'Examples',
    title2: 'Nested Accordions',
    description: 'An accordion can have multiple levels of nested content. This content can either be in a nested',
    model: '      <div class="ui info message">\n' +
      '        For nested accordions you only need to initialize the parent accordion.\n' +
      '      </div>\n' +
      '      <div class="ui styled accordion">\n' +
      '        <div class="active title">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          Level 1\n' +
      '        </div>\n' +
      '        <div class="active content">\n' +
      '          Welcome to level 1\n' +
      '          <div class="accordion">\n' +
      '            <div class="active title">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                Level 1A\n' +
      '            </div>\n' +
      '            <div class="active content">\n' +
      '              <p>Level 1A Contents</p>\n' +
      '              <div class="accordion">\n' +
      '                <div class="title">\n' +
      '                    <i class="dropdown icon"/>\n' +
      '                    Level 1A-A\n' +
      '                </div>\n' +
      '                <div class="content">\n' +
      '                    Level 1A-A Contents\n' +
      '                </div>\n' +
      '                <div class="title">\n' +
      '                    <i class="dropdown icon"/>\n' +
      '                    Level 1A-B\n' +
      '                </div>\n' +
      '                <div class="content">\n' +
      '                    Level 1A-B Contents\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="title">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                Level 1B\n' +
      '            </div>\n' +
      '            <div class="content">\n' +
      '                Level 1B Contents\n' +
      '            </div>\n' +
      '            <div class="title">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                Level 1C\n' +
      '            </div>\n' +
      '            <div class="content">\n' +
      '                Level 1C Contents\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="title">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          Level 2\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <p>Welcome to level 2</p>\n' +
      '          <div class="accordion">\n' +
      '            <div class="active title">\n' +
      '              <i class="dropdown icon"/>\n' +
      '              Level 2A\n' +
      '            </div>\n' +
      '            <div class="active content">\n' +
      '              <p>Level 2A Contents</p>\n' +
      '              <div class="accordion">\n' +
      '                <div class="title">\n' +
      '                    <i class="dropdown icon"/>\n' +
      '                    Level 2A-A\n' +
      '                </div>\n' +
      '                <div class="content">\n' +
      '                    Level 2A-A Contents\n' +
      '                </div>\n' +
      '                <div class="title">\n' +
      '                    <i class="dropdown icon"/>\n' +
      '                    Level 2A-B\n' +
      '                </div>\n' +
      '                <div class="content">\n' +
      '                    Level 2A-B Contents\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="title">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                Level 2B\n' +
      '            </div>\n' +
      '            <div class="content">\n' +
      '                Level 2B Contents\n' +
      '            </div>\n' +
      '            <div class="title">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                Level 2C\n' +
      '            </div>\n' +
      '            <div class="content">\n' +
      '                Level 2C Contents\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
