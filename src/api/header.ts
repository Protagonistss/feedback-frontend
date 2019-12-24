const _users = [
  { id: 1, name: "huangshan", age: 20 },
  { id: 2, name: "zhong", age: 20 }
];

export const AllUser = (cb: any) => {
  setTimeout(() => cb(_users), 100);
};
