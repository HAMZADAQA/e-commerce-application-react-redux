import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Hamza1993', 10),
        isAdmin: true
    },
    {
        name: 'Hamza Daqa',
        email: 'hamza@example.com',
        password: bcrypt.hashSync('Hamza1993', 10),
    },
    {
        name: 'Moja Daqa',
        email: 'moja@example.com',
        password: bcrypt.hashSync('Hamza1993', 10),
    },
]

export default users;