let users=[
    {
        name:"Hovo Sargsyan",
        country:"Armenia",
        age:"25",
        gender:"male"
    },

    {
        name:"Karen Manukyan",
        country:"USA",
        age:"26",
        gender:"male"
    },

    {
        name:"Gayan Vardanyan",
        country:"Russia",
        age:"27",
        gender:"female"
    },

    {
        name:"Karine Sargsyan",
        country:"Russia",
        age:"28",
        gender:"female"
    },
    
    {
        name:"Marine Sargsyan",
        country:"USA",
        age:"29",
        gender:"female"
    },

    {
        name:"Kima Sargsyan",
        country:"Armenia",
        age:"30",
        gender:"female"
    },
]






let userBox = document.querySelector("#user_box")
let searchButton=document.querySelector("#search_btn")
let searchText=document.querySelector("#search_text")


 let filtersNav=document.querySelector("#filters_nav")
 let ubdateFiltersBtn=document.querySelector("#ubdate_filters")

 let loginBtn=document.querySelectorAll(".login_btn")
 let emailInput=document.querySelector("#email")

 
 
 
 loginBtn[0].addEventListener("click",openHideLogin)
// loginnerna bacum pakum

 loginBtn[1].addEventListener("click",openHideLogin)




//  logini funkcian bacec pakec
 function openHideLogin(){
     let loginBox = document.querySelector("#login_box")
     if(loginBox.style.display==='' || loginBox.style.display==='none')
    {
        loginBox.style.display='block'
    }else{
        loginBox.style.display='none'
    }
 }






 emailInput.addEventListener("keyup",function(){
     let emailMessage = document.querySelector("#email_message")
     if(emailInput.value.includes("@"))
     {
         emailMessage.innerHTML="ok";
         emailMessage.style.color="white"
     }else{
        emailMessage.innerHTML="invalid message";
        emailMessage.style.color="red" 
     }
 })
ubdateFiltersBtn.addEventListener("click",function(){
    let currentCountry=document.querySelector("#countri_filter").value.toLocaleLowerCase();
    let currentGender=document.querySelector("#gender_filter").value.toLocaleLowerCase();

    
    let filteredUsers=users.filter(function(user){
        return (user.country.toLocaleLowerCase().includes(currentCountry) &&
                user.gender.toLocaleLowerCase().includes(currentGender)&&
                user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())  
        );
    })
   
    
    userBox.innerHTML = "";
    for(user of filteredUsers)
{
    let userElement=document.createElement("DIV");

    userElement.classList.add("user_item")  
    userElement.innerHTML=`
    <h2>${user.name}</h2>
    <p>Country:${user.country}</p>
    <p>Age:${user.age}</p>
    <p>Gender:${user.gender}</p>
    <button>Button</button>
    `;
    userBox.appendChild(userElement);
}

});


filtersNav.addEventListener("click",function(){
    let filtersBox=document.querySelector("#filters")
    if(filtersBox.style.display==='' || filtersBox.style.display==='none')
    {
        filtersBox.style.display='block'
    }else{
        filtersBox.style.display='none'
    }
})



searchButton.addEventListener("click",function(){
    let filteredUsers=users.filter(function(user){
        return (
            user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())||
            user.country.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())||
            user.gender.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())||
            user.age.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
            
        )
              
       
    });


 

    userBox.innerHTML = "";
    for(user of filteredUsers){
        let userElement=document.createElement("DIV");

        userElement.classList.add("user_item")  
        userElement.innerHTML=`
        <h2>${user.name}</h2>
        <p>Country:${user.country}</p>
        <p>Age:${user.age}</p>
        <p>Gender:${user.gender}</p>
        <button>Button</button>
        `;
        userBox.appendChild(userElement);
    }
});













for(user of users)
{
    let userElement=document.createElement("DIV");

    userElement.classList.add("user_item")  
    userElement.innerHTML=`
    <h2>${user.name}</h2>
    <p>Country:${user.country}</p>
    <p>Age:${user.age}</p>
    <p>Gender:${user.gender}</p>
    <button>Button</button>
    `;
    userBox.appendChild(userElement);
}


