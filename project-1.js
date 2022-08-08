// Variables

let btn = window.document.querySelector('#new-quote');
let quote = window.document.querySelector('.quote');
let person = window.document.querySelector('.person');

// QUOTES' LIST!
const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or thing."`,
    person: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animal; separated from law and justice he is the worst."`,
    person: ` Aristoteles`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: ` Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`
}, {
    quote: `"If you look at what you have in life, you will always have more. If you look at what you don't have in life, you will never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: ` Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: ` Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: ` Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: ` Lao Tzu`
}, ];

btn.addEventListener('click', function() {
    /*
        So, the method of Math.random() doesn't generate a whole number so you need to wrap it in Math.floor() method, which essentially just rounds a number downwards to the nearest integer number.

        Math.random() * quotes.length ---> Generate a number between 0 and the total number os quotes inside of your quote array.
    */
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})