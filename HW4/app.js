function getCountry() {
    const countryData = async () => {
        let country = document.getElementById('searchCountry').value
        const request = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const data = await request.json();

        return data;
    }

    countryData().then(country => {
        document.getElementById('results').innerHTML = '';
        document.getElementById('results').innerHTML = "<b>Country: </b>" + country[0].name + "<b> Capital: </b> " + country[0].capital + "<br> <br>";
        document.getElementById('results').innerHTML += "<a><img width= 250 height= 200 src=" + country[0].flag + "></a> <br><br>";
        document.getElementById("results").innerHTML += "<a href = 'https://www.google.com/maps/place/" + country[0].name + "'>Location Map</a>";
    })
}

function getRegion() {
    const regionData = async () => {
        let region = document.getElementById('regions').value
        const request = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const data = await request.json();

        return data;
    }

    regionData().then(region => {
        document.getElementById("results").innerHTML = "";
        // creates a new array for the countries
        countries = []
        for(i = 0; i < region.length; i++){
            countries.push(["<b>Country: </b>" + region[i].name + " <b>Capital: </b>" + region[i].capital])
        }
        // sorts countries so they can be displayed in alphabetical order
        countries.sort();
        for(i = 0; i < countries.length; i++) {
            document.getElementById('results').innerHTML += `${countries[i]} <br>`;
        }
    })
}