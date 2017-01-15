import {fromJS} from 'immutable';

function switchColor(state, color) {
  return Object.assign({}, state, {
    selectedColor: color
  })
}

function changeFrame(state, frame) {

}

function paintCell(state, color, cell) {
   return state.updateIn(['frames',cell[0],cell[2],cell[1]], oldColor => color).toJS()
}




export default function(state = {}, action) {
    switch (action.type) {
        case 'SWITCHCOLOR':
            return switchColor(state, action.newColor);
        case 'CHANGEFRAME':
            return changeFrame(state, action);
        case 'PAINTCELL':
            return paintCell(fromJS(state), state.selectedColor, action.cell);
        default:
            return state
    }
}
