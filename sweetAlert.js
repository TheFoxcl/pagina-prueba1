var buttonAlert = document.querySelectorAll(".moreInfo")

for ( let i = 0; i <= buttonAlert.length; i++) {
    buttonAlert[i].addEventListener("click",()=>{Swal.fire({
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora ex quam odit itaque deserunt ipsum officia sequi porro, aperiam amet voluptatibus possimus sapiente laborum. Architecto necessitatibus doloremque dolores debitis!",
        background: "rgba(7, 7, 7, 0.7)",
        color: "white"
})})}
