let pfp = document.getElementById('pfp');
let fotoInput = document.getElementById('foto');

fotoInput.onchange = function(){
    pfp.src = URL.createObjectURL(fotoInput.files[0]);
}