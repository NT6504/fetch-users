const fetchuserbutton = document.getElementById('fetchuserbutton');
const userDataDisplay = document.getElementById('userDataDisplay');

fetchuserbutton.addEventListener('click', fetchUser);

async function fetchUser(){
    let response = await fetch('https://reqres.in/api/users');
    let res = await response.json();
    displayUser(res.data)
}

function  displayUser(users){
     userDataDisplay.innerHTML =""

     users.forEach((user)=>{
        userDataDisplay.innerHTML+= '
     
    <div class="user-card">
        <img class="user-avatar" src="${user.avatar}" alt="">
        <div class="user-name">${user.first_name} ${user.last_name}</div>
        <div class="user-email">${user.email}</div>
        
    </div>
    })
}