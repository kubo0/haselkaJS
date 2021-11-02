const inpDla = document.getElementById("inpDla");
const inpLogin = document.getElementById("inpLogin");
const inpHasło = document.getElementById("inpHasło");
const inpPrześlijDane = document.getElementById("inpPrześlijDane");
const inpClearLocal = document.getElementById("inpClearLocal");
const lsOutput = document.getElementById("lsOutput");
const inpUsuńText = document.getElementById("inpUsuńText");
const inpUsuń = document.getElementById("inpUsuń");

inpPrześlijDane.onclick = function (){
    const dla = inpDla.value;
    const login = inpLogin.value;
    const hasło = inpHasło.value;
    const daneKey = `daneDo-${dla}`;

    if (login && hasło) {
        localStorage.setItem(daneKey, `Login: ${login} Hasło: ${hasło}`);
        
        location.reload();
    }
};

inpClearLocal.onclick = function (){
    localStorage.clear();
    location.reload();
};

inpUsuń.onclick = function (){
    const usuńText = inpUsuńText.value;
    const daneKey = `daneDo-${usuńText}`;

    localStorage.removeItem(daneKey);
    location.reload();
};


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    lsOutput.innerHTML += `${key}: ${value} <br>`;
}