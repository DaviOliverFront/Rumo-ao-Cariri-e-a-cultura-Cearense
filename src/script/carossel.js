let prevData = document.getElementById('prev_a')
let nextData = document.getElementById('next_a')
let containerDiv = document.querySelector('.images')
prevData.addEventListener('click', (e) => prev(e));
nextData.addEventListener('click', (e) => next(e))


const screenWidth = screen.width; 
const elements = `
    <div class="container_slider" id='' style="z-index: 1;">
        <img src="../public/images/pontos_turisticos/estatua.png" alt="Imagem 1" id="image_1" title=" Estátua Padre Cicero">
        <img src="../public/images/pontos_turisticos/Igreja_bom_jesus.png" alt="Imagem 2" id="image_2" title="Igreja Bom Jesus do Horto">
    </div>
    <div class="container_slider" id='' style="opacity: 0;">
        <img src="../public/images/pontos_turisticos/museu-vivo-do-padre-cicero.png" alt="Imagem 3" id="image_3" title="Casarão Padre Cicero">
        <img src="../public/images/pontos_turisticos/memorial-padre-cicero.png" alt="Imagem 4" id="image_4" title="Memorial Padre Cicbero">
    </div>
    <div class="container_slider" id='' style="opacity: 0;" >
       <img src="../public/images/pontos_turisticos/parque_ecologico.png" alt="Imagem 5" id="image_5" title="Paque Ecológico Timbaúbas">
        <img src="../public/images/pontos_turisticos/Praça_Padre_Cicero.png" alt="Imagem 6" id="image_6" title="Praça Padre Cicero">
    </div>
    <div class="container_slider" id='' style="opacity: 0;">
       <img src="../public/images/pontos_turisticos/santo-sepulcro-horto.png" alt="Imagem 7" id="image_7" title="Trilha do Santo Sepulcro">
        <img src="../public/images/pontos_turisticos/shopping.png" alt="Imagem 8" id="image_8" title=" Cariri Garden Shopping">
    </div>
    `

if(screenWidth < '931'){
    containerDiv.innerHTML = ''
    containerDiv.innerHTML = elements
    
}
let containerSlider = document.querySelectorAll('.container_slider')


function showSlider(index) {
    containerSlider[index].style.width = '100%';
    containerSlider[index].style.opacity = '1';
    containerSlider[index].id = ''; 
}

function hideSlider(index) {
    containerSlider[index].style.width = '0%';
    containerSlider[index].style.opacity = '0';
    containerSlider[index].id = 'width-zero';
}

function removeIdPrev(index){
    containerSlider[index].id = ''
}

function addPrev(index){
    containerSlider[index].id = 'width-zero'
}

function next(e) {
    e.preventDefault()
    if(screenWidth > '931'){
        if(containerSlider[0].id === 'width-zero'){
            hideSlider(1)
            return
        }
        hideSlider(0)
        showSlider(1)
    }else{
        if(containerSlider[0].id === 'width-zero' && !containerSlider[1].id){
            showSlider(2)
            hideSlider(1)
            removeIdPrev(0)
            return
        }
        else if(containerSlider[1].id === 'width-zero' && !containerSlider[2].id){
            showSlider(3)
            hideSlider(2)
            removeIdPrev(1)
            return
        }
        if(containerSlider[2].id === ''){
            showSlider(1)
            hideSlider(0)
        }
    }
}
function prev(e) {
    e.preventDefault()
    if(screenWidth > '931'){
        if(containerSlider[1].id === 'width-zero'){
            showSlider(1)
            return
        }
        if(containerSlider[0].id === 'width-zero'){
            showSlider(0)
        }
    }else{
        if(containerSlider[2].id === 'width-zero'){
            showSlider(2)
            hideSlider(3)
            removeIdPrev(3)
            addPrev(1)
            return
        }
        if(containerSlider[1].id === 'width-zero'){
            showSlider(1)
            hideSlider(2)
            removeIdPrev(2)
            addPrev(0)
            return
        }
        if(containerSlider[0].id === 'width-zero'){
            showSlider(0)
            hideSlider(1)
            removeIdPrev(1)
            removeIdPrev(0)
        }
    }
}
    

