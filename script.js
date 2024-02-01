let pfp = document.getElementById('pfp');
let fotoInput = document.getElementById('foto');
const form = document.querySelector("#cadastro");
let contatosNomes = [];
let contatosNs = [];
let linhas = '';


fotoInput.onchange = () =>{
    pfp.src = URL.createObjectURL(fotoInput.files[0]);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const nome = document.querySelector('#nome');
    const tel = document.querySelector('#num');
    let foto = document.querySelector('#foto');

    if (contatosNomes.includes(nome.value) || contatosNs.includes(tel.value)) {
        alert("Esse contato já existe!")
    } else {
        contatosNomes.push(nome.value);
        contatosNs.push(tel.value);

        let linha = '<tr>';
        if (foto != '') {
            linha += `<td><img src="./imagens/profile.png" alt="Foto de Perfil"></td>`
        } else {
            linha += `<td><img src="./imagens/profile.png" alt="Foto de Perfil"></td>`
        }
        linha += `<td>${nome.value}</td>`
        linha += `<td>${tel.value}</td>`
        linha += `</tr>`

        linhas += linha;

        nome.value = '';
        tel.value = '';
        foto.value = ''
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}