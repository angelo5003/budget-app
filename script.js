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
  const listEntryValue = document.createElement("strong"); // create a strong element takes the amount of money

  listEntryValue.innerText = amount; // amount of money
  listEntry.appendChild(listEntryValue); // append element to the list entry

  entryListElement.appendChild(listEntry); // append listEntry to the entryListElement
}

additionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);
};
