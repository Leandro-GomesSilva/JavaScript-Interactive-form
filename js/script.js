/******************************************************************************************************
*******************************************************************************************************
 *
    Treehouse Techdegree:
    FSJS Project 3 - Interactive Form
    Author: Leandro Gomes
 *    
******************************************************************************************************
******************************************************************************************************/


/******************************************************************************************************
 * 
 *  Field "Other Job Role"
 * 
 *****************************************************************************************************/

// Making the field for the "Other Job Role" invisible when the page loads and turning it visible when "Other" is selected.
const title = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

otherTitle.style.display = 'none';

title.addEventListener ('change', () => {
    if (title.value === "other") {
        otherTitle.style.display = 'inherit';
    } else {
        otherTitle.value = '';      // Cleaning the text field in case the option "Other" is unselected.
        otherTitle.style.display = 'none';
    }
});


/******************************************************************************************************
 * 
 *  T-Shirt Info Section, Part 1:
 *  Setting default options for the "Design" and "Color" labels
 * 
 *****************************************************************************************************/

// Selecting DOM elements by ID and storing all children elements of the 'Color element' in an array.
const design = document.getElementById('design');
const colorDiv = document.getElementById('shirt-colors');
const color = document.getElementById('color');
const colorChildren = color.children;

 
// For the label "Design": setting the first option "Select Theme" as a hidden and not-selectable value (it can be done in the HTML as default as well).
const designFirstChild = design.firstElementChild;
designFirstChild.selected = true;
designFirstChild.hidden = true;

// Hidding the Color Label, since no design is selected by default.
colorDiv.style.display = 'none';

/******************************************************************************************************
 * 
 *  T-Shirt Info Section, Part 2:
 *  Setting the color options to only display for the matching design
 * 
 *****************************************************************************************************/

/* Declaring an Array of Objects 
 *  Each array index has an object, which corresponds to a design type. 
 *  Each object property corresponds to a color, which has its own definion for display option. 
 *  It makes adding or changing any color or "matching" easier in the future. 
*/
const displayArray = [
    {
        cornflowerblue: 'inherit',
        darkslategrey: 'inherit',
        gold: 'inherit',
        tomato: 'none',
        steelblue: 'none',
        dimgrey: 'none',
    },
    {
        cornflowerblue: 'none',
        darkslategrey: 'none',
        gold: 'none',
        tomato: 'inherit',
        steelblue: 'inherit',
        dimgrey: 'inherit',
    }
];

// This second array of objects determines which option will "selected" i.e. "default" for each design.
const selectedArray = [ { cornflowerblue: true }, { tomato: true } ];

// Initializing the arrayIndex variable
let arrayIndex = -1;

/** Adding the Event Listener that looks for changes in the dropdown menu.
 * 
 *  The Event Handler does the following:
 *  1. Turning the color label visible.
 *  2. Changes the array index according to the chosen design (0 or 1) and displaying the color.
 *  3. Gets the corresponding value in the two arrays of objects (display options and the default selected option).
*/

design.addEventListener('change', () => {
    colorDiv.style.display = 'inherit';
    
    if (design.value === "js puns") {
        arrayIndex = 0;
    } else if (design.value === "heart js") {
        arrayIndex = 1;
    }

    for ( i = 0; i < colorChildren.length; i++ ) {
        colorChildren[i].style.display = displayArray[arrayIndex][colorChildren[i].value];
        colorChildren[i].selected = selectedArray[arrayIndex][colorChildren[i].value];
    }
});


/******************************************************************************************************
 * 
 *  Register for Activities Section
 * 
 *****************************************************************************************************/

// Getting DOM elements
const activities = document.getElementsByClassName('activities');
const activitiesChildren = activities[0].children;

// Creating and appending DOM elements to show the costs.
const costDiv = document.createElement('div');
costDiv.innerHTML = `<span>Total: </span>`;
const costSpan = document.createElement('span');
costDiv.appendChild(costSpan);
activities[0].appendChild(costDiv);


/***
 * `showCosts` function
 * 1. Checks which checkboxes are checked and adds up their costs to the totalCosts variable.
 * 2. Updates the textContent of the 'span element' with the current costs.
 * 3. Shows up the costs in the page if the costs are bigger then 0.
 * 
 * @returns
 * 
 */
function showCosts () {  
    let totalCosts = 0;
    
    // Step 1
    for ( i = 1; i < activitiesChildren.length; i++ ) {       // This "for" starts at 1 because the array position 0 is occupied by the element "legend".
        if ( activitiesChildren[i].firstElementChild.checked ) {
            totalCosts += parseInt(activitiesChildren[i].firstElementChild.getAttribute('data-cost'));
        }
    }
    
    // Step 2
    costSpan.textContent = totalCosts;
    
    // Step 3
    if (totalCosts > 0) {
        costDiv.style.display = 'inherit';
    } else costDiv.style.display = 'none';

    return;
}

// Calls the function when the page loads.
showCosts();

// Event Listener for the checkbox items
activities[0].addEventListener('click', (e) => {
    if (e.target.tagName == 'INPUT') {
        
        // Storing the relevant information of the "event" into variables.
        const isChecked = e.target.checked;
        const targetDayAndTime = e.target.getAttribute('data-day-and-time');
        const targetName = e.target.getAttribute('name');
        
        for ( i = 1; i < activitiesChildren.length; i++ ) {   // This "for" starts at 1 because the array position 0 is occupied by the element "legend".
            
            // Checks 1. if the event target is checked, 2. if the "child element" is NOT itself and last but not least 3. if the day and time are the same.
            if ( isChecked && targetName !== activitiesChildren[i].firstElementChild.getAttribute('name') && targetDayAndTime === activitiesChildren[i].firstElementChild.getAttribute('data-day-and-time') ) {
                activitiesChildren[i].firstElementChild.disabled = true;
            } 
            // The same as above, but now for the case the event target is UNCHECKED.
            else if ( targetName !== activitiesChildren[i].firstElementChild.getAttribute('name') && targetDayAndTime === activitiesChildren[i].firstElementChild.getAttribute('data-day-and-time') ) {
                activitiesChildren[i].firstElementChild.disabled = false;
            };

        }

        // Calls the function every time a checkbox is clicked.
        showCosts();
    }
});


/******************************************************************************************************
 * 
 *  Payment Section
 * 
 *****************************************************************************************************/


 // Selecting elements by ID and storing "option elements" for "payment" in a variable
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentChildren = payment.children;

// Making "credit card" default selected and preventing "Select you payment method" of being selected 
for (i = 0; i < paymentChildren.length; i++ ) {
    if ( paymentChildren[i].value === 'select method') {
        paymentChildren[i].disabled = true;
    }
    if ( paymentChildren[i].value === 'credit card') {
        paymentChildren[i].selected = true;
    }
}

//  Displaying only the credit card options after the page loads.
paypal.style.display = 'none';
bitcoin.style.display = 'none';

// Displaying in the page the selected option when the user clicks a payment method in the dropdown menu.
// I first did it using three IF-statements, but then I managed to compact it a lot by declaring a object of arrays.

payment.addEventListener('change', (e) => { 
    
    const paymentMethod = e.target.value.replace(/\s+/, "");    // This "replace" is needed, since the "value" of the credit card option is written with a space and I couldn't declare the corresponding object property with a space.

    // Object, whose properties are arrays containing the display options for each payment method
    const displayStatusPayment = {
        creditcard: ['inherit', 'none', 'none'],
        paypal: ['none', 'inherit', 'none'],
        bitcoin: ['none', 'none', 'inherit'],
    };

    // These 3 lines of code below substitute three boring IF-statements
    creditCard.style.display = displayStatusPayment[paymentMethod][0];
    paypal.style.display = displayStatusPayment[paymentMethod][1];
    bitcoin.style.display = displayStatusPayment[paymentMethod][2];
});


/******************************************************************************************************
 * 
 *  Form validation
 * 
 *****************************************************************************************************/