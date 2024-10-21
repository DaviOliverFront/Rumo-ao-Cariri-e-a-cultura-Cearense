let prevData = document.getElementById('prev_a')
let nextData = document.getElementById('next_a')
let containerSlider = document.querySelectorAll('.container_slider')
prevData.addEventListener('click', (e) => prev(e));
nextData.addEventListener('click', (e) => next(e))

function next(e) {
    e.preventDefault()
    if(containerSlider[0].id === 'width-zero'){
        containerSlider[1].style.width = '0%';
        containerSlider[1].style.opacity = '0';
        containerSlider[1].id = 'width-zero';
        return
    }
    containerSlider[0].style.width = '0%';
    containerSlider[0].style.opacity = '0';
    containerSlider[0].id = 'width-zero';
}
function prev(e) {
    e.preventDefault()
    if(containerSlider[1].id === 'width-zero'){
        containerSlider[1].style.width = '100%';
        containerSlider[1].style.opacity = '1';
        containerSlider[1].id = '';
        return
    }
    if(containerSlider[0].id === 'width-zero'){
        containerSlider[0].style.width = '100%';
        containerSlider[0].style.opacity = '1';
        containerSlider[0].id = '';
    }

}