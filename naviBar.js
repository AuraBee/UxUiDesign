
export function renderNav()

let menuEl = ["Home", "About","Artefacts"]


function renderNav(){
    const ul = document.createElement("ul")  
    ul.textContent ="menuEl"
     `
       <ul id = "navMenu">
        <li><a href="#">Home</a></li>
        <li class="active"><a href="#">About</a></li>
        <li class="sub"><a href="#">Services</a>
            <div class="submenu">
                <ul>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">UX/UI</a></li>
                </ul>
            <p>Solutions that will met your every need.</p>
            </div>
        </li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
        </ul>      
`
console.log(ul)
}