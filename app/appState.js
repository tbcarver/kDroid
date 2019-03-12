
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
        backgroundColor: "#000",
        borderBackgroundColor: "#000",
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        wallBackgroundColor: "#000",
        tileCounts: [],
        tileBackgroundColor: "#000"
    }
};


export { appState }