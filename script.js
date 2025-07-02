console.log('hello')
function fetchData(){
    fetch('https://randomuser.me/api')
    .then((res)=>res.json())
    .then((data)=>display(data))
    .catch((err)=>console.log(err))
}
fetchData();
setInterval(()=>fetchData(),4000)
function display(userInfo){
    // for image
    document.getElementById('main').textContent="";
    let div1=document.createElement('div')
    div1.classList.add('image_class')
    const image=document.createElement('img');
    image.src=userInfo.results[0].picture.large;
    image.alt="user_image"
    image.style.borderRadius="50%";
    div1.appendChild(image)

    //creating div for name,dob,gender,contact etc......

    const div2=document.createElement('div')
    div2.classList.add('user_information');
    // for name
    const userName=document.createElement('h2')
    userName.textContent="Name: "+userInfo.results[0].name.title +""+". "+userInfo.results[0].name.first+" "+userInfo.results[0].name.last

    // for gender
    const gender=document.createElement('p')
    gender.textContent="gender: "+userInfo.results[0].gender;

    //for location
    const user_location=document.createElement('p');
    user_location.textContent="Location: "+userInfo.results[0].location.city+","+userInfo.results[0].location.state+","+userInfo.results[0].location.country

    // for gmail
    const gmail=document.createElement('p');
    gmail.textContent="Email: "+userInfo.results[0].email

    // for dob
    const user_dob=document.createElement('p');
    user_dob.textContent="DOB: "+userInfo.results[0].dob

    // for contact_information
    const user_contact=document.createElement('p');
    user_contact.textContent="Phone No: "+userInfo.results[0].phone+"  "+"Cell No: "+userInfo.results[0].cell

    // add all user information to div2
    // div2.append(userName,gender,user_location,gmail,user_contact)
    div2.append(
        userName,
        gender,
        user_location,
        gmail,
        user_dob,
        user_contact
      );
    document.getElementById('main').append(div1,div2);
}
console.log('hyy');