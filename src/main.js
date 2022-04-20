const quoteId = document.querySelector('#quote-id')
const quoteText = document.querySelector('#quoteText')
const authorName = document.querySelector('.author')
const diceBtn = document.querySelector('.dice-container')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com',
		'X-RapidAPI-Key': '465d2053acmsh522bdd634ace202p16dc8djsn3db75d44c66d'
	}
};

fetch('https://inspiring-quotes.p.rapidapi.com/multiple?author=Einstein&count=50', options)
	.then(response => response.json())
	.then(response => {

        // console.log(response)
		function callOut(){
			let data = response.data
        let randomInt = Math.floor(Math.random() * 32)
        let quoteValue = data[randomInt]
        let quote = quoteValue.quote
        let author = quoteValue.author
        // console.log(quote,author)
		quoteId.textContent = randomInt
		quoteText.textContent = quote
		authorName.textContent = author
		}
		setInterval(callOut,7500)
		// diceBtn.addEventListener('click', callOut)

    })
	.catch(err => console.error(err));
