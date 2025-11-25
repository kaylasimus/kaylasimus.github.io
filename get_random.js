// take in user input to compare
function random_num(){
    // get a random number: whole number((random number * range 0 to x) + 1)
    // + 1 so that instead of * 10 being 0-9, + 1 makes it 1-10
    let random = Math.floor((Math.random() * 10) + 1);
    // num will be the object for the_number
    let num = document.getElementById('the_number');
    // assign num to the random number
    num.innerText = random;
}