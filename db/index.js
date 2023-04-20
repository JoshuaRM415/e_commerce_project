//database connection

// const { Client } = require('pg');

const {Pool, Client} = require('pg');

const pool = new Pool({
    //need to put thede into environment variables
    user:'my_user',
    host:'localhost',
    database: 'e_comm_db',
    password: 'root',
    port: 5432
});

function getAllPlants () {
    return new Promise(function(resolve,reject) {
        //Need to change from * to specific columns  
        pool.query('SELECT * FROM plants ORDER BY id ASC', (error,results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

function getPlant (id) {
    return new Promise(function(resolve,reject) {
        pool.query(`SELECT * FROM plants WHERE id = ${id} ORDER BY id ASC`, (error,results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

function createPlant (body) {
    return new Promise(function(resolve,reject) {
        const { id, name, image, description, price } = body;
        pool.query(`INSERT INTO plants (id, name, image, description, price) VALUES (${id, name, image, description, price}) RETURNING *`,(error,results) => {
            if (error) {
                reject(error);
            }
            resolve(`New plant has been added: ${results.rows[0]}`);
        })
        //pool.query('INSERT INTO plants (id, name, image, description, price) VALUES ($1,$2,$3,$4,$5) RETURNING id, name, image, description, price')
    })
}

function deletePlant () {
    return new Promise(function(resolve,reject) {
        const id = parseInt(req.params.id);
        pool.query(`DELETE FROM plants WHERE id = ${id} RETURNING *`,(error,results) => {
            if (error) {
                reject(error);
            }
            resolve(`plant deleted `)
        })
    })
}

module.exports = {
    getAllPlants,
    getPlant,
    createPlant,
    deletePlant
};