import { Greg } from "../src/index";

describe("Greg tests", () => {
  let greg: Greg;

  beforeEach(() => {
    greg = new Greg(2021, 12, 7);
  });

  it("shoupld store year, month and day", () => {
    expect(greg.day).toBe(7);
    expect(greg.month).toBe(12);
    expect(greg.year).toBe(2021);
  });

  it("should return the correct day of the week", () => {
    const greg2 = new Greg(2020, 1);

    expect(greg.dow()).toBe(Greg.DAYS.TUE);
    expect(greg2.dow()).toBe(Greg.DAYS.THU);
  });

  it("should return all days for the correct weekday for the given month", () => {
    const month = greg.toMonth()

    expect(month).toHaveLength(31);
    expect(month[0]).toBe(Greg.DAYS.WED);
    expect(month[4]).toBe(Greg.DAYS.SUN);
  })

  it("should print a 6x7 array in calendar format", () => {
    const cal = greg.toCalendar();

    expect(cal).toHaveLength(6);
    expect(cal[0]).toStrictEqual([null, null, null, 3, 4, 5, 6]);
    expect(cal[5]).toStrictEqual([null, null, null, null, null, null, null]);
  })
});
