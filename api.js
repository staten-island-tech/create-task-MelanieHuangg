const URL = GET api/fruit/all

async function getData(URL)
try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data)
} catch (error){
    console.log(error);
};

getData(URL)