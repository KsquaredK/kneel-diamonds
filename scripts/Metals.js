// // import functions to reference db for arrays and for setting transient state of orders
import { getMetals, setMetal } from "./database.js"

// invoke function for copy of array
const metals = getMetals()
    //eventListener for targeting radio button input for metal property
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}