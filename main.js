import inquirer from "inquirer";
console.log("\n\t---- Welcome to Our Mini Project Words Counter ----\n\t");
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words :"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`\n\tYour Sentence Words Count Is ${words.length}`);
console.log("\n\t---- Thank For Testing Our Project ----\t\n");
