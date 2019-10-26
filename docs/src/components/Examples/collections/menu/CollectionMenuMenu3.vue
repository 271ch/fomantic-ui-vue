<template>
  <div>
    <FuiMenu attached=top>
      <FuiItem dropdown icon>
        <FuiIcon name=wrench></FuiIcon>
        <FuiMenu sub>
          <FuiItem>
            <FuiIcon name=dropdown></FuiIcon>
            <FuiText int>New</FuiText>
            <FuiMenu sub>
              <FuiItem>Document</FuiItem>
              <FuiItem>Image</FuiItem>
            </FuiMenu>
          </FuiItem>
          <FuiItem>
            Open...
          </FuiItem>
          <FuiItem>
            Save...
          </FuiItem>
          <FuiItem>Edit Permissions</FuiItem>
          <div class="divider"/>
          <div class="header">
            Export
          </div>
          <FuiItem>
            Share...
          </FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem right search>
          <FuiInput transparent icon prompt placeholder="Search animals...">
            <FuiIcon name=search link></FuiIcon>
          </FuiInput>
          <div class="results"></div>
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
    <FuiSegment attached=bottom>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Menu',
    description: 'A menu',
    model: '    <div class="ui top attached menu">\n' +
      '      <div class="ui dropdown icon item">\n' +
      '        <i class="wrench icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"></i>\n' +
      '            <span class="text">New</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Document</div>\n' +
      '              <div class="item">Image</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            Open...\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            Save...\n' +
      '          </div>\n' +
      '          <div class="item">Edit Permissions</div>\n' +
      '          <div class="divider"></div>\n' +
      '          <div class="header">\n' +
      '            Export\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            Share...\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="right menu">\n' +
      '        <div class="search right item">\n' +
      '          <div class="ui transparent icon input">\n' +
      '            <input type="text" placeholder="Search animals..." class="prompt">\n' +
      '            <i class="search link icon"></i>\n' +
      '          </div>\n' +
      '          <div class="results"></div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
