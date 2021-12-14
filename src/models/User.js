module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define (alias, cols, config);
    
    return Users;
}
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define (alias, cols, config);
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: dataTypes.VARCHAR,

        },
        lastname: {
            type: dataTypes.VARCHAR,

        },
        email: {
            type: dataTypes.VARCHAR,

        },
        password: {
            type: dataTypes.VARCHAR,

        },
        description: {
            type: dataTypes.TEXT,

        },
        image: {
            type: dataTypes.VARCHAR,

        },
        type_id: {
            type: dataTypes.INTEGER,

        },
        created_at: {
            type: dataTypes.DATETIME,

        },
        updated_at: {
            type: dataTypes.DATETIME,

        },
    };
    let config = {
        tableName: "users",
        timestamps: false // si no existen las columnas created@ y updated@
    };

    const Users = sequelize.define (alias, cols, config);


    return Users;
}