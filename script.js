// Total balance:
const balanceElement = document.getElementById("balance");

// Value input:
const valueInputElement = document.querySelector("input");

// Income/ expense:
const selectElement = document.querySelector("select");

// Addition Button:
const additionButtonElement = document.querySelector("footer button");

// Entry list:
const entryListElement = document.querySelector("section ul");

function addEntry(amount, operation) {
  const listEntry = document.createElement("li"); // create an li item
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong"); // create a strong element takes the amount of money
  listEntryValue.innerText = amount + "$"; // amount of money

  const listEntryDescription = document.createElement("em"); // create an element for the em tag
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");

  if (operation === "income") {
    listEntryOperator.innerText = "+"; // if the operation is equal to income, add the + sign
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-"; // if the operation is equal to expense, add the - sign
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue); // append element to the list entry

  entryListElement.appendChild(listEntry); // append listEntry to the entryListElement. Add it to the entire ul element
}

function updateBalance() {
  let total = 0;
  for (let item of entryListElement.children) {
    const valueElement = item.querySelector("strong");
    const operationElement = item.querySelector("span");

    const value = parseInt(valueElement.innerText);
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }
  balanceElement.innerText = total + "$";
}

additionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);

  valueInputElement.value = "";

  updateBalance();
};
