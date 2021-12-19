const fs = require("fs");
const path = require('path');

const User = { // Este archivo se creó en automatico con sequelize y está linkeado a ../db/users.json. En el video figura como index.js 
    
    getData: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname,'../src/db/users.json'), "utf-8"));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
      
    },
    
    findByField: function (field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    }
}

module.exports = User 