module.exports = (sequelize, dataTypes) => {
    let alias = "Classifications";
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
        tableName: "classifications",
        timestamps: false
    };

    const Classifications = sequelize.define (alias, cols, config);

    Classifications.assoaciate = function (models) {
        Classifications.hasmany(models.Products, {
            as: "productosClasificacion",
            foreignKey: "classification_id"
        })
    }

    return Classifications;
}