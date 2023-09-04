document.getElementById('formReg').addEventListener('submit', function(event){
    event.preventDefault();

const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const fechaNac = document.getElementById('fechaNac').value;

const infoForm={
    nombre,
    apellido,
    fechaNac
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(infoForm)
})
.then (Response => Response.json())
.then (data =>{
    console.log(data);
})
    .catch (error => console.error ('Error:', error));
});