#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    usd: 1,
    sar: 3.75,
    jpy: 90.24,
    sgd: 0.95,
    pkr: 277.55,
};
let useranswer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["usd", "sar", "jpy", "sgd", "pkr"],
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["usd", "sar", "jpy", "sgd", "pkr"],
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromamount = currency[useranswer.from];
let toamount = currency[useranswer.to];
let amount = useranswer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(convertedamount);
