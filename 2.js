let rew= document.querySelector('.rewiew');

let clos = document.querySelector('.close');

console.log(1111);

function closeRewiew() {
    clos.addEventListener('click', function (e) {
        e.preventDefault();
        rew.style.display = 'none';
    })
}
closeRewiew();