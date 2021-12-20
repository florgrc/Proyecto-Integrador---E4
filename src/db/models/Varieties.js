module.exports = (sequelize, DataTypes) => {
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
        tableName: "varieties",
        timestamps: false
    };

    const Varieties = sequelize.define (alias, cols, config);

    Varieties.assoaciate = function (models) {
        Varieties.hasmany(models.Products, {
            as: "productosVariedad",
            foreignKey: "variety_id"
        })
    }
    return Varieties;
}