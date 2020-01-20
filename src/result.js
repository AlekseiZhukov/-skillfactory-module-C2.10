const cats = document.querySelector('.cats')
const dogs = document.querySelector('.dogs')
const parrots = document.querySelector('.parrots')



const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? cats.textContent = 'Some error' : null;
}

ES.onmessage = message => {
	let allData = JSON.parse(message.data);

	let dataCats = allData.cats / 100;
	cats.style.cssText = `width: ${dataCats}%`;
	cats.textContent = allData.cats;

	let dataDogs = allData.dogs / 100;
	dogs.style.cssText = `width: ${dataDogs}%`;
	dogs.textContent = allData.dogs;

	let dataParrots = allData.parrots / 100;
	parrots.style.cssText = `width: ${dataParrots}%`;
	parrots.textContent = allData.parrots;
	
};


