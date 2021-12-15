module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define (alias, cols, config);
    
    return Types;
}
module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define (alias, cols, config);
    let alias = "Types";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.VARCHAR,

        },
    };
    let config = {
        tableName: "Types",
        timestamps: false
    };

    const Types = sequelize.define (alias, cols, config);


    return Types;
}