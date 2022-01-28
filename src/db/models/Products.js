module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,

        },
        description: {
            type: dataTypes.TEXT,

        },
        image: {
            type: dataTypes.STRING,

        },
        classification_id: {
            type: dataTypes.INTEGER,

        },
        variety_id: {
            type: dataTypes.INTEGER,

        },
        price: {
            type: dataTypes.DECIMAL,

        },
        featured: {
            type: dataTypes.BOOLEAN,

        }
    };
    let config = {
        tableName: "products",
        timestamps: false // si no existen las columnas created@ y updated@
    };

    const Products = sequelize.define (alias, cols, config);
    // Asociar classification y varieties con productos
    Products.associate = function (models) {
        Products.belongsTo(models.Varieties, {
            as: "variety",
            foreignKey: "variety_id"
        })
        Products.belongsTo(models.Classifications, {
            as: "classification",
            foreignKey: "classification_id"
        })
    }

    return Products;
}