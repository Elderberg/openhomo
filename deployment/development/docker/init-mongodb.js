db.auth('admin-user', '2347bdjsfIS7')
//
// db = db.getSiblingDB('test-database')

db.createUser({
    user: 'test-user',
    pwd: 'test-password',
    roles: [
        {
            role: 'root',
            db: 'test-database',
        },
    ],
});
db.create('test-database');
db.use('test-database');
db.insert({
    name: "Hans Wurst",
    alter: 28,
});
