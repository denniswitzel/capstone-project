import burgers from '../mocks/burger.json'
import kebabs from '../mocks/kebab.json'
import minced from '../mocks/minced.json'
import nuggets from '../mocks/nuggets.json'
import sausages from '../mocks/sausages.json'

export const burgerList = burgers.sort((a, b) => a.title.localeCompare(b.title))
export const kebabList = kebabs.sort((a, b) => a.title.localeCompare(b.title))
export const mincedList = minced.sort((a, b) => a.title.localeCompare(b.title))
export const nuggetsList = nuggets.sort((a, b) =>
  a.title.localeCompare(b.title)
)
export const sausagesList = sausages.sort((a, b) =>
  a.title.localeCompare(b.title)
)
