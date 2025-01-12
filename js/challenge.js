// User can see the timer increment every second once the page has loaded.
document.addEventListener('DOMContentLoaded', () => {
console.log('START LOADED')

function isCounting() {
    let counter = document.querySelector('#counter');
    counter.innerText = (parseInt(counter.innerText, 10)) +1; // change the value from a string to a number value
};
let interval = setInterval(isCounting, 1000);

// Manually increment and decrement the counter using the plus and minus buttons
const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', () => {
    let counter = document.querySelector('#counter');
    counter.innerText = (parseInt(counter.innerText, 10)) -1;
})
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', isCounting);

// "Like" an individual number of the counter.
// I should see the count of the number of "likes" associated with that number displayed.
const heartBtn = document.querySelector('#heart');
const submitBtn = document.querySelector('#submit');

let likesObj = {};

heartBtn.addEventListener('click', () => {
    let cV = document.querySelector('#counter').innerText; // this is the number of the counter
    let ul = document.querySelector('.likes');
    const liID = document.getElementById(`number${[cV]}`)
    
    if(liID){
        likesObj[cV] += 1
        const span = liID.querySelector('span')
        span.innerText++
        
    }else{
        likesObj[cV] = 1
        // likesObj[cV] is the value pair of how many times it was liked
        const li = document.createElement('li');
        li.id = `number${[cV]}`
        li.innerHTML = `${[cV]} has been liked <span>1</span> time`
        ul.append(li);
    }
     
    
});

// Pause the counter, which should: pause the counter, disable all other buttons, toggle 'pause' 'resume'
const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', () => {
    if (pauseBtn.innerText === 'pause'){
        pauseBtn.innerText = 'resume'
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        submitBtn.disabled = true;  
        clearInterval(interval)
    }else if(pauseBtn.innerText = 'resume'){
        pauseBtn.innerText = 'pause'
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;
        submitBtn.disabled = false;  
        interval = setInterval(isCounting, 1000)
    }
});

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
// const input = document.querySelector('#comment-input');
const form = document.querySelector('#comment-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const list = document.querySelector('#list');
    let li = document.createElement('li');
    li.innerText = e.target[0].value;
    list.append(li);
    form.reset(); // -> another way is form.innerText = "";

    
})

console.log('END LOADED')
}); //DOM Loaded
