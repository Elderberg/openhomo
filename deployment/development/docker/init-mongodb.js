//docs.mongodb.com/manual/reference/method/

db.createUser({
    user: 'spring-user',
    pwd: 'ecex1285$',
    roles: [
        {
            role: 'readWrite',
            db: 'openHomo',
        },
    ],
});

//authentication and creating Database + Collection
db.auth('spring-user', 'ecex1285$');
db = db.getSiblingDB('openHomo')

db.createUser({
    user: 'spring-user',
    pwd: 'ecex1285$',
    roles: [
        {
            role: 'readWrite',
            db: 'openHomo',
        },
    ],
});

db.createCollection('node');

//insert Document(s) in Collection named "testcollection"
// db.node.insert({
//     id: "315327d0-d195-474d-a86b-9a615ba40249",
//     state: 100,
//     name: 'Test Node'
// });
