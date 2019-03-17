
var appState = {
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        iconName: "arrow-alt-circle-right",
        backgroundColor: "#fff",
        direction: "east"
    },
    world: {
        rowsCount: 0,
        columnsCount: 0,
        backgroundColor: "#fff",
        borderBackgroundColor: "#fff",
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        wallBackgroundColor: "#fff",
        tileCounts: [],
        tileColor: "#fff",
        tileBackgroundColor: "#fff",
        messageBoxBackgroundColor: "#fff",
        maxCommandCount: 3500,
        currentCommandCount: 0
    }
};


export { appState }