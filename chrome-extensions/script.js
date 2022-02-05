let myArray = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leasdFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leasdFromLocalStorage) {
  myArray = leasdFromLocalStorage;
  render(myArray);
}


//showing items
function render(array) {
  let listItems = "";
  for (let i = 0; i < array.length; i++) {
    // listItems+="<li><a target='_blank' href='"+myArray[i]+"'>"+ myArray[i] + " </a></li>";
    listItems += `
            <li>
                <a target='_blank' href='${array[i]}"'>
                ${array[i]}
                </a>
            </li>
              `;
    // another way
    // const li=document.createElement('li');
    // li.textContent=myArray[i];
    // ulEl.appendChild(li);
  }

  ulEl.innerHTML = listItems;
}

//deleting items
document.querySelector("#delete-btn").addEventListener("click", function () {
  localStorage.clear();
  myArray = [];
  render(myArray);
});

// saving items
document.querySelector("#input-btn").addEventListener("click", function () {
  if (inputEl.value !== "") {
    myArray.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myArray));
  }
  inputEl.value = "";
  render(myArray);
});

//saving tabs

document.querySelector("#tab-btn").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   
    myArray.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myArray));
    render(myArray);

  });
});
