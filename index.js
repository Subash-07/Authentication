async function todayFacts() {
    let response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today');
    await response.json()
    .then((data) => {
       let facts = document.querySelector('.factContent');
       facts.innerHTML = data.text; 
    }).catch((err) => {
        err = "Error fetching facts"
        alert(err);
    });
    }
    async function randomFacts() {
        let response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
        await response.json()
       .then((data) => {
        let facts = document.querySelector('.factContent');
        facts.innerHTML = data.text;
    }).catch((err) => {
        err = "Error fetching facts"
        alert(err);
    });
    }
    document.getElementById('prevent').addEventListener('click',(e) => {
    e.preventDefault();
    })
    
    todayFacts();
    function generateFact(){
        randomFacts();
    }