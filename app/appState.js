
var appState = {
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        backgroundColor: "#fff",
        direction: "east"
    },
    world: {
        rowsCount: 0,
        columnsCount: 0,
        cellSize: 0,
        backgroundColor: "#fff",
        borderBackgroundColor: "#fff",
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        wallBackgroundColor: "#fff",
        tileCounts: [],
        tileColor: "#fff",
        tileBackgroundColor: "#fff"
    }
};


export { appState }