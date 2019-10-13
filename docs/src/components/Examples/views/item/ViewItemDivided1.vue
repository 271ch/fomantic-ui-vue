<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"/>
      The following example uses <a href="/elements/segment.html">ui</a> for legibility only. This is not necessary for using <code>ui items</code>
    </div>
    <div class="ui divided items">
      <div class="item">
        <div class="image">
          <img src="/images/wireframe/image.png"/>
        </div>
        <div class="content">
          <a class="header">12 Years a Slave</a>
          <div class="meta">
            <span class="cinema">Union Square 14</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
          <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label"><i class="globe icon"/> Additional Languages</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src="/images/wireframe/image.png"/>
        </div>
        <div class="content">
          <a class="header">My Neighbor Totoro</a>
          <div class="meta">
            <span class="cinema">IFC Cinema</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
          <div class="extra">
            <div class="ui right floated primary button">
              Buy tickets
              <i class="right chevron icon"/>
            </div>
            <div class="ui label">Limited</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src="/images/wireframe/image.png"/>
        </div>
        <div class="content">
          <a class="header">Watchmen</a>
          <div class="meta">
            <span class="cinema">IFC</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
          <div class="extra">
            <div class="ui right floated primary button">
              Buy tickets
              <i class="right chevron icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemDivided1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'item',
      title1: 'Variations',
      title2: 'Divided',
      description: 'Items can be divided to better distinguish between grouped content',
      model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"/>\n' +
      '      The following example uses <a href="/elements/segment.html">ui</a> for legibility only. This is not necessary for using <code>ui items</code>\n' +
      '    </div>\n' +
      '    <div class="ui divided items">\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">12 Years a Slave</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="cinema">Union Square 14</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '          <div class="extra">\n' +
      '            <div class="ui label">IMAX</div>\n' +
      '            <div class="ui label"><i class="globe icon"/> Additional Languages</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">My Neighbor Totoro</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="cinema">IFC Cinema</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '          <div class="extra">\n' +
      '            <div class="ui right floated primary button">\n' +
      '              Buy tickets\n' +
      '              <i class="right chevron icon"/>\n' +
      '            </div>\n' +
      '            <div class="ui label">Limited</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Watchmen</a>\n' +
      '          <div class="meta">\n' +
      '            <span class="cinema">IFC</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '          <div class="extra">\n' +
      '            <div class="ui right floated primary button">\n' +
      '              Buy tickets\n' +
      '              <i class="right chevron icon"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
