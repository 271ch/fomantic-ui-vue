<template>
  <div>
    <FuiList aligned=middle divided>
      <FuiItem>
        <FuiContent floated=right>
          <FuiButton tag=div>Add</FuiButton>
        </FuiContent>
        <FuiImage src="/images/avatar2/small/lena.png" avatar></FuiImage>
        <FuiContent>Lena</FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiContent floated=right>
          <FuiButton tag=div>Add</FuiButton>
        </FuiContent>
        <FuiImage src="/images/avatar2/small/lindsay.png" avatar></FuiImage>
        <FuiContent>Lindsay</FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiContent floated=right>
          <FuiButton tag=div>Add</FuiButton>
        </FuiContent>
        <FuiImage src="/images/avatar2/small/mark.png" avatar></FuiImage>
        <FuiContent>Mark</FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiContent floated=right>
          <FuiButton tag=div>Add</FuiButton>
        </FuiContent>
        <FuiImage src="/images/avatar2/small/molly.png" avatar></FuiImage>
        <FuiContent>Molly</FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListFloated1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content Variations',
    title2: 'Floated',
    description: 'An list, or an element inside a list can be floated left or right',
    model: '    <div class="ui middle aligned divided list">\n' +
      '      <div class="item">\n' +
      '        <div class="right floated content">\n' +
      '          <div class="ui button">Add</div>\n' +
      '        </div>\n' +
      '        <img src="/images/avatar2/small/lena.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          Lena\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="right floated content">\n' +
      '          <div class="ui button">Add</div>\n' +
      '        </div>\n' +
      '        <img src="/images/avatar2/small/lindsay.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          Lindsay\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="right floated content">\n' +
      '          <div class="ui button">Add</div>\n' +
      '        </div>\n' +
      '        <img src="/images/avatar2/small/mark.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          Mark\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="right floated content">\n' +
      '          <div class="ui button">Add</div>\n' +
      '        </div>\n' +
      '        <img src="/images/avatar2/small/molly.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          Molly\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
