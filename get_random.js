
// resets buttons
/*function reset(){
    let num = document.getElementById('the_number');
    num.innerText = "";     // blank text

    let react = document.getElementById('result_image');
    react.src="images/hampter.png";

    let u_button = document.getElementById('user_button');
    u_button.value="Guess!";
}
 */


// take in user input to compare
function random_num() {
    // get a random number: whole number((random number * range 0 to x) + 1)
    // + 1 so that instead of * 10 being 0-9, + 1 makes it 1-10
    let random = Math.floor((Math.random() * 10) + 1);
    // num will be the object for the_number
    let num = document.getElementById('the_number');
    // assign num to the random number
    num.innerText = random;

    // change image depending on results
    let react = document.getElementById('result_image');
    react.src="images/hampter_write.png";

    // change button, invite user to guess again
    let u_button = document.getElementById('user_button');
    u_button.value="Guess Again!";
}
