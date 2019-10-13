<template>
  <div>
    <div class="ui list">
      <div class="item">
        <i class="folder icon"/>
        <div class="content">
          <div class="header">src</div>
          <div class="description">Source files for project</div>
          <div class="list">
            <div class="item">
              <i class="folder icon"/>
              <div class="content">
                <div class="header">site</div>
                <div class="description">Your site's theme</div>
              </div>
            </div>
            <div class="item">
              <i class="folder icon"/>
              <div class="content">
                <div class="header">themes</div>
                <div class="description">Packaged theme files</div>
                <div class="list">
                  <div class="item">
                    <i class="folder icon"/>
                    <div class="content">
                      <div class="header">default</div>
                      <div class="description">Default packaged theme</div>
                    </div>
                  </div>
                  <div class="item">
                    <i class="folder icon"/>
                    <div class="content">
                      <div class="header">my_theme</div>
                      <div class="description">Packaged themes are also available in this folder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <i class="file icon"/>
              <div class="content">
                <div class="header">theme.config</div>
                <div class="description">Config file for setting packaged themes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <i class="folder icon"/>
        <div class="content">
          <div class="header">dist</div>
          <div class="description">Compiled CSS and JS files</div>
          <div class="list">
            <div class="item">
              <i class="folder icon"/>
              <div class="content">
                <div class="header">components</div>
                <div class="description">Individual component CSS and JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <i class="file icon"/>
        <div class="content">
          <div class="header">semantic.json</div>
          <div class="description">Contains build settings for gulp</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListList4',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Types',
      title2: 'List',
      description: 'A list groups related content',
      model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <i class="folder icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">src</div>\n' +
      '          <div class="description">Source files for project</div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"/>\n' +
      '              <div class="content">\n' +
      '                <div class="header">site</div>\n' +
      '                <div class="description">Your site\'s theme</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"/>\n' +
      '              <div class="content">\n' +
      '                <div class="header">themes</div>\n' +
      '                <div class="description">Packaged theme files</div>\n' +
      '                <div class="list">\n' +
      '                  <div class="item">\n' +
      '                    <i class="folder icon"/>\n' +
      '                    <div class="content">\n' +
      '                      <div class="header">default</div>\n' +
      '                      <div class="description">Default packaged theme</div>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="item">\n' +
      '                    <i class="folder icon"/>\n' +
      '                    <div class="content">\n' +
      '                      <div class="header">my_theme</div>\n' +
      '                      <div class="description">Packaged themes are also available in this folder</div>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <i class="file icon"/>\n' +
      '              <div class="content">\n' +
      '                <div class="header">theme.config</div>\n' +
      '                <div class="description">Config file for setting packaged themes</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="folder icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">dist</div>\n' +
      '          <div class="description">Compiled CSS and JS files</div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"/>\n' +
      '              <div class="content">\n' +
      '                <div class="header">components</div>\n' +
      '                <div class="description">Individual component CSS and JS</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="file icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">semantic.json</div>\n' +
      '          <div class="description">Contains build settings for gulp</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
