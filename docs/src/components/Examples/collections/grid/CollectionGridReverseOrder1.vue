<template>
  <div>
    <FuiGrid display=mobile reversed equalWidth>
      <FuiColumn>
        First
      </FuiColumn>
      <FuiColumn>
        Second
      </FuiColumn>
      <FuiColumn>
        Third
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridReverseOrder1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Grids',
    title2: 'Reverse Order',
    description: 'Fomantic includes special',
    model: '      <div class="ui mobile reversed equal width grid">\n' +
      '        <div class="column">\n' +
      '          First\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Second\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          Third\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
