export const theme = {
  header: {
    height: 40,
    toggleButtonSize: 30
  },
  footer: {
    height: 40
  },
  weeks: {
    fri: 'blue',
    sat: 'red',
    inactive: 'grey',
    selected: 'orange',
    hover: '#c66a6a77',
    inactiveFri: '#1f1f6d',
    inactiveSat: '#400707'
  },
  years: {
    bp: 260
  }
}

export type CalendarTheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends CalendarTheme { }
}