document.addEventListener('DOMContentLoaded', function (){
    let body = document.body;
    let paragraphs = document.getElementsByName('p')
    let dropdown = document.getElementById('features-control');
    dropdown[1].addEventListener('click', function (){
        console.log(paragraphs.classList);
        body.classList.replace('cMode_Page', 'dMode_Page');

        paragraphs.classList.add('dMode_writings');
    })
})