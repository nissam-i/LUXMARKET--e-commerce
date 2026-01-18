import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
}

function ensureDb() {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, '[]', 'utf-8');
    }
}

export function getAllUsers(): User[] {
    ensureDb();
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data) as User[];
    } catch (error) {
        return [];
    }
}

export function findUserByEmail(email: string): User | undefined {
    const users = getAllUsers();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(user: User): void {
    const users = getAllUsers();
    users.push(user);
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), 'utf-8');
}
