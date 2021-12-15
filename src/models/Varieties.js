module.exports = (sequelize, DataTypes) => {
    const Varieties = sequelize.define (alias, cols, config);
    
    return Varieties;
}
module.exports = (sequelize, DataTypes) => {
    const Varieties = sequelize.define (alias, cols, config);
    let alias = "Varieties";
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
        tableName: "Varieties",
        timestamps: false
    };

    const Varieties = sequelize.define (alias, cols, config);


    return Varieties;
}