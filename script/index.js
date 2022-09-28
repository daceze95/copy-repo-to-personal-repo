async function main() {
 const url = "https://swapi.dev/api/people/?page=1"

 
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
        {src:"images/luke.jpeg", alt:"luke_skywalker"},
        {src:"images/C-3PO.jpeg", alt:"C-3PO_by_DevianartPinterest"},
        {src:"images/R2-D2.png", alt:"R2-D2_by_Geek_Carl_Pinterest"},
        {src:"images/darth.jpeg", alt:"Darth_varder_by_Devianart Pinterest"},
        {src:"images/Leia.jpeg", alt:"Leia_organa_by_Artstation Pinterest"} ,
        {src:"images/owens.jpeg", alt:"Owens_by_click.linksynergy.com Pinterest"},
        {src:"images/Beru.jpeg", alt:"Beru_by_Annie _ilkinson Pinterest"},
        {src:"images/R5-D4.jpeg", alt:"R5-D5_by_artmarta_Pinterest"},
        {src:"images/Biggs.jpeg", alt:"Biggs_by_thefloodgallery.com Pinterest"},
        {src:"images/obiwan.jpeg", alt:"Obi_wan_by_Algozel_Pinterest"}
      ];

      // let button = document.querySelector(".btn");

      let starWarsPerson = document.querySelector("#placeHolder");
    
      let newPerson = "";

      //gets the results array from the json object
      let arr = data.results;

      //add image into array object
      for (let x in arr) {
        if (arr) {
          arr[x].image = img[x].src;
          arr[x].alt = img[x].alt;
        }
      }
      

      //use destructuring and array method to filter the elem in the array.
      //Therefore, the filtered array is what we work with
      let newArr = arr.map(({ name, height, gender, image, alt }) => {
        return { name, height, gender, image, alt };
      });


        
               

      //this code block generates the list of names and their properties and attaches it to the html file
      for (let i = 0; i < newArr.length; i++) {
        // document.querySelector('#text').parentElement.removeChild('#text')
        newPerson += `
                  <div class="card">

                    <img src=${newArr[i].image} alt=${newArr[i].alt}>

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