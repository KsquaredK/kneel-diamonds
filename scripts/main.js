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

/* Chapter 8
You implemented a new event listener for the browser-generated click event on the order button.
You wrote a new function in the database module that is responsible for changing permanent state.
Since it changed permanent state, it dispatched a custom event.
You implemented a new event listener in the main module for the custom stateChanged event.
That event listener invokes the renderAllHTML() function to regenerate the HTML so that new state is displayed to the user. 
*/