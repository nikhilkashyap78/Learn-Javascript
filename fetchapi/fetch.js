// The fetch api provide an interface for fetching (send/recive) resources
// It uses Request and Response objects
// The fetch() method is used to fetch a resource(data)

//const fetch = fetch(URL. [options]);

// URL: The URL of the resource you want to fetch
// options: An optional object containing any custom settings that you want to apply to the request
// It returns a promise that resolves to the Response to that request, whether it is successful or not

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const factBtn = document.querySelector("#btn");

/////////////// USING FETCH API ////////////////////

const getFacts = async () => {

    console.log("Fetching data...");   
    let response = await fetch(URL);

    console.log(response.response); //JSON format

    let data = await response.json(); //converts JSON to JS object (readable)
    console.log(data[0].text);

    factPara.innerHTML = data[2].text;

};

/////////////// USING PROMISE CHAIN ////////////////////

// function getFacts(){
//     fetch(URL).then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerHTML = data[0].text;
//     });
// }

factBtn.addEventListener("click", getFacts);