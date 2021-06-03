# JavaScript - Interactive form
 The 3rd project on the Full Stack JavaScript Techdegree. In this application, JavaScript was used to enhance an interactive registration form for a fictional conference. The application applies conditional behaviour to various input fields, validates user input and provides the corresponding visual indication in real-time.
 
 Main technologies: JavaScript<br>
 Auxiliary technologies: HTML, CSS<br>
 Complexity level: Beginner<br>
 Concepts: Input validation, Conditional fields, DOM manipulation, Regex, Event Object, Event listeners, CSS basic effects, HTML elements<br>

For meeting expectations, I:
- set focus on first text field when page loads (via HTML).
- included a text field when the "Other" option is selected from the "Job role" drop down menu.
- hid all options from the Design menu and let it read "Please select a T-Shirt time" (this task will be overwritten by another one in the "exceeds expectations" part)
- match the available colors in the "color drop dopwn menu" with the corresponding designs
- disabled time conflicting activities as an activity is selected
- added a running total for the costs of activities
- selected the credit card payment option as default
- matched the payment option selected in the drop down menu with the payment option displayed in the page
- added form validation (preventing the submit button to send the form) for: name field (cannot be blank), e-mail field (must follow a certain format), activities session (at least one must be selected) and credit card payment option (3 field must follow a definied format)
- added form validation messages (in red) and visual information (the borders turn red)
- ensured the form works without JavaScript as well

For exceeding expectations, I:
- hid the "color drop down menu" until a T-shirt design is selected
- added real time error notification (messages + design changes) for the following fields: name, e-mail, activities and credit-card
- added conditional error notification for the e-mail field. One can test it using these e-mails:
    > noSpecialSymbols$$Before@gmail.com
    > noSpecialSymbols@After§$%gmail.com
    > atSignMustBeIncluded
    > theDomainNameMustHave@twoOrThreeLetters.abcd
    > [leave it incomplete] abcde@
    > [leave it blank]

As extras, I:
- added some changes to the CSS to experiment. What should be mentioned are the changes that helps with the visual error notification:
    > my own red design for "bad validation" cases, including "normal", "focus" and "hover"
    > a design to indicate "good validation" for the fields "e-mail", "card number", "zip code" and "cvv": once the user enters a correct formatted input to these fields, the fields turn into a nice green color (only when "on focus")

Thanks for the attention.
Leandro Gomes
