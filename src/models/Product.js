module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define (alias, cols, config);
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.VARCHAR,

        },
        description: {
            type: dataTypes.TEXT,

        },
        image: {
            type: dataTypes.VARCHAR,

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

        },
        created_at: {
            type: dataTypes.DATETIME,

        },
        updated_at: {
            type: dataTypes.DATETIME,

        },
    };
    let config = {
        tableName: "products",
        timestamps: false // si no existen las columnas created@ y updated@
    };

    const Product = sequelize.define (alias, cols, config);


    return Products;
}