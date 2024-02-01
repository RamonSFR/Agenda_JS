let pfp = document.getElementById('pfp');
let fotoInput = document.getElementById('foto');
const form = document.querySelector("#cadastro");

fotoInput.onchange = () =>{
    pfp.src = URL.createObjectURL(fotoInput.files[0]);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})