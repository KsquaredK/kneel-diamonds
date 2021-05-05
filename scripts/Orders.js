// import arrays from db
import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

const sizes = getSizes()
const styles = getStyles()

// function renders in html order id and timestamp
//??????? why order as a parameter?
const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    //finding db metal object that correlates with the order's metalId, using .find
    //function passed to find must return Boolean
    const foundMetal = metals.find(
            //iterate through metal array
            (metal) => {
                //returning the matching object whose id property matches that of order.metalId (Boolean)
                return metal.id === order.metalId
            }
        )
        //assigning the foundMetal price to totalCost
    let totalCost = foundMetal.price

    //invoke .toLocaleString method to render html of cost in US currency
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
Order #${order.id} cost ${costString}, and was placed on ${order.timestamp}
    </li>
`
}

export const Orders = () => {
        /*
            Can you explain why the state variable has to be inside
            the component function for Orders, but not the others?
        */
        /*    Answer: The other variables are needed to reference the db, and 
        their respective functions will be called when the page loads 
        initially. The state variable will take in input and change state 
        at a time or times after pageload, and needs to update in real time in 
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
    // Return this to original spot
    /*  */