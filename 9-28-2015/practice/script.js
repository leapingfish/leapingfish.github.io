/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */

 // PSEUDO-CODE
 // ---------------------
 // Click button 1
 // Select all paragraphs
 // change the color to blue

 $('#button1').on('click', turnBlue);

 function turnBlue() {
    $('p').css('color','blue');
 }

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

 $('#button1').on('click', updateName);

 function updateName() {
     $('h2').html('Hart');
 }

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 */

 $('#button1').on('click', updateListItem);

 function updateListItem() {
     $('li.falseFact').html('True Fact');
 }

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

 $('#button2').on('click', updateBackgroundColor);

 function updateBackgroundColor() {
     $('body').css('background-color', 'pink');
 }

/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

 $('#button2').on('click', updateH2Color);

 function updateH2Color() {
     $('h2').css('background-color', 'green');
 }

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 $('#button2').on('click', updateBlockquote);

 function updateBlockquote() {
     $('blockquote').html('<span>no quote</span>');
 }

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

$('#button3').on('click', updateH1Text);

function updateH1Text() {
    $('header h1').html('jQuery Ninja');
}

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

 $('#button3').on('click', updateImage);

 function updateImage() {
     // The code below update the src attribute to a new image
     $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 }

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */

 $('#button3').on('click', updateParagraphs);

 function updateParagraphs() {
     $('p').css({
         'color': 'blue',
         'font-family': 'Georgia'
     });
 }
