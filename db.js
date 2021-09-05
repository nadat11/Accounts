let db = [
  {
    name: "Nada",
    lastName: "Tandaric",
    email: "danilo@gmail.com",
    phone: "1111-222-333",
  },
  {
    name: "Ivan",
    lastName: "Ivanovic",
    email: "ivan@gmail.com",
    phone: "333-222-111",
  },
];
if (localStorage.db) {
  db = JSON.parse(localStorage.db);
}
