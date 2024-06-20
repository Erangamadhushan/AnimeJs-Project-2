const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            
        }
    })
},{
    root:null,
    rootMargin:'100px',
    threshold:0.6,
})
let courses = document.querySelectorAll('.courses');
window.addEventListener('scroll',() => {
    courses.forEach((course) => {
        observer.observe(course);
    })
})