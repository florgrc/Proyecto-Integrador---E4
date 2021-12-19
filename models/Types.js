module.exports = (sequelize, dataTypes) => {
    let alias = "Types";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,

        },
    };
    let config = {
        tableName: "types",
        timestamps: false
    };

    const Types = sequelize.define (alias, cols, config);

    Types.assoaciate = function (models) {
        Types.hasmany(models.Users, {
            as: "usuarios",
            foreignKey: "type_id"
        })
    }

    return Types;
}