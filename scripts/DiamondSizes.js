// import functions to reference db for arrays and for setting transient state of orders
import { getSizes, setSize } from "./database.js"
//calling a copy of size array from db
const sizes = getSizes()
    //eventListener for targeting radio button input for size property
document.addEventListener(
        "change",
        (event) => {
            // if target === given object property...
            if (event.target.name === "size") {
                //invoke function to set transient state to orderBuilder object in db
                setSize(parseInt(event.target.value))
            }
        }
    )
    // export user's size choice, rendered in html with .map and .join functions
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}