console.log("Hello from main", countries);
const countTotalNumCountries = (arr)=>{
    const totalNumCountries = document.querySelector('.totalNum');
    totalNumCountries.textContent = arr.length;
}

countTotalNumCountries(countries);

const hexaGenerator = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

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

            let countryList = document.querySelector('.countryList');
            countryList.innerHTML = "";
            filteredCountries.forEach((country)=>{
                console.log(country);
                let div = document.createElement('div');
                div.textContent = country;
                div.classList.add('eachCountry');
                div.style.background = hexaGenerator();
                countryList.appendChild(div);
            })
            document.querySelector('.searchInput').value =""; //Why it's moving to left?
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
