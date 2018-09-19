console.log("Hello from main", countries);
const countTotalNumCountries = (arr)=>{
    const totalNumCountries = document.querySelector('.totalNum');
    totalNumCountries.textContent = arr.length;
}

countTotalNumCountries(countries);

/*
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
*/

const hexaGenerator = () => {
    return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`
};

const displayCountriesDivs = (arr)=>{
    let countryList = document.querySelector('.countryList');
    countryList.innerHTML = "";
    arr.forEach(country =>{
        console.log(country);
        let div = document.createElement('div');
        div.textContent = country;
        div.classList.add('eachCountry');
        div.style.backgroundColor = hexaGenerator();
        countryList.appendChild(div);
    })
}

//https://www.mediacollege.com/internet/javascript/form/limit-characters.html
//key down and up!
/*
const checkMaxInput = (searchChar) => {
    console.log("test", searchChar);
    if(searchChar.value.length > 1){
        searchChar.value = searchChar.value.substring(0, 1);
    }
}*/

const searchCountries= (arr, str) =>{
    let searchInput = document.querySelector('.searchInput').value;    
    let filteredResult = document.querySelector('.filteredResult');

        console.log("str", str);
        let numbers= /[0-9]/g;
    
        filteredResult.innerHTML = "";
        if(!numbers.test(searchInput) && (searchInput !== "")){
            console.log(searchInput);
            let filteredCountries;
            let markupForResult;
           
            if(str === "firstLetter"){
                   //checkMaxInput(searchInput);
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
