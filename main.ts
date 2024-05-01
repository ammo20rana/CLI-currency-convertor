import inquirer from "inquirer"
let todos = [] //shopper []
let condition = true;

while(condition)
{
    let todoquestions= await inquirer.prompt(
[    
    {
        name: "firstquestion",
        message: "what would you like to add to in your todos?",
        type: "input",
    },
    {
        name: "secondquestion",
        message: "would you like to add more in your todos?",
        type: "confirm",
        default: "true"
    }
]    
 
)

todos.push(todoquestions.firstquestion);
console.log(todos);
//the loop is running on the basd of the variable
condition = todoquestions.secondquestion;
}