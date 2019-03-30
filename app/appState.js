
var appState = {
    console: {
        enabled: true
    },
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        direction: "east"
    },
    world: {
        rowsCount: 3,
        columnsCount: 3,
        topWalls: {},
        leftWalls: {},
        tileCounts: [],
        maxCommandCount: 3500,
        currentCommandCount: 0
    }
};


export { appState }