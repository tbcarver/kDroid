
var appState = {
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        direction: "east"
    },
    world: {
        rowsCount: 0,
        columnsCount: 0,
        cellSize: 0,
        duration: 1000,
        topWalls: [],
        leftWalls: [],
        tileCounts: [],
        tileColor: '#000'
    }
};


export { appState }