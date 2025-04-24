const n1 = document.getElementById("name1");
const n2 = document.getElementById("name2");
const cor = document.getElementById("course");
const sec = document.getElementById("sec_num");
const rol = document.getElementById("role");
const sub = document.getElementById("submit");
sub.addEventListener('click',logit);

function logit(){
    let jason = {
        "firstName":n1.value,
        "lastName":n2.value,
        "course":cor.value,
        "section":sec.value,
        "role": rol.value,
    }
    console.log(jason);
    console.log(JSON.stringify(jason));
    event.preventDefault();
}
