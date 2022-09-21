// challenge.ts
const prettyPrintWilder = (users: [user?]): void => {
    users.map((user: user) => {
        console.log(`${user.name} is ${user.age} years old`);
    });
};

interface user {
    name: string,
    age?: number
    birthday?: string
}

const wilders: [user?] = [];
const user1: user = { name: "Pierre", age: 23 };
const user2: user = { name: "Paul", birthday: "10/02/1990" };
const user3: user = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);