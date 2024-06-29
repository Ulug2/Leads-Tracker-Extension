let mySaved = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySaved"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    mySaved = leadsFromLocalStorage
    render(mySaved);
}

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        // listItems += "<li><a href='" + mySaved[i] + "' target='_blank'>" + mySaved[i] + "</a></li>"
        listItems += 
        `<li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>`
        // another way to do this
        // const li = document.createElement("li")
        // li.textContent = mySaved[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
}
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        mySaved.push(tabs[0].url)
        localStorage.setItem("mySaved", JSON.stringify(mySaved))
        render(mySaved)
    })
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    mySaved = [];
    render(mySaved);
})
inputBtn.addEventListener("click", function() {
    mySaved.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mySaved", JSON.stringify(mySaved))
    render(mySaved);
})
// function inputBtnFunction() {
//     mySaved.push(inputEl.value)
//     renderLeads()
// }

// const - creates constant variable
