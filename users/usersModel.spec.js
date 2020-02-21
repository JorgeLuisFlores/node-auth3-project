// const db = require('../data/dbConfig.js');
// const Users = require('./usersModel.js');

// describe('users model', () => {
//     describe('insert', () => {
//         it('should insert the provided users into the db', async () => {
//             await Users.insert({
//                 username: "testing test",
//                 password: "testing test",
//                 department: "this is for the test database"
//             });
//             await Users.insert({
//                 username: "testing test2",
//                 password: "testing test2",
//                 department: "this is for the test database2"
//             });

//             const users = await db('users');
//             expect(users).toHaveLength(2);
//         })

//         it('should return the inserted user', async () => {
//             let user = await Users.insert({
//                 username: "testing test",
//                 password: "testing test",
//                 department: "this is for the test database"
//             });
//             expect(user.name).toBe('testing test');
//             expect(user.password).toBe('testing test');
//             expect(user.department).toBe('this is for the test database');

//             user = await Users.insert({
//                 username: "testing test2",
//                 password: "testing test2",
//                 department: "this is for the test database2"
//             });
//             expect(user.name).toBe('testing test2');
//             expect(user.password).toBe('testing test2');
//             expect(user.department).toBe('this is for the test database2');

//         })
//     })
// })

// beforeEach(async () => {
//     await db('users').truncate();
// })