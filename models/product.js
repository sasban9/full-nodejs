// const products = [];
// const fs = require('fs');
// const path = require('path');
const db = require('../util/database');

const Cart = require('./cart');

// const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {

    }

    static deleteById(id) {

    }
 
    static fetchAll() {
      return db.execute('SELECT * FROM products');
    }

    static findById(id) {

    }
};