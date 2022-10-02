const FormTodo = document.querySelector(".form-ToDo");
const Input = document.querySelector(".form-ToDo input[type='text']");
const MyUl = document.querySelector(".todo-ul");

FormTodo.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submited");
    const NewToDoText = Input.value;
    const NewLi = document.createElement("li");
    const NewLiinnerHTML = `<span>${NewToDoText}</span>
    <div class="btnDiv">
        <button class="LiBtn DoneBtn">Done</button>
        <button class="LiBtn RemoveBtn">Remove</button>
    </div>`
    NewLi.innerHTML = NewLiinnerHTML;
    MyUl.append(NewLi);
    Input.value = "";
})

MyUl.addEventListener("click", (event)=>{
    if(event.target.classList.contains("DoneBtn")){
        console.log("Done????");
        const LiSpan = event.target.parentNode.previousElementSibling;
        LiSpan.style.textDecoration = "line-through";
    };

    if(event.target.classList.contains("RemoveBtn")){
        console.log("Remove????");
        const LiSpan = event.target.parentNode.parentNode;
        LiSpan.remove();
    };
    
})