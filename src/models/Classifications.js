module.exports = (sequelize, DataTypes) => {
    const Classifications = sequelize.define (alias, cols, config);
    
    return Classifications;
}
module.exports = (sequelize, DataTypes) => {
    const Classifications = sequelize.define (alias, cols, config);
    let alias = "Classifications";
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
        tableName: "Classifications",
        timestamps: false
    };

    const Classifications = sequelize.define (alias, cols, config);


    return Classifications;
}