<template>
  <div>
    <FuiGrid display=computer reversed equalWidth>
      <FuiRow>
        <FuiColumn>
          Computer A Fourth
        </FuiColumn>
        <FuiColumn>
          Computer A Third
        </FuiColumn>
        <FuiColumn>
          Computer A Second
        </FuiColumn>
        <FuiColumn>
          Computer A First
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          Computer B Fourth
        </FuiColumn>
        <FuiColumn>
          Computer B Third
        </FuiColumn>
        <FuiColumn>
          Computer B Second
        </FuiColumn>
        <FuiColumn>
          Computer B First
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
    <FuiGrid display=tablet reversed equalWidth>
      <FuiColumn>
        Tablet Fourth
      </FuiColumn>
      <FuiColumn>
        Tablet Third
      </FuiColumn>
      <FuiColumn>
        Tablet Second
      </FuiColumn>
      <FuiColumn>
        Tablet First
      </FuiColumn>
    </FuiGrid>
    <FuiGrid display=mobile reversed equalWidth>
      <FuiColumn>
        Mobile Fourth
      </FuiColumn>
      <FuiColumn>
        Mobile Third
      </FuiColumn>
      <FuiColumn>
        Mobile Second
      </FuiColumn>
      <FuiColumn>
        Mobile First
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridReversed1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Reversed',
    description: 'A grid or row can specify that its columns should reverse order at different device sizes',
    model: '      <div class="ui computer reversed equal width grid">\n' +
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
      '      </div>\n',
  },
};
</script>
