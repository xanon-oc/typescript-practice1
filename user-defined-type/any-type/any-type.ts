let users: object[];

users = [];
type User = { userName: string; userId: number };
let user1: User;
user1 = { userName: "Niloy Roy", userId: 12 };

let user2: User;
user2 = { userName: "Saddat Hossain", userId: 14 };

users.push(user1);
users.push(user2);

console.log(users);
