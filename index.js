const userItem = document.querySelector(".userItem")
const userQty = document.querySelector(".userQty")
const userAmount = document.querySelector('.userAmount')
const userDate = document.querySelector(".userDate")
const Btn = document.querySelector('.Btn')
const tabledata = document.querySelector('.tabledata')


let data = JSON.parse(localStorage.getItem("itemsdata")) || []

Btn.addEventListener("click",()=>{
    
    let items = {
        item : userItem.value,
        qty : userQty.value,
        amount: userAmount.value,
        Date : userDate.value
    }
    data.push(items)
    console.log(data)
    localStorage.setItem("itemsdata", JSON.stringify(data))
    window.location.reload();
})

data.map((index)=>{

    tabledata.innerHTML +=
    ` <tr>
    <td>${index.item}</td>
    <td>${index.qty}</td>
    <td>${index.amount}</td>
    <td>${index.Date}</td>
      </tr>`
})