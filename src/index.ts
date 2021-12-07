const DAYS = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

enum FirstDayOfWeek {
  SUN = DAYS.SUN,
  MON = DAYS.MON,
}

export class Day {
  readonly weekDay: number;
  readonly dayOfMonth: number;

  constructor(weekDay: number, dayOfMonth: number) {
    this.weekDay = weekDay;
    this.dayOfMonth = dayOfMonth;
  }

  static toDay(weekDay: number, dayOfMonth: number) {
    return new Day(weekDay, dayOfMonth);
  }
}

export class Greg {
  static readonly DAYS: typeof DAYS = DAYS;

  readonly year: number;
  readonly month: number;
  readonly day: number;

  constructor(year: number, month: number, day?: number) {
    this.year = year;
    this.month = month;
    this.day = day || 1;
  }

  get isLeapYear() {
    return (
      (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0
    );
  }

  get daysInMonth() {
    return this.month === 2
      ? 28 + Number(this.isLeapYear)
      : 31 - (((this.month - 1) % 7) % 2);
  }

  /**
   * Returns day of week based on
   * https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week#Sakamoto's_methods
   *
   * @returns {number}
   */
  dow(day: number = this.day): number {
    const t: number[] = [
      DAYS.SUN,
      DAYS.WED,
      DAYS.TUE,
      DAYS.FRI,
      DAYS.SUN,
      DAYS.WED,
      DAYS.FRI,
      DAYS.MON,
      DAYS.THU,
      DAYS.SAT,
      DAYS.TUE,
      DAYS.THU,
    ];

    const y = this.year - (this.month < 3 ? 1 : 0);

    return Math.round(
      (y + y / 4 - y / 100 + y / 400 + t[this.month - 1] + day) % 7
    );
  }

  toMonth() {
    const monthArray = Array(this.daysInMonth)
      .fill(0)
      .map((_, day) => this.dow(day + 1));

    return monthArray;
  }

  toCalendar(fdow: FirstDayOfWeek = DAYS.SUN) {
    if (Object.values(FirstDayOfWeek).includes(fdow) === false) {
      throw new Error("Invalid first day of week");
    }

    const daysOfMonth = this.toMonth();
    const offset = 7 - (1 + fdow) - daysOfMonth[0];
    const toDayOffset = (day: number, idx: number) => new Day(day, idx + 1);
    const month = [
      ...Array(offset).fill(null),
      ...daysOfMonth.map(toDayOffset),
      ...Array(10).fill(null), // placeholder
    ];

    return Array(6)
      .fill(0)
      .map((_, row) => month.slice(row * 7, (row + 1) * 7));
  }
}

export default Greg;
