const forma = document.getElementById('forma');
const laukas = document.getElementById('laukas');
const uzduotys = document.getElementById('uzduotys');

console.log(laukas);

forma.addEventListener('submit', (event) => {
    event.preventDefault();

    const uzduotiesElementas = document.createElement('li');
    uzduotiesElementas.innerText = laukas.value;
    uzduotys.append(uzduotiesElementas);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
  
    
    // const trintiMygtukas = document.createElement('button');
    // trintiMygtukas.innerText = 'Trinti';
    // trintiMygtukas.addEventListener('click', istrinti);

    // uzduotiesElementas.append(trintiMygtukas);
    // uzduotys.append(uzduotiesElementas);

});

function istrinti(event){
    console.log(event)
    event.srcElement.parentElement.remove();
}
 
// function myFunction() {
//         var x = document.createElement("INPUT");
//         x.setAttribute("type", "checkbox");
//         document.body.appendChild(x);
//       }