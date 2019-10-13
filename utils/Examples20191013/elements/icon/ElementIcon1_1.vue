<template>
  <div>
    <h2 class="ui dividing header">States</h2>
    <div class="example">
      <h4 class="ui header">Disabled</h4>
      <p>An icon can show that it is disabled</p>
      <i class="disabled users icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Loading</h4>
      <p>An icon can be used as a simple loader</p>
      <i class="spinner loading icon"/>
      <i class="notched circle loading icon"/>
      <i class="asterisk loading icon"/>
    </div>
    <h2 class="ui dividing header">Variations</h2>
    <div class="example">
      <h4 class="ui header">Fitted</h4>
      <p>An icon can be fitted, without any space to the left or right of it.</p>
      Tight spacing
      <i class="fitted help icon"/>
      Tight spacing
    </div>
    <div class="example">
      <h4 class="ui header">Size</h4>
      <p>An icon can vary in size</p>
      <i class="mini home icon"/>
      <i class="tiny home icon"/>
      <i class="small home icon"/>
      <br/>
      <i class="home icon"/>
      <br/>
      <i class="large home icon"/>
      <br/>
      <i class="big home icon"/>
      <br/>
      <i class="huge home icon"/>
      <br/>
      <i class="massive home icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Link</h4>
      <p>An icon can be formatted as a link</p>
      <i class="close link icon"/>
      <i class="help link icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Flipped</h4>
      <p>An icon can be flipped</p>
      <i class="horizontally flipped cloud icon"/>
      <i class="vertically flipped cloud icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Rotated</h4>
      <p>An icon can be rotated</p>
      <i class="clockwise rotated cloud icon"/>
      <i class="counterclockwise rotated cloud icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Circular</h4>
      <p>An icon can be formatted to appear circular</p>
      <i class="circular users icon"/>
      <i class="circular teal users icon"/>
      <i class="circular inverted users icon"/>
      <i class="circular inverted teal users icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Bordered</h4>
      <div class="ui ignored info message">
        In <code>0.x.x</code> bordered was formally known as <code>squared</code>
      </div>
      <p>An icon can be formatted to appear bordered</p>
      <i class="bordered users icon"/>
      <i class="bordered teal users icon"/>
      <i class="bordered inverted black users icon"/>
      <i class="bordered inverted teal users icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Colored</h4>
      <p>An icon can be formatted with different colors</p>
      <i class="primary users icon"/>
      <i class="secondary users icon"/>
      <i class="red users icon"/>
      <i class="orange users icon"/>
      <i class="yellow users icon"/>
      <i class="olive users icon"/>
      <i class="green users icon"/>
      <i class="teal users icon"/>
      <i class="blue users icon"/>
      <i class="violet users icon"/>
      <i class="purple users icon"/>
      <i class="pink users icon"/>
      <i class="brown users icon"/>
      <i class="grey users icon"/>
      <i class="black users icon"/>
    </div>
    <div class="example">
      <h4 class="ui header">Inverted</h4>
      <p>An icon can have its colors inverted for contrast</p>
      <div class="ui inverted segment">
        <i class="inverted users icon"/>
        <i class="inverted primary users icon"/>
        <i class="inverted secondary users icon"/>
        <i class="inverted red users icon"/>
        <i class="inverted orange users icon"/>
        <i class="inverted yellow users icon"/>
        <i class="inverted olive users icon"/>
        <i class="inverted green users icon"/>
        <i class="inverted teal users icon"/>
        <i class="inverted blue users icon"/>
        <i class="inverted violet users icon"/>
        <i class="inverted purple users icon"/>
        <i class="inverted pink users icon"/>
        <i class="inverted brown users icon"/>
        <i class="inverted grey users icon"/>
      </div>
    </div>
    <h2 class="ui dividing header">Groups</h2>
    <div class="example">
      <h4 class="ui header">Icons</h4>
      <p>Several icons can be used together as a group</p>
      <i class="huge icons">
        <i class="big circle outline icon"/>
        <i class="user icon"/>
      </i>
    </div>
    <div class="another example">
      <i class="huge icons">
        <i class="big red dont icon"/>
        <i class="black user icon"/>
      </i>
    </div>
    <div class="example" data-class="corner">
      <h4 class="ui header">Corner Icon</h4>
      <p>A group of icons can display a smaller corner icon</p>
      <i class="huge icons">
        <i class="puzzle icon"/>
        <i class="corner add icon"/>
      </i>
    </div>
    <div class="another example">
      <i class="huge icons">
        <i class="puzzle icon"/>
        <i class="top left corner add icon"/>
      </i>
      <i class="huge icons">
        <i class="puzzle icon"/>
        <i class="top right corner add icon"/>
      </i>
      <i class="huge icons">
        <i class="puzzle icon"/>
        <i class="bottom left corner add icon"/>
      </i>
      <i class="huge icons">
        <i class="puzzle icon"/>
        <i class="bottom right corner add icon"/>
      </i>
    </div>
    <div class="another example">
      <h2 class="ui header">
        <i class="large icons">
          <i class="twitter icon"/>
          <i class="inverted corner add icon"/>
        </i>
        Add on Twitter
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementIcon1_1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'icon',
      title1: '???',
      title2: '???',
      description: '???',
      model: '    <h2 class="ui dividing header">States</h2>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Disabled</h4>\n' +
      '      <p>An icon can show that it is disabled</p>\n' +
      '      <i class="disabled users icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Loading</h4>\n' +
      '      <p>An icon can be used as a simple loader</p>\n' +
      '      <i class="spinner loading icon"/>\n' +
      '      <i class="notched circle loading icon"/>\n' +
      '      <i class="asterisk loading icon"/>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Variations</h2>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Fitted</h4>\n' +
      '      <p>An icon can be fitted, without any space to the left or right of it.</p>\n' +
      '      Tight spacing\n' +
      '      <i class="fitted help icon"/>\n' +
      '      Tight spacing\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Size</h4>\n' +
      '      <p>An icon can vary in size</p>\n' +
      '      <i class="mini home icon"/>\n' +
      '      <i class="tiny home icon"/>\n' +
      '      <i class="small home icon"/>\n' +
      '      <br/>\n' +
      '      <i class="home icon"/>\n' +
      '      <br/>\n' +
      '      <i class="large home icon"/>\n' +
      '      <br/>\n' +
      '      <i class="big home icon"/>\n' +
      '      <br/>\n' +
      '      <i class="huge home icon"/>\n' +
      '      <br/>\n' +
      '      <i class="massive home icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Link</h4>\n' +
      '      <p>An icon can be formatted as a link</p>\n' +
      '      <i class="close link icon"/>\n' +
      '      <i class="help link icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Flipped</h4>\n' +
      '      <p>An icon can be flipped</p>\n' +
      '      <i class="horizontally flipped cloud icon"/>\n' +
      '      <i class="vertically flipped cloud icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Rotated</h4>\n' +
      '      <p>An icon can be rotated</p>\n' +
      '      <i class="clockwise rotated cloud icon"/>\n' +
      '      <i class="counterclockwise rotated cloud icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Circular</h4>\n' +
      '      <p>An icon can be formatted to appear circular</p>\n' +
      '      <i class="circular users icon"/>\n' +
      '      <i class="circular teal users icon"/>\n' +
      '      <i class="circular inverted users icon"/>\n' +
      '      <i class="circular inverted teal users icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Bordered</h4>\n' +
      '      <div class="ui ignored info message">\n' +
      '        In <code>0.x.x</code> bordered was formally known as <code>squared</code>\n' +
      '      </div>\n' +
      '      <p>An icon can be formatted to appear bordered</p>\n' +
      '      <i class="bordered users icon"/>\n' +
      '      <i class="bordered teal users icon"/>\n' +
      '      <i class="bordered inverted black users icon"/>\n' +
      '      <i class="bordered inverted teal users icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Colored</h4>\n' +
      '      <p>An icon can be formatted with different colors</p>\n' +
      '      <i class="primary users icon"/>\n' +
      '      <i class="secondary users icon"/>\n' +
      '      <i class="red users icon"/>\n' +
      '      <i class="orange users icon"/>\n' +
      '      <i class="yellow users icon"/>\n' +
      '      <i class="olive users icon"/>\n' +
      '      <i class="green users icon"/>\n' +
      '      <i class="teal users icon"/>\n' +
      '      <i class="blue users icon"/>\n' +
      '      <i class="violet users icon"/>\n' +
      '      <i class="purple users icon"/>\n' +
      '      <i class="pink users icon"/>\n' +
      '      <i class="brown users icon"/>\n' +
      '      <i class="grey users icon"/>\n' +
      '      <i class="black users icon"/>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Inverted</h4>\n' +
      '      <p>An icon can have its colors inverted for contrast</p>\n' +
      '      <div class="ui inverted segment">\n' +
      '        <i class="inverted users icon"/>\n' +
      '        <i class="inverted primary users icon"/>\n' +
      '        <i class="inverted secondary users icon"/>\n' +
      '        <i class="inverted red users icon"/>\n' +
      '        <i class="inverted orange users icon"/>\n' +
      '        <i class="inverted yellow users icon"/>\n' +
      '        <i class="inverted olive users icon"/>\n' +
      '        <i class="inverted green users icon"/>\n' +
      '        <i class="inverted teal users icon"/>\n' +
      '        <i class="inverted blue users icon"/>\n' +
      '        <i class="inverted violet users icon"/>\n' +
      '        <i class="inverted purple users icon"/>\n' +
      '        <i class="inverted pink users icon"/>\n' +
      '        <i class="inverted brown users icon"/>\n' +
      '        <i class="inverted grey users icon"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Groups</h2>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Icons</h4>\n' +
      '      <p>Several icons can be used together as a group</p>\n' +
      '      <i class="huge icons">\n' +
      '        <i class="big circle outline icon"/>\n' +
      '        <i class="user icon"/>\n' +
      '      </i>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <i class="huge icons">\n' +
      '        <i class="big red dont icon"/>\n' +
      '        <i class="black user icon"/>\n' +
      '      </i>\n' +
      '    </div>\n' +
      '    <div class="example" data-class="corner">\n' +
      '      <h4 class="ui header">Corner Icon</h4>\n' +
      '      <p>A group of icons can display a smaller corner icon</p>\n' +
      '      <i class="huge icons">\n' +
      '        <i class="puzzle icon"/>\n' +
      '        <i class="corner add icon"/>\n' +
      '      </i>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <i class="huge icons">\n' +
      '        <i class="puzzle icon"/>\n' +
      '        <i class="top left corner add icon"/>\n' +
      '      </i>\n' +
      '      <i class="huge icons">\n' +
      '        <i class="puzzle icon"/>\n' +
      '        <i class="top right corner add icon"/>\n' +
      '      </i>\n' +
      '      <i class="huge icons">\n' +
      '        <i class="puzzle icon"/>\n' +
      '        <i class="bottom left corner add icon"/>\n' +
      '      </i>\n' +
      '      <i class="huge icons">\n' +
      '        <i class="puzzle icon"/>\n' +
      '        <i class="bottom right corner add icon"/>\n' +
      '      </i>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <h2 class="ui header">\n' +
      '        <i class="large icons">\n' +
      '          <i class="twitter icon"/>\n' +
      '          <i class="inverted corner add icon"/>\n' +
      '        </i>\n' +
      '        Add on Twitter\n' +
      '      </h2>\n' +
      '    </div>\n',
    };
  },
};
</script>
