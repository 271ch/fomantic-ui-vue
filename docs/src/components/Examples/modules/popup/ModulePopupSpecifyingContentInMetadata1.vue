<template>
  <div>
      <div class="ui info icon ignored message">
        <i class="info icon"/>
        <div class="content">
          <div class="header">Specifying Content</div>
          <p>Popups can specify content in three ways:</p><p>
          </p><ul class="list">
            <li>Using HTML <code>title</code> attribute</li>
            <li>Using <code>data-content</code> attribute</li>
            <li>Using <code>data-html</code> for specific HTML</li>
            <li>Using the content property in the initialization of the popup</li>
          </ul>
          <p>Popups can also specify some other frequently used settings using metadata</p><p>
          </p><ul class="list">
            <li><code>data-variation</code>: the popup variation to use </li>
            <li><code>data-offset</code>: a pixel offset correction for popup</li>
            <li><code>data-position</code>: the side to position popup on</li>
          </ul>
        </div>
      </div>
      <div class="code" data-type="html">
        <i class="heart icon" title="Hello I am a popup"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSpecifyingContentInMetadata1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Usage',
    title2: 'Specifying Content In Metadata',
    description: '???',
    model: '      <div class="ui info icon ignored message">\n' +
      '        <i class="info icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Specifying Content</div>\n' +
      '          <p>Popups can specify content in three ways:</p><p>\n' +
      '          </p><ul class="list">\n' +
      '            <li>Using HTML <code>title</code> attribute</li>\n' +
      '            <li>Using <code>data-content</code> attribute</li>\n' +
      '            <li>Using <code>data-html</code> for specific HTML</li>\n' +
      '            <li>Using the content property in the initialization of the popup</li>\n' +
      '          </ul>\n' +
      '          <p>Popups can also specify some other frequently used settings using metadata</p><p>\n' +
      '          </p><ul class="list">\n' +
      '            <li><code>data-variation</code>: the popup variation to use </li>\n' +
      '            <li><code>data-offset</code>: a pixel offset correction for popup</li>\n' +
      '            <li><code>data-position</code>: the side to position popup on</li>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <i class="heart icon" title="Hello I am a popup"/>\n' +
      '      </div>\n',
  },
};
</script>
