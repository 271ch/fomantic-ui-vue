<template>
  <div>
    <div class="ui ignored info message">
      Many of the following examples use a coupling with <a href="/modules/dropdown.html">dropdowns</a> to display dropdown menus inside of <code>ui menu</code>. Please consult the dropdown documentation for the correct javascript initialization for this component.
    </div>
    <div class="ui text menu">
      <div class="item">
        <img src="/images/new-school.jpg"/>
      </div>
      <a class="browse item">
        Browse Courses
        <i class="dropdown icon"/>
      </a>
      <div class="ui right dropdown item">
        More
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Applications</div>
          <div class="item">International Students</div>
          <div class="item">Scholarships</div>
        </div>
      </div>
    </div>
    <div class="ui flowing basic admission popup">
      <div class="ui three column relaxed divided grid">
        <div class="column">
          <h4 class="ui header">Business</h4>
          <div class="ui link list">
            <a class="item">Design &amp; Urban Ecologies</a>
            <a class="item">Fashion Design</a>
            <a class="item">Fine Art</a>
            <a class="item">Strategic Design</a>
          </div>
        </div>
        <div class="column">
          <h4 class="ui header">Liberal Arts</h4>
          <div class="ui link list">
            <a class="item">Anthropology</a>
            <a class="item">Economics</a>
            <a class="item">Media Studies</a>
            <a class="item">Philosophy</a>
          </div>
        </div>
        <div class="column">
          <h4 class="ui header">Social Sciences</h4>
          <div class="ui link list">
            <a class="item">Food Studies</a>
            <a class="item">Journalism</a>
            <a class="item">Non Profit Management</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Menu',
    description: 'A menu',
    model: '    <div class="ui ignored info message">\n' +
      '      Many of the following examples use a coupling with <a href="/modules/dropdown.html">dropdowns</a> to display dropdown menus inside of <code>ui menu</code>. Please consult the dropdown documentation for the correct javascript initialization for this component.\n' +
      '    </div>\n' +
      '    <div class="ui text menu">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/new-school.jpg"/>\n' +
      '      </div>\n' +
      '      <a class="browse item">\n' +
      '        Browse Courses\n' +
      '        <i class="dropdown icon"/>\n' +
      '      </a>\n' +
      '      <div class="ui right dropdown item">\n' +
      '        More\n' +
      '        <i class="dropdown icon"/>\n' +
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
