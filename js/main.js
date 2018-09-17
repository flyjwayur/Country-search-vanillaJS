console.log("Hello from main", countries);
const countTotalNumCountries = (arr)=>{
    const totalNumCountries = document.querySelector('.totalNum');
    totalNumCountries.textContent = arr.length;
}

countTotalNumCountries(countries);

const hexaColor = function() {
    let numbersLetters = '0123456789abcdef'.split('');
    let hexaNumbers = '';
    let randIndex;
    for (let i = 0; i < 6; i++) {
    randIndex = Math.floor(Math.random() * numbersLetters.length);
    hexaNumbers += numbersLetters[randIndex];
    }
    return '#' + hexaNumbers;
    };


/* const hexaGenerator = () => {
    return "#" + Math.floor(Math.random() * 17895697).toString(16);
    //return "#" + Math.floor(Math.random() * 16777215).toString(16);
}; */

const displayCountriesDivs = (arr)=>{
    let countryList = document.querySelector('.countryList');
    countryList.innerHTML = "";
    arr.forEach(country =>{
        console.log(country);
        let div = document.createElement('div');
        div.textContent = country;
        div.classList.add('eachCountry');
        div.style.backgroundColor = hexaColor();
        countryList.appendChild(div);
    })
}



/*
const checkMaxInput = () => {
    (searchInput.length === 1){

    }
}*/

let searchInput = document.querySelector('.searchInput').value;    
let filteredResult = document.querySelector('.filteredResult');
const searchCountries= (arr, str) =>{
    

        console.log("str", str);
        let numbers= /[0-9]/g;
    
        filteredResult.innerHTML = "";
        if(!numbers.test(searchInput) && (searchInput !== "")){
            console.log(searchInput);
            let filteredCountries;
            let markupForResult;
           
            if(str === "firstLetter"){
                   filteredCountries = arr.filter((country)=>{
                    return country.startsWith(searchInput.toUpperCase());
                });

                markupForResult = `Countries starting <span>${searchInput}</span> with are <span>${filteredCountries.length}<span>`;
                filteredResult.insertAdjacentHTML('afterbegin', markupForResult);
                console.log("filtered By First Letter",filteredCountries);

            }else if(str === "anyWord"){
                  filteredCountries= arr.filter((country)=>{
                    return country.includes(searchInput);
                });

                const markupForResult = `Countries contain <span>${searchInput}</span> are <span>${filteredCountries.length}</span>`;
                filteredResult.insertAdjacentHTML('afterbegin', markupForResult);
                console.log("filtered By some words",filteredCountries);
            }          
            displayCountriesDivs(filteredCountries); 
            document.querySelector('.searchInput').value =""; 
        }else{
            alert("Please type an first Letter/words to search :)");
        }
 }

const startWordBtn = document.querySelector('.startWordBtn');
startWordBtn.addEventListener("click", ()=>{
    let firstLetter = "firstLetter";
    searchCountries(countries, firstLetter);
});

const anyWordBtn = document.querySelector('.anyWordBtn');
anyWordBtn.addEventListener("click", ()=>{
    let anyWord = "anyWord";
    searchCountries(countries, anyWord);
});
