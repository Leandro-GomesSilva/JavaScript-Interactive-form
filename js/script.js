/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
Author: Leandro Gomes
*/


// Making the field for the "Other Job Role" invisible when the page loads and turning it visible when "Other" is selected
const title = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

otherTitle.style.display = 'none';

title.addEventListener ('change', () => {
    if (title.value === "other") {
        otherTitle.style.display = 'inherit';
    } else {
        otherTitle.value = '';
        otherTitle.style.display = 'none';
    }
});


/**
 * 
 *  T-Shirt Info Section, Part 1:
 *  Setting default options for the labels "Design" and "Color" 
 * 
 */

// Selecting elements by ID and storing all children elements of the 'Color element' in a variable.
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorChildren = color.children;
 
// For the label "Design": setting the first option "Select Theme" as a hidden and not-selectable value.
const designFirstChild = design.firstElementChild;
designFirstChild.selected = true;
designFirstChild.hidden = true;

// For the label "Color": creating a new default, hidden and not-selectable option "Please select a T-shirt theme".
const colorNewElementChild = document.createElement('option');
colorNewElementChild.selected = true;
colorNewElementChild.hidden = true;
colorNewElementChild.textContent = 'Please select a T-shirt theme';
color.insertBefore(colorNewElementChild, color.firstElementChild);

// Hiding by default all colours when the page loads.
for (i = 0; i < colorChildren.length; i++) {
colorChildren[i].style.display = 'none';
}


/**
 * 
 *  T-Shirt Info Section, Part 2:
 *  Setting the color options to only display for the matching design
 * 
 */

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

let arrayIndex = -1;

// This second array of objects determines for each design which option will "selected" i.e. "default".
const selectedArray = [ { cornflowerblue: 'true' }, { tomato: 'true' } ];

// Function for the Listener: changes the array index according to the chosen design and calls the corresponding value in the arrays of objects for the display option and the selected option.
function matchingDesignColor () {
    if (design.value === "js puns") {
        arrayIndex = 0;
    } else if (design.value === "heart js") {
        arrayIndex = 1;
    }

    for (i = 0; i < colorChildren.length; i++) {
        colorChildren[i].style.display = displayArray[arrayIndex][colorChildren[i].value];
        colorChildren[i].selected = selectedArray[arrayIndex][colorChildren[i].value];
    }
}

// Adding the Event Listener that looks for changes in the dropdown menu
design.addEventListener('change', matchingDesignColor);


/**
 * 
 *  Register for Activities Section:
 *  Disabling time-conflicting checkbox items
 * 
 */

 const activities = document.getElementsByClassName('activities');
 const activitiesChildren = ;


 