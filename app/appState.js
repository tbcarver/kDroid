
var appState = {
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        backgroundColor: "#000",
        direction: "east"
    },
    world: {
        rowsCount: 0,
        columnsCount: 0,
        cellSize: 0,
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        tileCounts: [],
        tileBackgroundColor: "#000"
    }
};


export { appState }