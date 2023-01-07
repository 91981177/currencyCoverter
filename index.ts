import inquirer from "inquirer";


const usdTopakr = 228.43;
const pkrTousd = 0.004;
const euTopkr = 239.33;
const pkrToeu = 0.042;
const euTousd = 1.05;
const usdToeu = 0.95;

async function converter() {
  let abc = await inquirer.prompt([
    {
      type: "list",
      name: "currency",
      message: "select your currency",
      choices: ["PKR", "USD", "EU"],
    },
    {
      type: "list",
      name: "currencyto",
      message: "select to you want to convert",
      choices: ["PKR", "USD", "EU"],
    },
    {
      type: "number",
      name: "Amount",
      message: "enter your values",
    },
  ]);
  // switch
  switch (abc.currency) {
    case "USD":
      if (abc.currencyto === "PKR") {
        let amount = abc.Amount * usdTopakr;
        console.log(amount);
      } else if (abc.currencyto === "EU") {
        let amount = abc.Amount * usdToeu;
        console.log(amount);
      } else {
        console.log(abc.Amount);
      }
      break;
    case "PKR":
      if (abc.currencyto === "USD") {
        let amount = abc.Amount * pkrTousd;
        console.log(amount);
      } else if (abc.currencyto === "EU") {
        let amount = abc.Amount * pkrToeu;
        console.log(amount);
      } else {
        console.log(abc.Amount);
      }
      break;
    case "EU":
      if (abc.currencyto === "PKR") {
        let amount = abc.Amount * euTopkr;
        console.log(amount);
      } else if (abc.currencyto === "USD") {
        let amount = abc.Amount * euTousd;
        console.log(amount);
      } else {
        console.log(abc.Amount);
      }
  }
}

// converter();

async function repeat() {
  do {
    await converter();

    var restart = await inquirer.prompt([
      {
        type: "input",
        name: "startAgain",
        message: "do you want to start again press y or n",
      },
    ]);
  } while (restart.startAgain === "y" || restart.startAgain=='n');
}

await repeat()