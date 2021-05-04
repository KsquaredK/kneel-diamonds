// import arrays from db
import { getMetals, getOrders, getSizes, getStyles } from "./database.js"
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

// function renders in html order id and timestamp
//??????? why order as a parameter?
const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    /*    The other variables are needed to reference the db, and 
    their respective functions will be called when the page loads 
    initially. The state variable will take in input and change state 
    some time after pageload, and needs to update in real time in 
    response to input.
    */

    // copy orders array from db
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}