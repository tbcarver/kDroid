
var appState = {
    currentCommandCount: 0,
    maxCommandCount: 3500,
    console: {
        enabled: true,
        answers: []
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
        loadedTileCounts: [],
        tileCounts: []
    }
};


export { appState }