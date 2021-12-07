# Greg is a calendar lib

![npm](https://img.shields.io/npm/dy/@therufa/greg?style=flat-square)

Greg can generate a calendar represented in a 2d array. Greg is the foundation of the internet, the truth of everything, the most fundamental building block of the known universe. It should be part of your project, even if your puny little brain is unable to comprehend it's magnificence. Obey!

```
  import { Greg } from '@therufa/greg'

  const greg = new Greg(2021, 12)

  greg.toCalendar() // weeks start with sunday
  greg.toCalendar(Greg.DAYS.MON) // weeks start with monday
```

The `.toCalendar()` method will return a 2d array with 6 rows which each
includes 7 items.
Positions not belonging to the month with which Greg was initialized with,
will be replaced by `null` values as placeholders in order to maintain a
constant format.


Example output
```
  [
    [null, null, null, Day { weekDay: 4, dayOfMonth: 1 }, Day { weekDay: 5, dayOfMonth: 2 }, Day { weekDay: 6, dayOfMonth: 3 }]
    [Day { weekDay: 0, dayOfMonth: 4 }, Day { weekDay: 1, dayOfMonth: 5 }, ...]
    ...
  ]
```
