
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

    // get user num and compare
    let user_ans = document.getElementById('user_num');
    let results_mssg = document.getElementById('result');
    let high_low_mssg = document.getElementById('high/low');

    // change image depending on results
    let react = document.getElementById('result_image');

    // get score and it will change depending on if user gets their guess right
    let points = document.getElementById('score');


    // each guess means the score continues to add
    if(user_ans.value == random){
        results_mssg.innerText="That's right!";
        react.src="images/hampter_giddy.png";
        high_low_mssg.innerText="You got the exact number!";
        points.value+= 1;
    }
    else{

        results_mssg.innerText="That's wrong...";
        react.src="images/hampter_upset.png";

        if (user_ans.value > random){
            high_low_mssg.innerText="My number is lower than that...";
        }
        else if (user_ans.value < random){
            high_low_mssg.innerText="My number is higher than that...";
        }
    }

    points.innerText = points.value;
    // check guess value (for testing)
    let guess = document.getElementById('user_guess');
    guess.innerText = user_ans.value;



}