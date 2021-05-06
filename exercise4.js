export function getAdminNameAgeRole() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Enter your age", "");
  console.log(user);

  const admin = { ...user, role: "admin"};
  console.log(admin);

  const { name, age, role } = admin;
  console.log(name, age, role);
}
