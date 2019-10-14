<template>
  <div>
    <div class="ui ignored warning message">
      <p>Attached labels attempt to intelligently pad other content to account for their position, but may not in all cases apply this padding correctly.</p>
      <p>If this happens you may need to manually correct the padding of the other elements inside the container.
    </p></div>
    <div class="ui three column grid">
      <div class="row">
        <div class="column">
          <div class="ui segment">
            <div class="ui top attached label">HTML</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <div class="ui bottom attached label">CSS</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <div class="ui top right attached label">Code</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui segment">
            <div class="ui top left attached label">View</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <div class="ui bottom left attached label">User View</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <div class="ui bottom right attached label">Admin View</div>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
      <div class="existing code">
    <div class="ui top attached label">HTML</div>
    <div class="ui bottom attached label">CSS</div>
    <div class="ui top right attached label">Code</div>
    <div class="ui top left attached label">View</div>
    <div class="ui bottom left attached label">User View</div>
    <div class="ui bottom right attached label">Admin View</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelAttached1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Attached',
    description: 'A label can attach to a content segment',
    model: '    <div class="ui ignored warning message">\n' +
      '      <p>Attached labels attempt to intelligently pad other content to account for their position, but may not in all cases apply this padding correctly.</p>\n' +
      '      <p>If this happens you may need to manually correct the padding of the other elements inside the container.\n' +
      '    </p></div>\n' +
      '    <div class="ui three column grid">\n' +
      '      <div class="row">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top attached label">HTML</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom attached label">CSS</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top right attached label">Code</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="row">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top left attached label">View</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom left attached label">User View</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom right attached label">Admin View</div>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '      <div class="existing code">\n' +
      '    <div class="ui top attached label">HTML</div>\n' +
      '    <div class="ui bottom attached label">CSS</div>\n' +
      '    <div class="ui top right attached label">Code</div>\n' +
      '    <div class="ui top left attached label">View</div>\n' +
      '    <div class="ui bottom left attached label">User View</div>\n' +
      '    <div class="ui bottom right attached label">Admin View</div>\n' +
      '      </div>\n',
  },
};
</script>
