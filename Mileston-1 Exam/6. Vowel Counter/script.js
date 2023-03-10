// vowel count in Name
const submit = document.getElementById('button');
submit.addEventListener("click", () => {
  const nameInput = document.getElementById('nameInput').value; // innerText or textContain not working
  let vowelCount = 0;
  for (let i = 0; i < nameInput.length; i++) {
    let char = nameInput.charAt(i).toLowerCase();
    if(char=='a' || char=='o' || char=='e'|| char=='i' || char=='u') {
    vowelCount++ ;
    }
  }
  document.getElementById('result').textContent = `Your name has ${vowelCount} vowels.` ;
});