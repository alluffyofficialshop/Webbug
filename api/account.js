// api/account.js
export const accounts = [
  { username: "alluffy", password: "alluffy250710" },
  { username: "alluffy", password: "alluffypanel" },
  
  
];

export function validateLogin(username, password) {
  return accounts.some(acc => acc.username === username && acc.password === password);
  }
  
