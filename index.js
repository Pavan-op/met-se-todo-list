let button = document.querySelector("#todo")
let popup = document.querySelector(".popup")
button.addEventListener("click",()=>{
    popup.classList.remove("d-none")
   
})
let save_btn = document.querySelector("#save_btn")
save_btn.addEventListener("click",()=>{
    let new_data = {
        Todo:Todo.value,
        Description:Description.value,
        Priority:Priority.value
    }
    let data_list = localStorage.getItem("todo");
         data_list = data_list === null?[]:JSON.parse(data_list);
        data_list.push(new_data)
    if(
        Todo.value =="" || 
        Description.value =="" 
        
    ){
        alert("Fill all Information")
    }
    else{
        localStorage.setItem("todo",JSON.stringify(data_list))
    alert("Your data is saved")
    popup.classList.add("d-none")}
})