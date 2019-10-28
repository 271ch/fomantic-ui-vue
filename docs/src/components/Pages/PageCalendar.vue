<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Calendar
      <FuiHeader sub>
        Calendar examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleCalendarCalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarRange1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarInlinecalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarDatecalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarTimecalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarYearfirstcalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendar24hourformat1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarMonthandyearcalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarYearcalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarMinmaxdate1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarMinmaxdate2"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarDayfirstcalendar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarCustomformat1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarCenturyCalculationforshortyears1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarCenturyCalculationforshortyears2"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarCenturyCalculationforshortyears3"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarCenturyCalculationforshortyears4"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarSelectadjacentdays1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarLanguage1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarButton1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarDaysofWeek1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarSingleDates1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarEnableonlyspecificDates1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarEventDates1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarEventDates2"></ExampleWithSource>
    <ExampleWithSource example="ModuleCalendarInitializingacalendar1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'calendar', '');

export default {
  name: 'PageCalendar',
  components: {
    ExampleWithSource,
  },
};
</script>