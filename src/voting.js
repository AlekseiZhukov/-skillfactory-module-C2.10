const cats = document.querySelector('.cats')
const dogs = document.querySelector('.dogs')
const parrots = document.querySelector('.parrots')
const result = document.querySelector('.result')



cats.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {
        method: 'post'
    });
    cats.disabled = true;
    dogs.disabled = true;
    parrots.disabled = true;
    result.disabled = false;
});

dogs.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {
        method: 'post'
    });
    cats.disabled = true;
    dogs.disabled = true;
    parrots.disabled = true;
    result.disabled = false;
});

parrots.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {
        method: 'post'
    });
    cats.disabled = true;
    dogs.disabled = true;
    parrots.disabled = true;
    result.disabled = false;
});

result.addEventListener('click', async _ => {
    location.href = 'result.html'
    
});
