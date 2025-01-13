// The fetch api provide an interface for fetching (send/recive) resources
// It uses Request and Response objects
// The fetch() method is used to fetch a resource(data)

//const fetch = fetch(URL. [options]);

// URL: The URL of the resource you want to fetch
// options: An optional object containing any custom settings that you want to apply to the request
// It returns a promise that resolves to the Response to that request, whether it is successful or not

const URL = "https://cat-fact.herokuapp.com/facts";



const getFacts = async () => {

    console.log("Fetching data...");   
    let response = await fetch(URL);
    console.log(response.response); //JSON 

}