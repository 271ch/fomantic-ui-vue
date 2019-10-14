<template>
  <div>
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="/images/avatar/small/jenny.jpg"/>
        </div>
        <div class="content">
          <div class="summary">
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            <div class="date">
              3 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewFeedDate2',
  info: {
    converted: false,
    elementType: 'views',
    element: 'feed',
    title1: 'Content',
    title2: 'Date',
    description: 'An event or an event summary can contain a date',
    model: '    <div class="ui feed">\n' +
      '      <div class="event">\n' +
      '        <div class="label">\n' +
      '          <img src="/images/avatar/small/jenny.jpg"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="summary">\n' +
      '            You added <a>Jenny Hess</a> to your <a>coworker</a> group.\n' +
      '            <div class="date">\n' +
      '              3 days ago\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
