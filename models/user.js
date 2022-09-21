"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../helpers/config");

class User{
    static async authenticate(id, password){
        const result = await db.query(
            `SELECT id,
                    password,
                    first_name,
                    last_name,
                    email,
                    status
            FROM users
            WHERE id = $1`,
            [id],

        );
        const user = result.rows[0];
        if(user){
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid){
                delete user.password;
                return user;
            }
        }
        const err = new Error("Invalid password");
        err.status = 401;
        throw err;
    }

    static async register({id, first_name, last_name, email, password, status}){

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const result = await db.query(
            `INSERT INTO users
            (id, first_name, last_name, email, password, status)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, first_name, last_name, email, status`,
            [id, first_name, last_name, email, hashedPassword, status],
        );
        const user = result.rows[0];
        return user;
    }

    static async findAll(){
        const result = await db.query(
            `SELECT id, first_name, last_name, email, status
            FROM users
            ORDER BY id`,
        );
        return result.rows;
    }

    static async findOne(id){
        const result = await db.query(
            `SELECT id, first_name, last_name, email, status
            FROM users
            WHERE id = $1`,
            [id],
        );
        const user = result.rows[0];
        if(!user){
            const err = new Error(`There exists no user`);
            err.status = 404;
            throw err;
        }
        return user;
    }

    static async update(id, data){
        if(data.password){
            data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR); 
        }
        const result = await db.query(
            `UPDATE users
            SET 
                first_name = $1,
                last_name = $2,
                email = $3,
                password = $4,
                status = $5
            WHERE id = $6
            RETURNING first_name, last_name, email, status`,
            [data.first_name, data.last_name, data.email, data.password, data.status, id],
        );
        let user = result.rows[0];
        if(!user){
            const err = new Error(`There exists no user`);
            err.status = 404;
            throw err;
        }
        return user;
    }

    static async remove(id){
        let result = await db.query(
            `DELETE FROM users
            WHERE id = $1
            RETURNING id`,
            [id],
        );
        if(result.rows.length === 0){
            const err = new Error(`There exists no user`);
            err.status = 404;
            throw err;
        }
    }

}

module.exports = User;