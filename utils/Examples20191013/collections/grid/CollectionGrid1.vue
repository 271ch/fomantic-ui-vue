<template>
  <div>
    <h2 class="ui dividing header">Introduction</h2>
    <div class="highlighted example" data-class="grid">
      <h4 class="ui header">Grids</h4>
      <p>A grid is a structure with a <a href="http://99designs.com/designer-blog/2013/03/21/history-of-the-grid-part-1/" target="_blank">long history</a> used to align negative space in designs.</p>
      <p>Using a grid makes content appear to flow more naturally on your page.</p>
      <div class="ui ignored toggle animation checkbox">
        <input type="checkbox" name="animation"/>
        <label>Toggle Animation</label>
      </div>
      <div class="ui ignored hidden divider"/>
      <div class="ui grid">
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
      </div>
    </div>
    <div class="highlighted example" data-use-content="true" data-class="column">
      <h4 class="ui header">Columns</h4>
      <p>Grids divide horizontal space into indivisible units called "columns". All columns in a grid must specify their width as proportion of the total available row width.</p>
      <p>All grid systems choose an arbitrary column count to allow per row. Semantic's default theme uses <b>16 columns</b>.</p>
      <p>The example below shows four <code>four wide</code> columns will fit in the first row, <code>16 / 4 = 4</code>, and three various sized columns in the second row. <code>2 + 8 + 6 = 16</code></p>
      <p>The default column count, and other arbitrary features of grids can be changed by adjusting Fomantic UI's underlying <a href="/usage/theming.html">theming variables</a>.</p>
      <div class="ui grid">
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="two wide column"/>
        <div class="eight wide column"/>
        <div class="six wide column"/>
      </div>
    </div>
    <div class="highlighted example" data-use-content="true" data-class="row">
      <h4 class="ui header">Rows</h4>
      <p>Rows are groups of columns which are aligned horizontally.</p>
      <p>Rows can either be <em>explicit</em>, marked with an additional <code>row</code> element, or <em>implicit</em>, automatically occurring when no more space is left in a previous row.
      </p>
      <p>After each group of columns vertical spacing is added to separate each group of columns, creating vertical rhythm.
      </p><div class="ui four column grid">
        <div class="row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
      </div>
    </div>
    <div class="highlighted negative example" data-use-content="true" data-class="relaxed">
      <h4 class="ui header">Gutters</h4>
      <p>Grid columns are separated by areas of white space referred to as "gutters". Gutters improve legibility by providing, <a href="https://en.wikipedia.org/wiki/Negative_space" target="_blank">negative space</a> between page elements.</p>
      <p>Gutters remain a constant size regardless of the width of the grid, or how many columns are in a row. To increase the size of gutters in a particular grid, you can use a <a href="#relaxed"><code>relaxed grid</code></a> variation.</p>
      <div class="ui grid">
        <div class="three column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
        <div class="eight column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
      <div class="ui relaxed grid">
        <div class="three column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
        <div class="eight column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
    </div>
    <div class="highlighted negative example">
      <h4 class="ui header">Negative Margins</h4>
      <p>Since all grid columns include gutters, grids use <a href="http://csswizardry.com/2011/08/building-better-grid-systems/">negative margins</a> to make sure that the first and last columns sit flush with content outside the grid.</p>
      <p>In the following example, you can see even though the top row has padding, the <a href="/elements/button.html#vertically-attached"><code>attached button</code></a> still sits flush with the edge of the grid.</p><p>
      </p><p>In some cases, like when a column or row is <a href="#colored"><code>colored</code></a>, you may want to avoid using negative margins. You can do this by using a <a href="#padded"><code>padded grid</code></a> variation.</p>
       <div class="ui top attached button">Button before grid</div>
       <div class="ui grid">
        <div class="sixteen wide column"/>
        <div class="ten wide column"/>
        <div class="six wide column"/>
      </div>
      <div class="ui grid">
        <div class="sixteen wide column"/>
      </div>
      <div class="ui bottom attached button">Button after grid</div>
    </div>
    <div class="no example">
      <h4 class="ui header">Page Grids</h4>
      <p>Grids are fluid and will automatically flow in size to take the maximum available width.</p>
      <p><a href="/elements/container.html">Containers</a> are elements designed to limit page content to a reasonable maximum width for display based on the size of the user's screen.</p>
      <p>Using a <a href="/elements/container.html#containers-using-grids"><code>ui grid container</code></a> is the best way to include top-level page content inside a grid.</p>
      <div class="ui warning message">
        <p>In version <code>1.x</code> of Semantic UI <code>page grid</code> were used to contain the maximum width of grids holding page content. Page grid have been deprecated in favor for the simpler <code>container</code> element.</p>
      </div>
    </div>
    <h2 class="ui dividing header">Columns</h2>
    <div class="highlighted example">
      <h4 class="ui header">Automatic Flow</h4>
      <p>Most grids do not need to specify rows. Content will automatically flow to the next row when all the grid columns are taken in the current row.</p>
      <div class="ui grid">
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">Column Content</h4>
      <p>Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns.</p>
      <div class="ui three column grid">
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="highlighted example" data-use-content="true" data-class="wide">
      <h4 class="ui header">Column Widths</h4>
      <p>Column widths can be specified using <a href="#column-width"><code>(x) wide</code></a> class names. If a column cannot fit in a row it will automatically flow to the next row</p>
      <div class="ui grid">
        <div class="eight wide column"/>
        <div class="eight wide column"/>
        <div class="ten wide column"/>
        <div class="six wide column"/>
        <div class="four wide column"/>
        <div class="twelve wide column"/>
        <div class="two wide column"/>
        <div class="fourteen wide column"/>
        <div class="sixteen wide column"/>
      </div>
    </div>
    <h2 class="ui dividing header">Rows</h2>
    <div class="highlighted example">
      <h4 class="ui header">Grouping</h4>
      <p>Row wrappers allow you to apply variations to a group of columns.</p>
      <div class="ui four column grid">
        <div class="two column row">
          <div class="column"/>
        </div>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
      </div>
    </div>
    <div class="highlighted example" data-use-content="true" data-class="floated">
      <h4 class="ui header">Clearing Content</h4>
      <p>Row wrappers will automatically clear previous columns, making them useful when using <a href="#floated"><code>floated</code></a> variations.</p>
      <div class="ui grid">
        <div class="four column row">
          <div class="left floated column"/>
          <div class="right floated column"/>
        </div>
        <div class="row">
          <div class="three wide column"/>
          <div class="eight wide column"/>
          <div class="five wide column"/>
        </div>
      </div>
    </div>
    <div class="example" data-class="internally celled">
      <h4 class="ui header">Special Grids</h4>
      <p>Additionally, some types of grids, like <a href="#divided"><code>divided</code></a> or <a href="#celled"><code>celled</code></a> require row wrappers to apply formatting correctly.</p>
      <div class="ui internally celled grid">
        <div class="row">
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="ten wide column">
            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>
          </div>
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="row">
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="ten wide column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <h2 class="ui dividing header">Varying Grids</h2>
    <div class="highlighted special example" data-use-content="true" data-class="grid">
      <h4 class="ui header">Nesting Grids</h4>
      <p>Grids can be placed inside of other grids, letting you sub-divide columns.</p>
      <div class="ui two column grid">
        <div class="column">
          <div class="ui three column grid">
            <div class="column"/>
            <div class="column"/>
            <div class="column"/>
          </div>
        </div>
        <div class="column"/>
        <div class="column"/>
        <div class="column">
          <div class="ui grid">
            <div class="ten wide column"/>
            <div class="six wide column"/>
          </div>
        </div>
      </div>
    </div>
    <div class="colored example" data-use-content="true" data-class="colored, padded">
      <h4 class="ui header">Colored</h4>
      <p>Grids can use named <a href="#colored"><b>colors</b> variations</a> to add background colors, but only with <a href="#padded"><code>padded grid</code></a> that do not include negative margins.</p>
      <p>To include a color that is not available in the default palette its perfectly fine to use CSS</p>
      <div class="ui equal width center aligned padded grid">
        <div class="row">
          <div class="olive column">
            Olive
          </div>
          <div class="black column">
            Black
          </div>
        </div>
        <div class="row" style="background-color: #869D05;color: #FFFFFF;">
          <div class="column">Custom Row</div>
        </div>
        <div class="row">
          <div class="black column">
            Black
          </div>
          <div class="olive column">
            Olive
          </div>
        </div>
      </div>
    </div>
    <div class="highlighted example" data-class="equal width">
      <h4 class="ui header">Automatic Column Count</h4>
      <p>The <a href="#equal-width"><code>equal width</code></a> variation will automatically divide column width evenly. This is useful with dynamic content where you do not know the column count in advance.</p>
      <div class="ui equal width grid">
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="equal width row">
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
    </div>
    <div class="highlighted example" data-class="centered">
      <h4 class="ui header">Centering Content</h4>
      <p>If a row does not take up all sixteen grid columns, you can use a <a href="#centered"><code>centered</code></a> variation to center the column contents inside the grid.
      </p>
      <div class="ui two column centered grid">
        <div class="column"/>
        <div class="four column centered row">
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="left floated right aligned, right floated left aligned, center aligned, sixteen wide">
      <h4 class="ui header">Significant Word Order</h4>
      <p>Grids include many variations for adjusting things like vertical or horizontal alignment, text alignment, or default gutter sizes.</p>
      <p>Some multi-word variations, like <a href="#floated"><code>left floated</code></a> or <a href="#text-alignment"><code>right aligned</code></a> are word-order dependent and require you to use adjacent class names.</p>
      <div class="ui right aligned grid">
        <div class="left floated right aligned six wide column">
          <div class="ui segment">
            Left floated right aligned column
          </div>
        </div>
        <div class="right floated left aligned six wide column">
          <div class="ui segment">
            Right floated left aligned column
          </div>
        </div>
        <div class="center aligned two column row">
          <div class="column">
            <div class="ui segment">
            Center aligned row
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
            Center aligned row
            </div>
          </div>
        </div>
        <div class="sixteen wide column">
          <div class="ui segment">
            Right Aligned Grid
          </div>
        </div>
      </div>
    </div>
    <h2 class="ui dividing header">Responsive Grids</h2>
    <div class="highlighted example" data-class="container">
      <h4 class="ui header">Containers</h4>
      <p>A <a href="/elements/container.html">container</a> can be used alongside a grid to provide a responsive, fixed width container for wrapping the contents of a page.</p>
      <div class="ui grid container">
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
      </div>
    </div>
    <div class="highlighted example">
      <h4 class="ui header">Stackable</h4>
      <p>A <a href="#stackable"><code>stackable grid</code></a> will automatically stack rows to a single columns on mobile devices</p>
      <div class="ui stackable four column grid">
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
      </div>
    </div>
    <div class="example" data-class="mobile reversed">
      <h4 class="ui header">Reverse Order</h4>
      <p>Fomantic includes special <a href="#reversed"><code>reversed</code></a> variations that allow you to reverse the order of columns or rows by device</p>
      <div class="ui mobile reversed equal width grid">
        <div class="column">
          First
        </div>
        <div class="column">
          Second
        </div>
        <div class="column">
          Third
        </div>
      </div>
    </div>
    <div class="highlighted example">
      <h4 class="ui header">Doubling</h4>
      <p>A <a href="#doubling"><code>doubling</code></a> grid will double column widths for each device jump.</p>
      <div class="ui grid">
        <div class="doubling eight column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
        <div class="doubling six column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
        <div class="doubling four column row">
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
    </div>
    <div class="highlighted example" data-class="computer only, six wide tablet eight wide computer" data-use-content="true">
      <h4 class="ui header">Manual Tweaks</h4>
      <p>Although design patterns like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> are useful at simplifying responsive styling, you can also manually tweak device presentation by specifying <a href="#device-width"><code>(x) wide device</code></a> or <a href="#device-visibility"><code>device only</code></a> columns or rows.
      </p><div class="ui centered grid">
        <div class="computer only row">
          <div class="column"/>
        </div>
        <div class="six wide tablet eight wide computer column"/>
        <div class="six wide tablet eight wide computer column"/>
        <div class="six wide tablet eight wide computer column"/>
        <div class="six wide tablet eight wide computer column"/>
        <div class="six wide tablet eight wide computer column"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGrid1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'grid',
      title1: '???',
      title2: '???',
      description: '???',
      model: '    <h2 class="ui dividing header">Introduction</h2>\n' +
      '    <div class="highlighted example" data-class="grid">\n' +
      '      <h4 class="ui header">Grids</h4>\n' +
      '      <p>A grid is a structure with a <a href="http://99designs.com/designer-blog/2013/03/21/history-of-the-grid-part-1/" target="_blank">long history</a> used to align negative space in designs.</p>\n' +
      '      <p>Using a grid makes content appear to flow more naturally on your page.</p>\n' +
      '      <div class="ui ignored toggle animation checkbox">\n' +
      '        <input type="checkbox" name="animation"/>\n' +
      '        <label>Toggle Animation</label>\n' +
      '      </div>\n' +
      '      <div class="ui ignored hidden divider"/>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-use-content="true" data-class="column">\n' +
      '      <h4 class="ui header">Columns</h4>\n' +
      '      <p>Grids divide horizontal space into indivisible units called "columns". All columns in a grid must specify their width as proportion of the total available row width.</p>\n' +
      '      <p>All grid systems choose an arbitrary column count to allow per row. Semantic\'s default theme uses <b>16 columns</b>.</p>\n' +
      '      <p>The example below shows four <code>four wide</code> columns will fit in the first row, <code>16 / 4 = 4</code>, and three various sized columns in the second row. <code>2 + 8 + 6 = 16</code></p>\n' +
      '      <p>The default column count, and other arbitrary features of grids can be changed by adjusting Fomantic UI\'s underlying <a href="/usage/theming.html">theming variables</a>.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="two wide column"/>\n' +
      '        <div class="eight wide column"/>\n' +
      '        <div class="six wide column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-use-content="true" data-class="row">\n' +
      '      <h4 class="ui header">Rows</h4>\n' +
      '      <p>Rows are groups of columns which are aligned horizontally.</p>\n' +
      '      <p>Rows can either be <em>explicit</em>, marked with an additional <code>row</code> element, or <em>implicit</em>, automatically occurring when no more space is left in a previous row.\n' +
      '      </p>\n' +
      '      <p>After each group of columns vertical spacing is added to separate each group of columns, creating vertical rhythm.\n' +
      '      </p><div class="ui four column grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted negative example" data-use-content="true" data-class="relaxed">\n' +
      '      <h4 class="ui header">Gutters</h4>\n' +
      '      <p>Grid columns are separated by areas of white space referred to as "gutters". Gutters improve legibility by providing, <a href="https://en.wikipedia.org/wiki/Negative_space" target="_blank">negative space</a> between page elements.</p>\n' +
      '      <p>Gutters remain a constant size regardless of the width of the grid, or how many columns are in a row. To increase the size of gutters in a particular grid, you can use a <a href="#relaxed"><code>relaxed grid</code></a> variation.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="three column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="eight column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui relaxed grid">\n' +
      '        <div class="three column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="eight column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted negative example">\n' +
      '      <h4 class="ui header">Negative Margins</h4>\n' +
      '      <p>Since all grid columns include gutters, grids use <a href="http://csswizardry.com/2011/08/building-better-grid-systems/">negative margins</a> to make sure that the first and last columns sit flush with content outside the grid.</p>\n' +
      '      <p>In the following example, you can see even though the top row has padding, the <a href="/elements/button.html#vertically-attached"><code>attached button</code></a> still sits flush with the edge of the grid.</p><p>\n' +
      '      </p><p>In some cases, like when a column or row is <a href="#colored"><code>colored</code></a>, you may want to avoid using negative margins. You can do this by using a <a href="#padded"><code>padded grid</code></a> variation.</p>\n' +
      '       <div class="ui top attached button">Button before grid</div>\n' +
      '       <div class="ui grid">\n' +
      '        <div class="sixteen wide column"/>\n' +
      '        <div class="ten wide column"/>\n' +
      '        <div class="six wide column"/>\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="sixteen wide column"/>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached button">Button after grid</div>\n' +
      '    </div>\n' +
      '    <div class="no example">\n' +
      '      <h4 class="ui header">Page Grids</h4>\n' +
      '      <p>Grids are fluid and will automatically flow in size to take the maximum available width.</p>\n' +
      '      <p><a href="/elements/container.html">Containers</a> are elements designed to limit page content to a reasonable maximum width for display based on the size of the user\'s screen.</p>\n' +
      '      <p>Using a <a href="/elements/container.html#containers-using-grids"><code>ui grid container</code></a> is the best way to include top-level page content inside a grid.</p>\n' +
      '      <div class="ui warning message">\n' +
      '        <p>In version <code>1.x</code> of Semantic UI <code>page grid</code> were used to contain the maximum width of grids holding page content. Page grid have been deprecated in favor for the simpler <code>container</code> element.</p>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Columns</h2>\n' +
      '    <div class="highlighted example">\n' +
      '      <h4 class="ui header">Automatic Flow</h4>\n' +
      '      <p>Most grids do not need to specify rows. Content will automatically flow to the next row when all the grid columns are taken in the current row.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Column Content</h4>\n' +
      '      <p>Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns.</p>\n' +
      '      <div class="ui three column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-use-content="true" data-class="wide">\n' +
      '      <h4 class="ui header">Column Widths</h4>\n' +
      '      <p>Column widths can be specified using <a href="#column-width"><code>(x) wide</code></a> class names. If a column cannot fit in a row it will automatically flow to the next row</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="eight wide column"/>\n' +
      '        <div class="eight wide column"/>\n' +
      '        <div class="ten wide column"/>\n' +
      '        <div class="six wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="twelve wide column"/>\n' +
      '        <div class="two wide column"/>\n' +
      '        <div class="fourteen wide column"/>\n' +
      '        <div class="sixteen wide column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Rows</h2>\n' +
      '    <div class="highlighted example">\n' +
      '      <h4 class="ui header">Grouping</h4>\n' +
      '      <p>Row wrappers allow you to apply variations to a group of columns.</p>\n' +
      '      <div class="ui four column grid">\n' +
      '        <div class="two column row">\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-use-content="true" data-class="floated">\n' +
      '      <h4 class="ui header">Clearing Content</h4>\n' +
      '      <p>Row wrappers will automatically clear previous columns, making them useful when using <a href="#floated"><code>floated</code></a> variations.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four column row">\n' +
      '          <div class="left floated column"/>\n' +
      '          <div class="right floated column"/>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column"/>\n' +
      '          <div class="eight wide column"/>\n' +
      '          <div class="five wide column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-class="internally celled">\n' +
      '      <h4 class="ui header">Special Grids</h4>\n' +
      '      <p>Additionally, some types of grids, like <a href="#divided"><code>divided</code></a> or <a href="#celled"><code>celled</code></a> require row wrappers to apply formatting correctly.</p>\n' +
      '      <div class="ui internally celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="ten wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="ten wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Varying Grids</h2>\n' +
      '    <div class="highlighted special example" data-use-content="true" data-class="grid">\n' +
      '      <h4 class="ui header">Nesting Grids</h4>\n' +
      '      <p>Grids can be placed inside of other grids, letting you sub-divide columns.</p>\n' +
      '      <div class="ui two column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui three column grid">\n' +
      '            <div class="column"/>\n' +
      '            <div class="column"/>\n' +
      '            <div class="column"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column">\n' +
      '          <div class="ui grid">\n' +
      '            <div class="ten wide column"/>\n' +
      '            <div class="six wide column"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="colored example" data-use-content="true" data-class="colored, padded">\n' +
      '      <h4 class="ui header">Colored</h4>\n' +
      '      <p>Grids can use named <a href="#colored"><b>colors</b> variations</a> to add background colors, but only with <a href="#padded"><code>padded grid</code></a> that do not include negative margins.</p>\n' +
      '      <p>To include a color that is not available in the default palette its perfectly fine to use CSS</p>\n' +
      '      <div class="ui equal width center aligned padded grid">\n' +
      '        <div class="row">\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row" style="background-color: #869D05;color: #FFFFFF;">\n' +
      '          <div class="column">Custom Row</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-class="equal width">\n' +
      '      <h4 class="ui header">Automatic Column Count</h4>\n' +
      '      <p>The <a href="#equal-width"><code>equal width</code></a> variation will automatically divide column width evenly. This is useful with dynamic content where you do not know the column count in advance.</p>\n' +
      '      <div class="ui equal width grid">\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="equal width row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-class="centered">\n' +
      '      <h4 class="ui header">Centering Content</h4>\n' +
      '      <p>If a row does not take up all sixteen grid columns, you can use a <a href="#centered"><code>centered</code></a> variation to center the column contents inside the grid.\n' +
      '      </p>\n' +
      '      <div class="ui two column centered grid">\n' +
      '        <div class="column"/>\n' +
      '        <div class="four column centered row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="left floated right aligned, right floated left aligned, center aligned, sixteen wide">\n' +
      '      <h4 class="ui header">Significant Word Order</h4>\n' +
      '      <p>Grids include many variations for adjusting things like vertical or horizontal alignment, text alignment, or default gutter sizes.</p>\n' +
      '      <p>Some multi-word variations, like <a href="#floated"><code>left floated</code></a> or <a href="#text-alignment"><code>right aligned</code></a> are word-order dependent and require you to use adjacent class names.</p>\n' +
      '      <div class="ui right aligned grid">\n' +
      '        <div class="left floated right aligned six wide column">\n' +
      '          <div class="ui segment">\n' +
      '            Left floated right aligned column\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="right floated left aligned six wide column">\n' +
      '          <div class="ui segment">\n' +
      '            Right floated left aligned column\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="center aligned two column row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '            Center aligned row\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '            Center aligned row\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide column">\n' +
      '          <div class="ui segment">\n' +
      '            Right Aligned Grid\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Responsive Grids</h2>\n' +
      '    <div class="highlighted example" data-class="container">\n' +
      '      <h4 class="ui header">Containers</h4>\n' +
      '      <p>A <a href="/elements/container.html">container</a> can be used alongside a grid to provide a responsive, fixed width container for wrapping the contents of a page.</p>\n' +
      '      <div class="ui grid container">\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example">\n' +
      '      <h4 class="ui header">Stackable</h4>\n' +
      '      <p>A <a href="#stackable"><code>stackable grid</code></a> will automatically stack rows to a single columns on mobile devices</p>\n' +
      '      <div class="ui stackable four column grid">\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-class="mobile reversed">\n' +
      '      <h4 class="ui header">Reverse Order</h4>\n' +
      '      <p>Fomantic includes special <a href="#reversed"><code>reversed</code></a> variations that allow you to reverse the order of columns or rows by device</p>\n' +
      '      <div class="ui mobile reversed equal width grid">\n' +
      '        <div class="column">\n' +
      '          First\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Second\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Third\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example">\n' +
      '      <h4 class="ui header">Doubling</h4>\n' +
      '      <p>A <a href="#doubling"><code>doubling</code></a> grid will double column widths for each device jump.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="doubling eight column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="doubling six column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="doubling four column row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="highlighted example" data-class="computer only, six wide tablet eight wide computer" data-use-content="true">\n' +
      '      <h4 class="ui header">Manual Tweaks</h4>\n' +
      '      <p>Although design patterns like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> are useful at simplifying responsive styling, you can also manually tweak device presentation by specifying <a href="#device-width"><code>(x) wide device</code></a> or <a href="#device-visibility"><code>device only</code></a> columns or rows.\n' +
      '      </p><div class="ui centered grid">\n' +
      '        <div class="computer only row">\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '        <div class="six wide tablet eight wide computer column"/>\n' +
      '        <div class="six wide tablet eight wide computer column"/>\n' +
      '        <div class="six wide tablet eight wide computer column"/>\n' +
      '        <div class="six wide tablet eight wide computer column"/>\n' +
      '        <div class="six wide tablet eight wide computer column"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
