// api/account.js
export const accounts = [
  { username: "username_1", password: "password_1" },
  { username: "username_2", password: "password_2" },
  
  
];

export function validateLogin(username, password) {
  return accounts.some(acc => acc.username === username && acc.password === password);
  }
  
