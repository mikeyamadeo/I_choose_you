import { starters } from './pokemon'

const Store = {
  getStarters
}

export default Store
/////////////////////////////////////////
//

function getStarters(id) {
  return starters
}

function _arrayToMap(array) {
  let map = {}

  array.forEach(item => {
    map[item._id] = item
  })

  return map
}

