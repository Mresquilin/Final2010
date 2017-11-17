


const selectBreed = document.querySelector('#selectBreed')
const viewDog  = document.querySelector('#viewDog')
const randomButton = document.querySelector('#randomButton')

//const dog_api = 'https://dog.ceo/dog-api/'
const randomEndpoint = '/Special:Random'
// let breeds = result.message;
    
    
 
 
 
    
let ajaxSearch = function(){
    //console.log("Ready for ajax search")
     selectBreed.innerHTML = ""
    const api_url = `https://dog.ceo/api/breeds/list/all`
 
     $.ajax({
         type: "GET",
         url: api_url,
         async: false,
         dataType: "json",
         success: function(data){

            let messege= data
            console.log(message.message)
             
            
             
              }
            
        
        })
            // error: function(err){
            // //console.log("There was error")
    //     }
    // })

// }
// let randomSearch = () => {
//     window.open(`${dog_api}${randomEndpoint}`)
 }



// randomButton.addEventListener('click', randomSearch)


 viewDog.addEventListener('click', ajaxSearch)
    