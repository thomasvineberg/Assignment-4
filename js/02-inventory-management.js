/*eslint-env browser*/

    var inventory, command;
    
    displayMenu();
    
    inventory =   [[8765, "Top Hat", 2, 99.95],
                   [8743, "Fedora", 6, 29.95],
                   [8754, "Beanie", 12, 12.95],
                   [8741, "Bowler", 3, 24.95],
                   [8740, "Baseball Cap", 28, 9.95]];

function displayMenu() {
    "use strict";
    window.console.log("Welcome to Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the application");
    window.console.log("");
}

function viewProducts() {
    "use strict";
    
    //SORT    
    
    inventory.sort();
    
    //DISPLAY
    
    for (var i = 0; i < inventory.length; i +=1) {
    window.console.log(inventory[i][0] + " " + inventory[i][1] + " \(" + inventory[i][2] + "\) " + "$" + inventory[i][3]);
    }
    window.console.log("Showing products.");
}

function updateStock() {
    "use strict";

    var SKU = parseInt(window.prompt("Enter a SKU"), 10);
    var j=0, k=0, indx=[];
    for (j=0; j<inventory.length; j++) {
        for (k=0; k<inventory[j].length; k++) {
            if (inventory[j][k] === SKU) {
                indx = [j,k]; 
            }
        }
    }
    if (typeof indx[0] == "undefined" || typeof indx[1] == "undefined") {
        alert("Sorry, that is not a valid SKU.");
    } else {
    var quantity = parseInt(window.prompt("Enter the new quantity."), 10); {
        if (isNaN(quantity) === true) {
            alert("Please enter a valid number.");
        } else {
     
        inventory[indx[0]].splice(2, 1, quantity);
        alert("Inventory of \(" + SKU + "\) updated.  Type view to see updated listings.");
    }
    }
    }
}

function main() {
    "use strict";
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                viewProducts(inventory);
            } else if (command === "update") {
                updateStock(inventory);
            } else if (command === "exit") {
                break;
            }
        } else {
            window.console.log("That is not a valid command");
        }
    }
    window.console.log("Program terminated.");
}

main();