"use strict";

const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

const User = require('./../../models/User');
const {settings} = require('./../../settings');

const user0Id = new ObjectId();
const user1Id = new ObjectId();
const adminId = new ObjectId();

const users = [{
    _id: user0Id,
    username: 'user0',
    name: 'user',
    surname: 'zero',
    email: 'user0@example.com',
    password: 'longpassword',
    privilege: 'hr',
    pin: '1234',
    rfidTag: '1'
},{
    _id: user1Id,
    username: 'user1',
    name: 'user',
    surname: 'one',
    email: 'user1@example.com',
    password: 'longlongpassword',
    privilege: 'hr',
    pin: '6578',
    rfidTag: '2'
},{
    _id: adminId,
    username: 'admin',
    name: 'Adminio',
    surname: 'Surminio',
    email: 'admin@expample.com',
    password: 'adminpasswordislongest',
    privilege: 'admin',
    pin: '1337',
    rfidTag: '1377'
}];

const populateUsers = (done) => {
    User.remove({})
        .then(() => {
            var userOnePromise = User.create(users[0]);
            var userTwoPromise = User.create(users[1]);
            var adminUserPromise = User.create(users[2]);
            return Promise.all([userOnePromise, userTwoPromise, adminUserPromise]);
        })
        .then(() => done())
};



module.exports = {users, populateUsers};