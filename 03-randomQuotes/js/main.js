const quotes = [
    {
        txt: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got" ,
        writer: "life"
    },
    {
        txt:  "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        writer: "John Kenneth Galbraith"
    },
    {
        txt:  "God save me from my friends. I can protect myself from my enemies.",
        writer: "Claude Louis Hector de Villars "
    },
    {
        txt:  "The price of anything is the amount of life you exchange for it.",
        writer: "David Thoreau"
    },
    {
        txt:   "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        writer: "Charles Lindbergh"
    },
    {
        txt:    "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        writer: "Tyne Daly"
    },
]
console.log(quotes)
const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');

btn.addEventListener('click', generateQuote)

function generateQuote(){
    let randomIndex = parseInt(Math.random() * quotes.length)
    console.log(randomIndex)
    quote.innerHTML = quotes[randomIndex].txt;
    writer.innerHTML = quotes[randomIndex].writer;
}