class UserModel {
    constructor() {
        this.users = [];
        this.nextId = 1;
        this.seedData();
    }

    seedData() {
        const sampleUsers = [
            {
                id: this.nextId++,
                name: 'John Doe',
                email: 'john@example.com',
                age: 28,
                role: 'Developer',
                createdAt: new Date().toISOString()
            },
            {
                id: this.nextId++,
                name: 'Jane Smith',
                email: 'jane@example.com',
                age: 24,
                role: 'Designer',
                createdAt: new Date().toISOString()
            },
            {
                id: this.nextId++,
                name: 'Bob Johnson',
                email: 'bob@example.com',
                age: 32,
                role: 'Manager',
                createdAt: new Date().toISOString()
            }
        ];
        this.users = sampleUsers;
    }

    findAll() {
        return this.users;
    }

    findById(id) {
        return this.users.find(user => user.id === parseInt(id));
    }

    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    create(userData) {
        const newUser = {
            id: this.nextId++,
            ...userData,
            createdAt: new Date().toISOString()
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id, userData) {
        const index = this.users.findIndex(user => user.id === parseInt(id));
        if (index === -1) return null;
        
        this.users[index] = {
            ...this.users[index],
            ...userData,
            id: parseInt(id)
        };
        return this.users[index];
    }

    delete(id) {
        const index = this.users.findIndex(user => user.id === parseInt(id));
        if (index === -1) return false;
        this.users.splice(index, 1);
        return true;
    }
}

module.exports = new UserModel();