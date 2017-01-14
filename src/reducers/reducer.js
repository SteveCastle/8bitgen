function switchColor(state, color) {

}

function changeFrame(state, frame) {

}

function paintCell(state, cell, color) {

}




export default function(state = {}, action) {
    switch (action.type) {
        case 'SWITCHCOLOR':
            return switchColor(state, action);
        case 'CHANGEFRAME':
            return changeFrame(state, action);
        case 'PAINTCELL':
            return paintCell(state, action);
        default:
            return state
    }
}
