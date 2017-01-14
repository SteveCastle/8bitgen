const SWITCHCOLOR = 'SWITCHCOLOR';
const CHANGEFRAME = 'CHANGEFRAME'
const PAINTCELL = 'PAINTCELL'

export function switchColor(newColor) {
    return {
        type: SWITCHCOLOR,
        newColor
    }
}

export function changeFrame(newFrame) {
    return {
        type: CHANGEFRAME,
        newFrame
    }
}

export function paintCell(color, cell) {
    return {
        type: PAINTCELL,
        color,
        cell
    }
}
