var btn_Next = document.querySelector('.btn-Next')
var btn_Previous = document.querySelector('.btn-Previous')
 var btn_child = document.querySelector('')




var data =[
    
        {
          "id": "1",
          "name": "Lura Senger",
          "email": "Xander_Collier@yahoo.com"
        },
        {
          "id": "2",
          "name": "Wilburn Weber",
          "email": "Bennett_Kreiger11@yahoo.com"
        },
        {
          "id": "3",
          "name": "Tyrique Hahn",
          "email": "Juston.Altenwerth@yahoo.com"
        },
        {
          "id": "4",
          "name": "Lenny Bailey",
          "email": "Guiseppe_Hegmann@yahoo.com"
        },
        {
          "id": "5",
          "name": "Vladimir Keeling",
          "email": "Louisa_Walsh18@hotmail.com"
        },
        {
          "id": "6",
          "name": "Kellie Crona",
          "email": "Chandler_Abernathy@yahoo.com"
        },
        {
          "id": "7",
          "name": "Carolina White",
          "email": "Royal50@hotmail.com"
        },
        {
          "id": "8",
          "name": "Alfredo Conn",
          "email": "Clarabelle34@hotmail.com"
        },
        {
          "id": "9",
          "name": "Stan Shanahan",
          "email": "Lamar.McClure@hotmail.com"
        },
        {
          "id": "10",
          "name": "Marvin Fay",
          "email": "Osbaldo58@hotmail.com"
        },
        {
          "id": "11",
          "name": "Torrance Rau",
          "email": "Orin45@gmail.com"
        },
        {
          "id": "12",
          "name": "Harold Gutmann MD",
          "email": "Alyce.Stracke37@yahoo.com"
        },
        {
            "id": "13",
            "name": "Taryn Torphy",
            "email": "Dean_Breitenberg71@hotmail.com"
          }
]

function child_clicked(e){
    // console.log(e);
    document.querySelector('.parent-data').innerHTML=''
    var for_number = parseInt(e.getAttribute('for'))-1
    console.log(parseInt(e.getAttribute('for')));
    var obtained_data = data[for_number]
    console.log(data[for_number]);
    var creating_div = document.createElement('div')

    creating_div.innerHTML = `
        <p for=${for_number}>${obtained_data.id}</p>
        <p for="name">${obtained_data.name}</p>
        <p for="email">${obtained_data.email}</p>
    `
    document.querySelector('.parent-data').append(creating_div)
    // console.log('child button clicked');

    
}

btn_Next.addEventListener('click',()=>{
    console.log('clicked');
    var user_data = data.length
    var iter_val = (parseInt(user_data/5))*5

    for(i=1;i<=5;i++){

        var taking_for = document.querySelector(`.btn-${i}`)

        var attribute_val = parseInt(taking_for.getAttribute('for'))

        if (iter_val>=attribute_val){

            var increasing_attribute_val = attribute_val + 5

            taking_for.setAttribute('for',increasing_attribute_val)

            taking_for.innerText = increasing_attribute_val
        }

        
    }

})

btn_Previous.addEventListener('click',()=>{
    console.log('clicked');
    for(i=1;i<=5;i++){

        var taking_for = document.querySelector(`.btn-${i}`)

        var attribute_val_for = parseInt(taking_for.getAttribute('for'))

        if (attribute_val_for>5){

            

            var increasing_attribute_val = attribute_val_for - 5

            taking_for.setAttribute('for',increasing_attribute_val)

            taking_for.innerText = increasing_attribute_val
        }

        
    }

}