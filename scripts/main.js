// module renders dynamic content as html to index.html
import { KneelDiamonds } from "./KneelDiamonds.js"
// assigns variable to targeted element that will receive generated html
const mainContainer = document.querySelector("#container")
    // function to invoke dynamic content from user-interface module and assigns it to targeted element
const renderAllHTML = () => {
        mainContainer.innerHTML = KneelDiamonds()
    }
    // calling previous function
renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})