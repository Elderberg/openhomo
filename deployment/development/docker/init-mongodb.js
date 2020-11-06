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