console.log("Hello from main", countries);
const countTotalNumCountries = (arr)=>{
    const totalNumCountries = document.querySelector('.totalNum');
    totalNumCountries.textContent = arr.length;
}

countTotalNumCountries(countries);

const hexaGenerator = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const searchWithFirstLetter = (arr)=> {
    let firstLetter = document.querySelector('.searchInput').value;
    let countWithFirstLetter = document.querySelector('.filteredNum');
    let filteredResult = document.querySelector('.filteredResult');

    console.log(filteredResult);
    let numbers= /[0-9]/g;
    
    // need to figure out when input is empty
    if(!numbers.test(firstLetter) && (firstLetter !== "")){

        console.log(firstLetter);
        let filteredByFirstLetter= arr.filter((country)=>{
            return country.startsWith(firstLetter.toUpperCase());
        });
        console.log("filtered By First Letter",filteredByFirstLetter);

        countWithFirstLetter = filteredByFirstLetter.length;
        filteredResult.textContent = `Countries starting with are ${countWithFirstLetter}`;

        let countryList = document.querySelector('.countryList');
        countryList.innerHTML = "";
        filteredByFirstLetter.forEach((country)=>{
            console.log(country);
            let div = document.createElement('div');
            div.textContent = country;
            div.classList.add('eachCountry');
            div.style.background = hexaGenerator();
            countryList.appendChild(div);
        })
        document.querySelector('.searchInput').value =""; //Why it's moving to left?
    }else{
        alert("Please type only ONE alphabets to search :)");
    }
    /*
    letters= /[a-zA-Z]/g;
    if(letters.test(searchInput)){
        console.log(searchInput);
    }else{
        alert("Please type any alphabets to search :)");
    }

    console.log(letters.test(searchInput));*/
}

const startWordBtn = document.querySelector('.startWordBtn');
startWordBtn.addEventListener("click", ()=>{
    searchWithFirstLetter(countries);
});


const searchWithAnyWords = (arr) =>{
    const searchWords = document.querySelector('.searchInput').value;
    let countWithAnyWords = document.querySelector('.filteredNum');
    let filteredResult = document.querySelector('.filteredResult');

    let numbers= /[0-9]/g;

    if(!numbers.test(searchWords) && (searchWords !== "")){

        console.log(searchWords);
        let filteredBySearchWords= arr.filter((country)=>{
            return country.includes(searchWords);
        });
        console.log("filtered By some words",filteredBySearchWords);

        countWithAnyWords = filteredBySearchWords.length;
        filteredResult.textContent = `Countries searched by ${searchWords} are ${countWithAnyWords}`;

        let countryList = document.querySelector('.countryList');
        countryList.innerHTML = "";
        filteredBySearchWords.forEach((country)=>{
            console.log(country);
            let div = document.createElement('div');
            div.textContent = country;
            div.classList.add('eachCountry');
            div.style.background = hexaGenerator();
            countryList.appendChild(div);
        })
        document.querySelector('.searchInput').value =""; //Why it's moving to left?
    }else{
        alert("Please type any WORDS to search :)");
    }

}

const anyWordBtn = document.querySelector('.anyWordBtn');
anyWordBtn.addEventListener("click", ()=>{
    searchWithAnyWords(countries);
});

/*
const sortedcountries = ()=>{
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for(l of letters){ 
        let times = countries.filter( country => l === country[0]);
        console.log(times);
    }
}

sortedcountries();
*/
//const countriesWithFirstLetter = console.log(searchWords.value);

/*
countries.filter((country)=>{
    let firstLetter = searchWords.toString();
    console.log(firstLetter);
    return country.startsWith(firstLetter);
});*/

//console.log(countriesWithFirstLetter);


