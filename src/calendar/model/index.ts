export type Year = {
  value: number
  months: Month[]
  isLeapYear: boolean
}

export type Month = {
  month: number
  year: number
  days: Day[];
}

export type Day = {
  day: number
  month: number
  year: number
  dayOfWeek: number
}

export const Day = (year = 2000, month = 0, day = 1): Day => toDay(new Date(year, month, day))

export type Week = Day[]

function* getDates(year: number, month: number) {
  var date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    yield date;
    date.setDate(date.getDate() + 1);
  }
}

export const toDay = (date: Date): Day => ({
  day: date.getDate(),
  dayOfWeek: date.getDay(),
  month: date.getMonth(),
  year: date.getFullYear()
})

function* map<A, B>(gen: Generator<A>, fn: (b: A) => B) {
  for (const item of gen) {
    yield fn(item)
  }
}

const getDays = (year: number, month: number) => (
  map(
    getDates(year, month),
    toDay
  )
)

export const Month = (year: number, month: number): Month => ({
  days: Array.from(getDays(year, month)),
  month: month,
  year
})

export const toMonth = (date: Date): Month => Month(date.getFullYear(), date.getMonth())

export const offsetMonth = ({ month, year }: Month, numMonths: number) => {
  const date = new Date(year, month, 1)
  date.setMonth(date.getMonth() + numMonths);
  return Month(date.getFullYear(), date.getMonth());
}

export const getPrevMonth = (month: Month) => offsetMonth(month, -1)

export const getNextMonth = (month: Month) => offsetMonth(month, 1)

export const getMonths = (year: number) => {
  let months: Month[] = []
  for (let i = 0; i < 12; i++) {
    months.push(Month(year, i))
  }
  return months
}

export const Year = (year: number): Year => ({
  value: year,
  isLeapYear: checkLeapYear(year),
  months: getMonths(year)
})

export const getNumDays = (year: Year): number => (
  year.months
    .reduce((agg, month) => agg + month.days.length, 0)
)

export const checkLeapYear = (year: number) => (
  (0 == year % 4) &&
  (0 != year % 100)
  || (0 == year % 400)
)

export const splitByWeeks = (days: Day[]): Day[][] => {

  const weeks: Day[][] = []
  let curWeek: Day[] = []
  for (const day of days) {
    curWeek.push(day)
    if (day.dayOfWeek === 6) {
      weeks.push(curWeek);
      curWeek = []
    }
  }
  if (curWeek.length > 0) {
    weeks.push(curWeek)
  }
  return weeks;
}

export const getWeeks = (month: Month) => {

  const days: Day[] = []

  if (month.days[0].dayOfWeek > 0) {
    const prev = getPrevMonth(month)
    const weeks = splitByWeeks(prev.days)
    const lastWeek = weeks[weeks.length - 1]
    days.push(...lastWeek);
  }

  days.push(...month.days)

  if (month.days[month.days.length - 1].dayOfWeek !== 6) {
    const next = getNextMonth(month)
    const weeks = splitByWeeks(next.days)
    const firstWeek = weeks[0]
    days.push(...firstWeek)
  }

  return splitByWeeks(days)
}

export const dayIsEq = (d1: Day, d2: Day) => (
  d1.day === d2.day &&
  d1.month === d2.month &&
  d1.year === d2.year
)