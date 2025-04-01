// 1
const nomeUsuario = document.querySelector('#nome-usuario');
nomeUsuario.textContent = 'Maria Garnham';



// 2

const avatar = document.querySelector('#foto-perfil');
avatar.src = "img/brownie.jpg";



// 3
const containerPerfil = document.querySelector('#container-perfil');
containerPerfil.style.backgroundColor = "#f3f5d9";


//4
// 4
const badgeStatus = document.querySelector('#badge-status');
badgeStatus.classList.add('online');
badgeStatus.textContent = 'Status: Ativo';




// 5
const skills = document.querySelectorAll('#lista-skills li');
console.log(`Total de skills: ${skills.length}`);



















