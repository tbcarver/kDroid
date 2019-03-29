
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
        rowsCount: 0,
        columnsCount: 0,
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        tileCounts: [],
        maxCommandCount: 3500,
        currentCommandCount: 0
    }
};


export { appState }