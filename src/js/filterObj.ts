interface filter  {
  count: {start: 0, end: 0},
  year: { start: 1940, end: 2020}, 
  shape: {
    ball: false,
    bell: false,
    pinecone: false,
    snowflake: false,
    figurine: false,
  },
  color: {
    white: false,
    yellow: false,
    red: false,
    blue: false,
    green: false,
  },
  size: {
    big: false,
    medium: false,
    small: false
  }, 
  favorite: false,
  isChanged: false,
  lastChanged: '',
}