#!/usr/bin/env node
import inquirer from 'inquirer';
// Initialize user
const all_user = {
    aftab: '1234',
    ali: '1234',
    zain: '1234',
    hassan: '1234',
};
const all_balance = {
    aftab: 1000,
    ali: 1000,
    zain: 1000,
    hassan: 1000,
};
// after login
function performActions(username) {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What do you want to do?',
            choices: ['Balance', 'Deposit', 'Withdraw', 'Exit'],
        },
    ]).then((answer) => {
        switch (answer.action) {
            case 'Balance':
                console.log(`Your balance is: $${all_balance[username]}`);
                performActions(username); // Recall the function to allow for more actions
                break;
            case 'Deposit':
                inquirer.prompt([
                    {
                        name: 'amount',
                        type: 'number',
                        message: 'How much would you like to deposit?',
                        validate: (value) => {
                            if (value > 0) {
                                return true;
                            }
                            return 'Please enter a valid amount.';
                        },
                    },
                ]).then((depositAnswer) => {
                    all_balance[username] += depositAnswer.amount;
                    console.log(`Deposit successful. Your new balance is: $${all_balance[username]}`);
                    performActions(username);
                });
                break;
            case 'Withdraw':
                inquirer.prompt([
                    {
                        name: 'amount',
                        type: 'number',
                        message: 'How much would you like to withdraw?',
                        validate: (value) => {
                            if (value > 0 && value <= all_balance[username]) {
                                return true;
                            }
                            return 'Please enter a valid amount that does not exceed your balance.';
                        },
                    },
                ]).then((withdrawAnswer) => {
                    all_balance[username] -= withdrawAnswer.amount;
                    console.log(`Withdrawal successful. Your new balance is: $${all_balance[username]}`);
                    performActions(username);
                });
                break;
            case 'Exit':
                console.log('Goodbye!');
                return; // Exit the function
            default:
                console.log('Invalid option, please try again.');
                performActions(username);
        }
    });
}
// Login Prompt For User
inquirer.prompt([
    {
        name: 'username',
        type: 'input',
        message: 'Enter your username:',
    },
    {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
    },
]).then((answers) => {
    if (all_user[answers.username] && answers.password === all_user[answers.username]) {
        console.log('Login successful');
        performActions(answers.username);
    }
    else {
        console.log('Login failed: Incorrect username or password.');
    }
});
