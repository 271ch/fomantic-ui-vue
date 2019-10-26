<template>
  <div>
    <FuiMenu text>
      <FuiItem src="/images/new-school.jpg">
      </FuiItem>
      <FuiItem a>
        Browse Courses
        <FuiIcon name=dropdown></FuiIcon>
      </FuiItem>
      <FuiItem right dropdown>
        More
        <FuiIcon name=dropdown></FuiIcon>
        <FuiMenu sub>
          <FuiItem>Applications</FuiItem>
          <FuiItem>International Students</FuiItem>
          <FuiItem>Scholarships</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
    <FuiPopup flowing basic admission>
      <FuiGrid column=three relaxed divided>
        <FuiColumn>
          <FuiHeader level=4>Business</FuiHeader>
          <FuiList link>
            <FuiItem a>Design &amp; Urban Ecologies</FuiItem>
            <FuiItem a>Fashion Design</FuiItem>
            <FuiItem a>Fine Art</FuiItem>
            <FuiItem a>Strategic Design</FuiItem>
          </FuiList>
        </FuiColumn>
        <FuiColumn>
          <FuiHeader level=4>Liberal Arts</FuiHeader>
          <FuiList link>
            <FuiItem a>Anthropology</FuiItem>
            <FuiItem a>Economics</FuiItem>
            <FuiItem a>Media Studies</FuiItem>
            <FuiItem a>Philosophy</FuiItem>
          </FuiList>
        </FuiColumn>
        <FuiColumn>
          <FuiHeader level=4>Social Sciences</FuiHeader>
          <FuiList link>
            <FuiItem a>Food Studies</FuiItem>
            <FuiItem a>Journalism</FuiItem>
            <FuiItem a>Non Profit Management</FuiItem>
          </FuiList>
        </FuiColumn>
      </FuiGrid>
    </FuiPopup>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Menu',
    description: 'A menu',
    model: '    <div class="ui text menu">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/new-school.jpg">\n' +
      '      </div>\n' +
      '      <a class="item">\n' +
      '        Browse Courses\n' +
      '        <i class="dropdown icon"></i>\n' +
      '      </a>\n' +
      '      <div class="ui dropdown right item">\n' +
      '        More\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Applications</div>\n' +
      '          <div class="item">International Students</div>\n' +
      '          <div class="item">Scholarships</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui flowing basic admission popup">\n' +
      '      <div class="ui three column relaxed divided grid">\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Business</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Design &amp; Urban Ecologies</a>\n' +
      '            <a class="item">Fashion Design</a>\n' +
      '            <a class="item">Fine Art</a>\n' +
      '            <a class="item">Strategic Design</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Liberal Arts</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Anthropology</a>\n' +
      '            <a class="item">Economics</a>\n' +
      '            <a class="item">Media Studies</a>\n' +
      '            <a class="item">Philosophy</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Social Sciences</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Food Studies</a>\n' +
      '            <a class="item">Journalism</a>\n' +
      '            <a class="item">Non Profit Management</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
