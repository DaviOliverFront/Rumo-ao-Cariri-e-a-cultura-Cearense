let prevData = document.getElementById('prev_a')
let nextData = document.getElementById('next_a')

prevData.addEventListener('click', (e) => prev(e));
nextData.addEventListener('click', (e) => next(e))

function next(e) {
    e.preventDefault()
    if(window.location.href.includes('#image_6')){
        window.location.href = '#image_9'
    }if(window.location.href.includes('#image_9')) return
    window.location.href = '#image_6'
}

function prev(e) {
    e.preventDefault()
    if(window.location.href.includes('#image_9')){
        window.location.href = '#image_4'
    }else{
         window.location.href = '#image_1'
    }
}
