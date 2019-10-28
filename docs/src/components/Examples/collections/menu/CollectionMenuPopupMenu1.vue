<template>
  <div>
    <FuiMenu>
      <FuiItem a>
        Browse
        <FuiIcon name=dropdown></FuiIcon>
      </FuiItem>
    </FuiMenu>
    <FuiPopup fluid>
      <FuiGrid column=four relaxed equalHeight divided>
        <FuiColumn>
          <FuiHeader level=4>Fabrics</FuiHeader>
          <FuiList link>
            <FuiItem a>Cashmere</FuiItem>
            <FuiItem a>Linen</FuiItem>
            <FuiItem a>Cotton</FuiItem>
            <FuiItem a>Viscose</FuiItem>
          </FuiList>
        </FuiColumn>
        <FuiColumn>
          <FuiHeader level=4>Size</FuiHeader>
          <FuiList link>
            <FuiItem a>Small</FuiItem>
            <FuiItem a>Medium</FuiItem>
            <FuiItem a>Large</FuiItem>
            <FuiItem a>Plus Sizes</FuiItem>
          </FuiList>
        </FuiColumn>
        <FuiColumn>
          <FuiHeader level=4>Colored</FuiHeader>
          <FuiList link>
            <FuiItem a>Neutrals</FuiItem>
            <FuiItem a>Brights</FuiItem>
            <FuiItem a>Pastels</FuiItem>
          </FuiList>
        </FuiColumn>
        <FuiColumn>
          <FuiHeader level=4>Types</FuiHeader>
          <FuiList link>
            <FuiItem a>Knitwear</FuiItem>
            <FuiItem a>Outerwear</FuiItem>
            <FuiItem a>Pants</FuiItem>
            <FuiItem a>Shoes</FuiItem>
          </FuiList>
        </FuiColumn>
      </FuiGrid>
    </FuiPopup>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPopupMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Popup Menu',
    description: 'A menu item may show a large menu, or additional content using a',
    model: '    <div class="ui menu">\n' +
      '      <a class="item">\n' +
      '        Browse\n' +
      '        <i class="dropdown icon"></i>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <div class="ui fluid popup">\n' +
      '      <div class="ui four column relaxed divided equal height grid">\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Fabrics</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Cashmere</a>\n' +
      '            <a class="item">Linen</a>\n' +
      '            <a class="item">Cotton</a>\n' +
      '            <a class="item">Viscose</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Size</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Small</a>\n' +
      '            <a class="item">Medium</a>\n' +
      '            <a class="item">Large</a>\n' +
      '            <a class="item">Plus Sizes</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Colored</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Neutrals</a>\n' +
      '            <a class="item">Brights</a>\n' +
      '            <a class="item">Pastels</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <h4 class="ui header">Types</h4>\n' +
      '          <div class="ui link list">\n' +
      '            <a class="item">Knitwear</a>\n' +
      '            <a class="item">Outerwear</a>\n' +
      '            <a class="item">Pants</a>\n' +
      '            <a class="item">Shoes</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
