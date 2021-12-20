module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: dataTypes.STRING,

        },
        lastname: {
            type: dataTypes.STRING,

        },
        email: {
            type: dataTypes.STRING,

        },
        password: {
            type: dataTypes.STRING,

        },
        description: {
            type: dataTypes.TEXT,

        },
        image: {
            type: dataTypes.STRING,

        },
        type_id: {
            type: dataTypes.INTEGER,

        },
        created_at: {
            type: dataTypes.DATE,

        },
        updated_at: {
            type: dataTypes.DATE,

        },
    };
    let config = {
        tableName: "users",
        timestamps: false // si no existen las columnas created@ y updated@
    };

    const Users = sequelize.define (alias, cols, config);


    return Users;
}