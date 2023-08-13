let buttonRand = document.getElementsByTagName("button")[0];
let firstName = document.createElement("h3");
let email = document.createElement("p");
let img = document.createElement("img");
let age = document.createElement("p");
let body = document.getElementsByTagName("body")[0];
body.append(firstName, email, img, age);

//exercise 1.1
buttonRand.addEventListener("click", async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    if (response.ok) {
      const data = await response.json();
      console.log(data.results[0]);
      firstName.innerText = data.results[0].name.first;
      email.innerText=data.results[0].email
      img.src=data.results[0].picture.medium;
      age.innerText=data.results[0].dob.age
    }
  } catch (error) {
    throw new Error("error");
  }
});

//exercise 1.2
let buttonMale=document.getElementsByTagName("button")[1];
buttonMale.addEventListener("click", async () => {
    try {
      const response1 = await fetch("https://randomuser.me/api?results=5&gender=male");
      if (response1.ok) {
        const data = await response1.json();
        console.log(data);
        
      }
    } catch (error) {
      throw new Error("שגיאה");
    }
  });