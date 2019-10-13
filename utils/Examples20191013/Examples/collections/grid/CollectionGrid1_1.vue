<template>
  <div>
    <h2 class="ui dividing header">Types</h2>
    <div class="highlighted example">
      <h4 class="ui header">
        Grid
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes" target="_blank" class="ui teal label">Flexbox</a>
      </h4>
      <p>A basic grid</p>
      <div class="ui grid">
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
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
    <div class="example">
      <h4 class="ui header">
        Divided
        <span class="ui black label">Requires Rows</span>
      </h4>
      <p>A grid can have dividers between its columns</p>
      <div class="ui three column divided grid">
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">
        Vertically Divided
        <span class="ui black label">Requires Rows</span>
      </h4>
      <p>A grid can have dividers between rows</p>
      <div class="ui vertically divided grid">
        <div class="two column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="three column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">
        Celled
        <span class="ui black label">Requires Rows</span>
      </h4>
      <p>A grid can have rows divided into cells</p>
      <div class="ui celled grid">
        <div class="row">
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="thirteen wide column">
            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>
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
    <div class="example">
      <h4 class="ui header">
        Internally Celled
        <span class="ui black label">Requires Rows</span>
      </h4>
      <p>A grid can have rows divisions only between internal rows</p>
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
    <h2 class="ui dividing header">Content</h2>
    <div class="example" data-use-content="true" data-class="row">
      <h4 class="ui header">Rows</h4>
      <p>A row is a horizontal grouping of columns</p>
      <div class="ui three column grid">
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="column">
      <h4 class="ui header">Columns</h4>
      <p>Columns each contain gutters giving them equal spacing from other columns.</p>
      <div class="ui grid">
        <div class="eight wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="eight wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="eight wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="eight wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
    <h2 class="ui dividing header">Variations</h2>
    <div class="example" data-use-content="true">
      <h4 class="ui header">Floated</h4>
      <p>A column can sit flush against the left or right edge of a row</p>
      <div class="ui grid">
        <div class="left floated five wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="right floated five wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="wide">
      <h4 class="ui header">Column Width</h4>
      <p>A column can vary in width taking up more than a single grid column.</p>
      <div class="ui grid">
        <div class="four wide column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="nine wide column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="three wide column">
          <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="column count">
      <h4 class="ui header">Column Count</h4>
      <p>A grid can have a different number of columns per row</p>
      <div class="ui grid">
        <div class="three column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="four column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="five column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true">
      <h4 class="ui header">
        Equal Width
      </h4>
      <p>A grid can automatically resize all elements to split the available width evenly</p>
      <div class="ui equal width grid">
        <div class="column">
          <div class="ui segment">
            1
          </div>
        </div>
        <div class="eight wide column">
          <div class="ui segment">
            2
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            3
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui equal width grid">
        <div class="row">
          <div class="column">
            <div class="ui segment">1</div>
          </div>
          <div class="column">
            <div class="ui segment">2</div>
          </div>
          <div class="column">
            <div class="ui segment">3</div>
          </div>
          <div class="column">
            <div class="ui segment">4</div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui segment">1</div>
          </div>
          <div class="column">
            <div class="ui segment">2</div>
          </div>
          <div class="column">
            <div class="ui segment">3</div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui segment">1</div>
          </div>
          <div class="column">
            <div class="ui segment">2</div>
          </div>
        </div>
      </div>
    </div>
    <div class="stretched example" data-use-content="true">
      <h4 class="ui header">
        Stretched
      </h4>
      <p>A row can stretch its contents to take up the entire column height</p>
      <div class="ui three column divided grid">
        <div class="stretched row">
          <div class="column">
            <div class="ui segment">
              1
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
            <div class="ui segment">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui equal width grid">
        <div class="stretched row">
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
          <div class="six wide column">
            <div class="ui segment">
              <img class="ui image" src="/images/wireframe/image.png"/>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
          <div class="six wide column">
            <div class="ui segment">
              <img class="ui image" src="/images/wireframe/image.png"/>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-class="vertically padded, horizontally padded, padded">
      <h4 class="ui header">Padded</h4>
      <p>A grid can preserve its vertical and horizontal gutters on first and last columns</p>
      <p>The following grid has vertical and horizontal gutters</p>
      <div class="ui divider"/>
      <div class="ui two column padded grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
    <div class="another example">
      <p>The following grid has vertical gutters.</p>
      <div class="ui divider"/>
      <div class="ui two column vertically padded grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
    <div class="another example">
      <p>The following grid has horizontal gutters</p>
      <div class="ui divider"/>
      <div class="ui two column horizontally padded grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
    <div class="example" data-class="very compact, compact">
      <h4 class="ui header">Compact</h4>
      <p>A grid can appear compact with no or very little padding</p>
      <p>The following grid is compact.</p>
      <div class="ui divider"/>
      <div class="ui two column compact internally celled grid">
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <p>The following grid is very compact.</p>
      <div class="ui divider"/>
      <div class="ui two column very compact internally celled grid">
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">Relaxed</h4>
      <p>A grid can increase its gutters to allow for more negative space</p>
      <div class="ui four column relaxed grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui four column very relaxed grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true">
      <h4 class="ui header">Colored</h4>
      <p>A row or column can be colored</p>
      <div class="ui five column padded grid">
        <div class="red column">Red</div>
        <div class="orange column">Orange</div>
        <div class="yellow column">Yellow</div>
        <div class="olive column">Olive</div>
        <div class="green column">Green</div>
        <div class="teal column">Teal</div>
        <div class="blue column">Blue</div>
        <div class="violet column">Violet</div>
        <div class="purple column">Purple</div>
        <div class="pink column">Pink</div>
        <div class="brown column">Brown</div>
        <div class="grey column">Grey</div>
        <div class="black column">Black</div>
      </div>
    </div>
    <div class="another example">
      <div class="ui padded grid">
        <div class="red row">
          <div class="column">Red</div>
        </div>
        <div class="orange row">
          <div class="column">Orange</div>
        </div>
        <div class="yellow row">
          <div class="column">Yellow</div>
        </div>
        <div class="olive row">
          <div class="column">Olive</div>
        </div>
        <div class="green row">
          <div class="column">Green</div>
        </div>
        <div class="teal row">
          <div class="column">Teal</div>
        </div>
        <div class="blue row">
          <div class="column">Blue</div>
        </div>
        <div class="violet row">
          <div class="column">Violet</div>
        </div>
        <div class="purple row">
          <div class="column">Purple</div>
        </div>
        <div class="pink row">
          <div class="column">Pink</div>
        </div>
        <div class="brown row">
          <div class="column">Brown</div>
        </div>
        <div class="grey row">
          <div class="column">Grey</div>
        </div>
        <div class="black row">
          <div class="column">Black</div>
        </div>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">Centered</h4>
      <p>A grid can have its columns centered</p>
      <div class="ui two column centered grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="four column centered row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="four column row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true">
      <h4 class="ui header">Text Alignment</h4>
      <p>A grid, row, or column can specify its text alignment</p>
      <div class="ui center aligned three column grid">
        <div class="row">
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Cats
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Dogs
              </div>
              <div class="item">
                Poodle
              </div>
              <div class="item">
                Cockerspaniel
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Monkeys
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui center aligned grid">
        <div class="three column row">
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Cats
              </div>
            </div>
          </div>
          <div class="left aligned column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Dogs
              </div>
              <div class="item">
                Poodle
              </div>
              <div class="item">
                Cockerspaniel
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Monkeys
              </div>
            </div>
          </div>
        </div>
        <div class="justified row">
          <div class="column">
            <p>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui right aligned three column grid">
        <div class="row">
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Cats
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Dogs
              </div>
              <div class="item">
                Poodle
              </div>
              <div class="item">
                Cockerspaniel
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui vertical fluid menu">
              <div class="header item">
                Monkeys
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true">
      <h4 class="ui header">Vertical Alignment</h4>
      <p>A grid, row, or column can specify its vertical alignment to have all its columns vertically centered.</p>
      <div class="ui middle aligned four column centered grid">
        <div class="row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui four column centered grid">
        <div class="top aligned row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="middle aligned row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="bottom aligned row">
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
    <h2 class="ui dividing header">Responsive Variations</h2>
    <div class="example">
      <h4 class="ui header">Doubling</h4>
      <p>A grid can double its column width on tablet and mobile sizes</p>
      <div class="ui text message info ignore">
        A grid will round its columns to the closest reasonable value when doubling, for example a <code>five column grid</code> will use <code>2 mobile, 3 tablet, 5 desktop</code>. To force 1 column on mobile you can add <a href="#stackable"><code>stackable</code></a>
      </div>
      <div class="five column doubling ui grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
    <div class="example">
      <h4 class="ui header">Stackable</h4>
      <p>A grid can have its columns stack on-top of each other after reaching mobile breakpoints</p>
      <div class="ui text message info ignore">
        To see a grid stack, try resizing your browser to a small width
      </div>
      <div class="two column stackable ui grid">
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="computer reversed, tablet reversed, mobile reversed, computer vertically reversed, mobile vertically reversed, tablet vertically reversed">
      <h4 class="ui header">Reversed</h4>
      <p>A grid or row can specify that its columns should reverse order at different device sizes</p>
      <div class="ui ignored info message message">Reversed grids are compatible with <code>divided</code> grids and other complex grid types.</div>
      <div class="ui computer reversed equal width grid">
        <div class="row">
          <div class="column">
            Computer A Fourth
          </div>
          <div class="column">
            Computer A Third
          </div>
          <div class="column">
            Computer A Second
          </div>
          <div class="column">
            Computer A First
          </div>
        </div>
        <div class="row">
          <div class="column">
            Computer B Fourth
          </div>
          <div class="column">
            Computer B Third
          </div>
          <div class="column">
            Computer B Second
          </div>
          <div class="column">
            Computer B First
          </div>
        </div>
      </div>
      <div class="ui tablet reversed equal width grid">
        <div class="column">
          Tablet Fourth
        </div>
        <div class="column">
          Tablet Third
        </div>
        <div class="column">
          Tablet Second
        </div>
        <div class="column">
          Tablet First
        </div>
      </div>
      <div class="ui mobile reversed equal width grid">
        <div class="column">
          Mobile Fourth
        </div>
        <div class="column">
          Mobile Third
        </div>
        <div class="column">
          Mobile Second
        </div>
        <div class="column">
          Mobile First
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui computer vertically reversed grid">
        <div class="row">
          <div class="column">Computer Row 4</div>
        </div>
        <div class="row">
          <div class="column">Computer Row 3</div>
        </div>
        <div class="row">
          <div class="column">Computer Row 2</div>
        </div>
        <div class="row">
          <div class="column">Computer Row 1</div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui tablet vertically reversed grid">
        <div class="row">
          <div class="column">Tablet Row 4</div>
        </div>
        <div class="row">
          <div class="column">Tablet Row 3</div>
        </div>
        <div class="row">
          <div class="column">Tablet Row 2</div>
        </div>
        <div class="row">
          <div class="column">Tablet Row 1</div>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui mobile vertically reversed grid">
        <div class="row">
          <div class="column">Mobile Row 4</div>
        </div>
        <div class="row">
          <div class="column">Mobile Row 3</div>
        </div>
        <div class="row">
          <div class="column">Mobile Row 2</div>
        </div>
        <div class="row">
          <div class="column">Mobile Row 1</div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true" data-class="widescreen only, large screen only, computer only, tablet only, mobile only">
      <h4 class="ui header">Device Visibility</h4>
      <p>A columns or row can appear only for a specific device, or screen sizes</p>
      <div class="ui text message info ignore">
        See <a href="/elements/container.html">container documentation</a> for information on breakpoint calculations
      </div>
      <div class="ui grid">
        <div class="two column large screen only row">
          <div class="column">
            <div class="ui segment">
              Large Screen
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Large Screen
            </div>
          </div>
        </div>
        <div class="two column widescreen only row">
          <div class="column">
            <div class="ui segment">
              Widescreen
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Widescreen
            </div>
          </div>
        </div>
        <div class="two column mobile only row">
          <div class="column">
            <div class="ui segment">
              Mobile
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Mobile
            </div>
          </div>
        </div>
        <div class="three column row">
          <div class="computer only column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="tablet mobile only column">
            <div class="ui segment">
              Tablet and Mobile
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              All Sizes
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              All Sizes
            </div>
          </div>
        </div>
        <div class="four column computer only row">
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
        </div>
        <div class="three column tablet only row">
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="example" data-use-content="true">
      <h4 class="ui header">Responsive Width</h4>
      <p>A column can specify a width for a specific device</p>
      <div class="ui ignored info message">
        <p>It's recommended to use a responsive pattern like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary.</p>
      </div>
      <div class="ui grid">
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="sixteen wide mobile eight wide tablet four wide computer column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
      </div>
    </div>
    <div class="another example">
      <div class="ui grid">
        <div class="four wide two wide large screen one wide widescreen column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="four wide two wide large screen one wide widescreen column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="four wide two wide large screen one wide widescreen column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
        <div class="four wide two wide large screen one wide widescreen column">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGrid1_1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'grid',
      title1: '???',
      title2: '???',
      description: '???',
      model: '    <h2 class="ui dividing header">Types</h2>\n' +
      '    <div class="highlighted example">\n' +
      '      <h4 class="ui header">\n' +
      '        Grid\n' +
      '        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes" target="_blank" class="ui teal label">Flexbox</a>\n' +
      '      </h4>\n' +
      '      <p>A basic grid</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">\n' +
      '        Divided\n' +
      '        <span class="ui black label">Requires Rows</span>\n' +
      '      </h4>\n' +
      '      <p>A grid can have dividers between its columns</p>\n' +
      '      <div class="ui three column divided grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">\n' +
      '        Vertically Divided\n' +
      '        <span class="ui black label">Requires Rows</span>\n' +
      '      </h4>\n' +
      '      <p>A grid can have dividers between rows</p>\n' +
      '      <div class="ui vertically divided grid">\n' +
      '        <div class="two column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">\n' +
      '        Celled\n' +
      '        <span class="ui black label">Requires Rows</span>\n' +
      '      </h4>\n' +
      '      <p>A grid can have rows divided into cells</p>\n' +
      '      <div class="ui celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="thirteen wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>\n' +
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
      '    <div class="example">\n' +
      '      <h4 class="ui header">\n' +
      '        Internally Celled\n' +
      '        <span class="ui black label">Requires Rows</span>\n' +
      '      </h4>\n' +
      '      <p>A grid can have rows divisions only between internal rows</p>\n' +
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
      '    <h2 class="ui dividing header">Content</h2>\n' +
      '    <div class="example" data-use-content="true" data-class="row">\n' +
      '      <h4 class="ui header">Rows</h4>\n' +
      '      <p>A row is a horizontal grouping of columns</p>\n' +
      '      <div class="ui three column grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="column">\n' +
      '      <h4 class="ui header">Columns</h4>\n' +
      '      <p>Columns each contain gutters giving them equal spacing from other columns.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="eight wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Variations</h2>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">Floated</h4>\n' +
      '      <p>A column can sit flush against the left or right edge of a row</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="left floated five wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="right floated five wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="wide">\n' +
      '      <h4 class="ui header">Column Width</h4>\n' +
      '      <p>A column can vary in width taking up more than a single grid column.</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="nine wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="three wide column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="column count">\n' +
      '      <h4 class="ui header">Column Count</h4>\n' +
      '      <p>A grid can have a different number of columns per row</p>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="three column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="four column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="five column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">\n' +
      '        Equal Width\n' +
      '      </h4>\n' +
      '      <p>A grid can automatically resize all elements to split the available width evenly</p>\n' +
      '      <div class="ui equal width grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            1\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <div class="ui segment">\n' +
      '            2\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            3\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui equal width grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">3</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">4</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">3</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="stretched example" data-use-content="true">\n' +
      '      <h4 class="ui header">\n' +
      '        Stretched\n' +
      '      </h4>\n' +
      '      <p>A row can stretch its contents to take up the entire column height</p>\n' +
      '      <div class="ui three column divided grid">\n' +
      '        <div class="stretched row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              3\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui equal width grid">\n' +
      '        <div class="stretched row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="six wide column">\n' +
      '            <div class="ui segment">\n' +
      '              <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="six wide column">\n' +
      '            <div class="ui segment">\n' +
      '              <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-class="vertically padded, horizontally padded, padded">\n' +
      '      <h4 class="ui header">Padded</h4>\n' +
      '      <p>A grid can preserve its vertical and horizontal gutters on first and last columns</p>\n' +
      '      <p>The following grid has vertical and horizontal gutters</p>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui two column padded grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <p>The following grid has vertical gutters.</p>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui two column vertically padded grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <p>The following grid has horizontal gutters</p>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui two column horizontally padded grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-class="very compact, compact">\n' +
      '      <h4 class="ui header">Compact</h4>\n' +
      '      <p>A grid can appear compact with no or very little padding</p>\n' +
      '      <p>The following grid is compact.</p>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui two column compact internally celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <p>The following grid is very compact.</p>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui two column very compact internally celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Relaxed</h4>\n' +
      '      <p>A grid can increase its gutters to allow for more negative space</p>\n' +
      '      <div class="ui four column relaxed grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui four column very relaxed grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">Colored</h4>\n' +
      '      <p>A row or column can be colored</p>\n' +
      '      <div class="ui five column padded grid">\n' +
      '        <div class="red column">Red</div>\n' +
      '        <div class="orange column">Orange</div>\n' +
      '        <div class="yellow column">Yellow</div>\n' +
      '        <div class="olive column">Olive</div>\n' +
      '        <div class="green column">Green</div>\n' +
      '        <div class="teal column">Teal</div>\n' +
      '        <div class="blue column">Blue</div>\n' +
      '        <div class="violet column">Violet</div>\n' +
      '        <div class="purple column">Purple</div>\n' +
      '        <div class="pink column">Pink</div>\n' +
      '        <div class="brown column">Brown</div>\n' +
      '        <div class="grey column">Grey</div>\n' +
      '        <div class="black column">Black</div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui padded grid">\n' +
      '        <div class="red row">\n' +
      '          <div class="column">Red</div>\n' +
      '        </div>\n' +
      '        <div class="orange row">\n' +
      '          <div class="column">Orange</div>\n' +
      '        </div>\n' +
      '        <div class="yellow row">\n' +
      '          <div class="column">Yellow</div>\n' +
      '        </div>\n' +
      '        <div class="olive row">\n' +
      '          <div class="column">Olive</div>\n' +
      '        </div>\n' +
      '        <div class="green row">\n' +
      '          <div class="column">Green</div>\n' +
      '        </div>\n' +
      '        <div class="teal row">\n' +
      '          <div class="column">Teal</div>\n' +
      '        </div>\n' +
      '        <div class="blue row">\n' +
      '          <div class="column">Blue</div>\n' +
      '        </div>\n' +
      '        <div class="violet row">\n' +
      '          <div class="column">Violet</div>\n' +
      '        </div>\n' +
      '        <div class="purple row">\n' +
      '          <div class="column">Purple</div>\n' +
      '        </div>\n' +
      '        <div class="pink row">\n' +
      '          <div class="column">Pink</div>\n' +
      '        </div>\n' +
      '        <div class="brown row">\n' +
      '          <div class="column">Brown</div>\n' +
      '        </div>\n' +
      '        <div class="grey row">\n' +
      '          <div class="column">Grey</div>\n' +
      '        </div>\n' +
      '        <div class="black row">\n' +
      '          <div class="column">Black</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Centered</h4>\n' +
      '      <p>A grid can have its columns centered</p>\n' +
      '      <div class="ui two column centered grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="four column centered row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="four column row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">Text Alignment</h4>\n' +
      '      <p>A grid, row, or column can specify its text alignment</p>\n' +
      '      <div class="ui center aligned three column grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Cats\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Dogs\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Poodle\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Cockerspaniel\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Monkeys\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui center aligned grid">\n' +
      '        <div class="three column row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Cats\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="left aligned column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Dogs\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Poodle\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Cockerspaniel\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Monkeys\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="justified row">\n' +
      '          <div class="column">\n' +
      '            <p>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui right aligned three column grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Cats\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Dogs\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Poodle\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Cockerspaniel\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui vertical fluid menu">\n' +
      '              <div class="header item">\n' +
      '                Monkeys\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">Vertical Alignment</h4>\n' +
      '      <p>A grid, row, or column can specify its vertical alignment to have all its columns vertically centered.</p>\n' +
      '      <div class="ui middle aligned four column centered grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui four column centered grid">\n' +
      '        <div class="top aligned row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="middle aligned row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="bottom aligned row">\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Responsive Variations</h2>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Doubling</h4>\n' +
      '      <p>A grid can double its column width on tablet and mobile sizes</p>\n' +
      '      <div class="ui text message info ignore">\n' +
      '        A grid will round its columns to the closest reasonable value when doubling, for example a <code>five column grid</code> will use <code>2 mobile, 3 tablet, 5 desktop</code>. To force 1 column on mobile you can add <a href="#stackable"><code>stackable</code></a>\n' +
      '      </div>\n' +
      '      <div class="five column doubling ui grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Stackable</h4>\n' +
      '      <p>A grid can have its columns stack on-top of each other after reaching mobile breakpoints</p>\n' +
      '      <div class="ui text message info ignore">\n' +
      '        To see a grid stack, try resizing your browser to a small width\n' +
      '      </div>\n' +
      '      <div class="two column stackable ui grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="computer reversed, tablet reversed, mobile reversed, computer vertically reversed, mobile vertically reversed, tablet vertically reversed">\n' +
      '      <h4 class="ui header">Reversed</h4>\n' +
      '      <p>A grid or row can specify that its columns should reverse order at different device sizes</p>\n' +
      '      <div class="ui ignored info message message">Reversed grids are compatible with <code>divided</code> grids and other complex grid types.</div>\n' +
      '      <div class="ui computer reversed equal width grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            Computer A Fourth\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer A Third\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer A Second\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer A First\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            Computer B Fourth\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer B Third\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer B Second\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            Computer B First\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui tablet reversed equal width grid">\n' +
      '        <div class="column">\n' +
      '          Tablet Fourth\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Tablet Third\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Tablet Second\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Tablet First\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui mobile reversed equal width grid">\n' +
      '        <div class="column">\n' +
      '          Mobile Fourth\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Mobile Third\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Mobile Second\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Mobile First\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui computer vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui tablet vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui mobile vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true" data-class="widescreen only, large screen only, computer only, tablet only, mobile only">\n' +
      '      <h4 class="ui header">Device Visibility</h4>\n' +
      '      <p>A columns or row can appear only for a specific device, or screen sizes</p>\n' +
      '      <div class="ui text message info ignore">\n' +
      '        See <a href="/elements/container.html">container documentation</a> for information on breakpoint calculations\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="two column large screen only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Large Screen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Large Screen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="two column widescreen only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Widescreen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Widescreen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="two column mobile only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column row">\n' +
      '          <div class="computer only column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="tablet mobile only column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet and Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              All Sizes\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              All Sizes\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="four column computer only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column tablet only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="example" data-use-content="true">\n' +
      '      <h4 class="ui header">Responsive Width</h4>\n' +
      '      <p>A column can specify a width for a specific device</p>\n' +
      '      <div class="ui ignored info message">\n' +
      '        <p>It\'s recommended to use a responsive pattern like <a href="#doubling"><code>doubling</code></a> or <a href="#stackable"><code>stackable</code></a> to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary.</p>\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="another example">\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
