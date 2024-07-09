
# MCQ TEST
Question no-01:-
let greeting;
greetign = {};
console.log(greetign);
Answer: Option (A) {}, "The variable is assigned an empty object"

Question no-02:-
function sum(a, b) {
  return a + b;
}
sum(1, "2");
Answer: Option (C) "12", "The output is the string, because of JavaScript will implicitly convert the number 1 to a string and concatenate it with the string 2"

Question no-03:-
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);
Answer: Option (A) ['🍕', '🍫', '🥑', '🍔'], "the info object does not affect the original food array. Therefore, the output of console.log(food); will be the original array"

Question no-04:-
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
Answer: Option (B) Hi there, undefined, "when you call sayHi() without providing an argument, the name parameter will be undefined. The function will then concatenate this undefined value with the string inside the template literal"

Question no-05:-
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);
Answer: Option (C) 3, "If num is truthy, it increments the count variable by 1"


# This is a social event website like weddings "FOREVER YOURS".
# Five project features are below:-
- The homepage features a Navbar, About section, Services overview, and Footer.
- If you clicking the service detail button or read more link in the card will require registration with login.
- You can toggle on the login and registration page.
- Being logged in grants access to the service details pages, which are private routes.
- When you log in, you can access two more private routes, including the Blog & Profile.

# Live Link: https://assignment-09-7a2ef.web.app/login




