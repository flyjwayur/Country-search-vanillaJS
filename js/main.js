const elements = {
  inputStartWord: document.querySelector("#startWord"),
  inputAnyWord: document.querySelector("#anyWord"),
  totalNumCountries : document.querySelector(".totalNum"),
  countryList : document.querySelector(".countryList"),
  filteredResult : document.querySelector(".filteredResult"),
  search : document.querySelector(".searchInput")
};

const countTotalNumCountries = arr => {
  elements.totalNumCountries.textContent = arr.length;
};

countTotalNumCountries(countries);

const hexaGenerator = () => {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0")}`;
};

const displayCountriesDivs = arr => {
  elements.countryList.innerHTML = "";
  arr.forEach(country => {
    let div = document.createElement("div");
    div.textContent = country;
    div.classList.add("eachCountry");
    div.style.backgroundColor = hexaGenerator();
    elements.countryList.appendChild(div);
  });
};

const inputValidation = input => {
/*  'Empty value in the input' is also valid,
 so that cleaning keyword for users will be possible 
 also it allows user's mistake to type space between letters
 It only restrics on typing numbers and special chracters */
  let letterRegex = /^[ a-zA-Z]*$/;
  if (letterRegex.test(input.value)) {
    return true;
  }else{
    return false;
  }
};

const searchByStartWord = (arr, searchWord) => {

  elements.filteredResult.innerHTML = "";

  let filteredCountries;
  let markupForResult;

  filteredCountries = arr.filter(country => {
    return country.toLowerCase().startsWith(searchWord);
  });

  markupForResult = `Countries starting <span class="resultSpan">${searchWord}</span> with are 
  <span class="resultSpan">${filteredCountries.length}<span>`;

  elements.filteredResult.insertAdjacentHTML("afterbegin", markupForResult);
  displayCountriesDivs(filteredCountries);
};

const searchByAnyWords = (arr, searchWord) => {

  elements.filteredResult.innerHTML = "";

  let filteredCountries;
  let markupForResult;

  filteredCountries = arr.filter(country => {
    return country.toLowerCase().includes(searchWord);
  });

  markupForResult = `Countries contain <span class="resultSpan">${searchWord}</span> 
                    are <span class="resultSpan">${filteredCountries.length}</span>`;
  elements.filteredResult.insertAdjacentHTML("afterbegin", markupForResult);
  displayCountriesDivs(filteredCountries);
};

// listen user input in search field
elements.search.addEventListener("keyup", e => {
  const searchWords = document.querySelector(".searchInput");

  if (inputValidation(e.target)) {
    if (elements.inputStartWord.checked) {
        searchWords.maxLength = 1;
        searchByStartWord(countries, searchWords.value.toLowerCase());   
    }else{
        searchWords.maxLength = 100;
        searchByAnyWords(countries, searchWords.value.toLowerCase());   
    }
  } else if(!inputValidation(e.target)) {
    alert("Please type the letters :D");  
  }
});

//As default, display all countries in arr
displayCountriesDivs(countries);
