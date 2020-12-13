//docs.mongodb.com/manual/reference/method/

db.createUser({
    user: 'test-user',
    pwd: '1234',
    roles: [
        {
            role: 'readWrite',
            db: 'test-database',
        },
    ],
});

//authentication and creating Database + Collection
db.auth('test-user', '1234');
db.createCollection('testcollection');

//insert Document(s) in Collection named "testcollection"
db.testcollection.insert({
    id: "315327d0-d195-474d-a86b-9a615ba40249",
    state: 100,
    name: 'Test Node'
});
