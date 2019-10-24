<template>
  <div>
    <FuiList>
      <FuiItem iconName=folder>
        <FuiContent header="src">
          <FuiDescription>Source files for project</FuiDescription>
          <FuiList sub>
            <FuiItem iconName=folder>
              <FuiContent header="site">
                <FuiDescription>Your site's theme</FuiDescription>
              </FuiContent>
            </FuiItem>
            <FuiItem iconName=folder>
              <FuiContent header="themes">
                <FuiDescription>Packaged theme files</FuiDescription>
                <FuiList sub>
                  <FuiItem iconName=folder>
                    <FuiContent header="default">
                      <FuiDescription>Default packaged theme</FuiDescription>
                    </FuiContent>
                  </FuiItem>
                  <FuiItem iconName=folder>
                    <FuiContent header="my_theme">
                      <FuiDescription>Packaged themes are also available in this folder</FuiDescription>
                    </FuiContent>
                  </FuiItem>
                </FuiList>
              </FuiContent>
            </FuiItem>
            <FuiItem iconName=file>
              <FuiContent header="theme.config">
                <FuiDescription>Config file for setting packaged themes</FuiDescription>
              </FuiContent>
            </FuiItem>
          </FuiList>
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=folder>
        <FuiContent header="dist">
          <FuiDescription>Compiled CSS and JS files</FuiDescription>
          <FuiList sub>
            <FuiItem iconName=folder>
              <FuiContent header="components">
                <FuiDescription>Individual component CSS and JS</FuiDescription>
              </FuiContent>
            </FuiItem>
          </FuiList>
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=file>
        <FuiContent header="semantic.json">
          <FuiDescription>Contains build settings for gulp</FuiDescription>
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListList4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'List',
    description: 'A list groups related content',
    model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <i class="folder icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="header">src</div>\n' +
      '          <div class="description">Source files for project</div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"></i>\n' +
      '              <div class="content">\n' +
      '                <div class="header">site</div>\n' +
      '                <div class="description">Your site\'s theme</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"></i>\n' +
      '              <div class="content">\n' +
      '                <div class="header">themes</div>\n' +
      '                <div class="description">Packaged theme files</div>\n' +
      '                <div class="list">\n' +
      '                  <div class="item">\n' +
      '                    <i class="folder icon"></i>\n' +
      '                    <div class="content">\n' +
      '                      <div class="header">default</div>\n' +
      '                      <div class="description">Default packaged theme</div>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                  <div class="item">\n' +
      '                    <i class="folder icon"></i>\n' +
      '                    <div class="content">\n' +
      '                      <div class="header">my_theme</div>\n' +
      '                      <div class="description">Packaged themes are also available in this folder</div>\n' +
      '                    </div>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <i class="file icon"></i>\n' +
      '              <div class="content">\n' +
      '                <div class="header">theme.config</div>\n' +
      '                <div class="description">Config file for setting packaged themes</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="folder icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="header">dist</div>\n' +
      '          <div class="description">Compiled CSS and JS files</div>\n' +
      '          <div class="list">\n' +
      '            <div class="item">\n' +
      '              <i class="folder icon"></i>\n' +
      '              <div class="content">\n' +
      '                <div class="header">components</div>\n' +
      '                <div class="description">Individual component CSS and JS</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="file icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="header">semantic.json</div>\n' +
      '          <div class="description">Contains build settings for gulp</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
