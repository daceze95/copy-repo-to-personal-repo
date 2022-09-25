async function main() {
 
 const apiUrl = await fetch("https://swapi.dev/api/people");

  //fetch error handling
 if (!apiUrl.ok) {
  const message = `An error has occured: ${response.status}`;
  throw new Error(message);
}

/* 
modified the script to include async/await fuctionality
*/

    const response = await apiUrl.json();
    // console.log(response);

    return response;
  };

    main().then((data) => {

      let img = [
        "https://loremflickr.com/320/240/dog",
        "https://loremflickr.com/320/240",
        "https://dummyimage.com/300",
        "https://placekitten.com/640/360",
        "https://loremflickr.com/320/240/paris",
        "https://loremflickr.com/320/240/brazil,rio",
        "https://loremflickr.com/320/240/paris,girl/all",
        "https://placekitten.com/640/360",
        "https://loremflickr.com/320/240/paris",
        "https://loremflickr.com/320/240/dog",
      ];
    
      let starWarsPerson = document.querySelector("#placeHolder");
    
      let newPerson = "";

      //gets the results array from the json object
      let arr = data.results;

      //add image into array object
      for (let x in arr) {
        if (arr) {
          arr[x].image = img[x];
        }
      }

      //use destructuring and array method to filter the elem in the array.
      let newArr = arr.map(({ name, height, gender, image }) => {
        return { name, height, gender, image };
      });

      //this code block generates the list of names and their properties and attaches it to the html file
      for (let i = 0; i < newArr.length; i++) {

        // document.querySelector('#text').parentElement.removeChild('#text');

        newPerson += `
                  <div class="card">

                    <img src=${newArr[i].image} alt="random image">

                    <div class="personInfo">
                      <h3 class="name">${newArr[i].name}</h3>
                    
                      <p class="birth_year showMe"><strong>Height:</strong>${newArr[i].height}</p>
                      <p class="gender showMe"><strong>Gender:</strong>${newArr[i].gender}</p>
                    </div>

                  </div>
                    `;
      }

      return starWarsPerson.innerHTML = newPerson;

    })
    .catch((err, message) => {
      console.error(err, message);
    }); 

main();

// module.exports = { main };


