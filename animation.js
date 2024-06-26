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
let div3_image = document.querySelector('div3_image');
let div3_content = document.querySelector('.div_content');

// const observer1 = new IntersectionObserver((entry,observer) => {
//     if(entry.isIntersecting) {
//         entry.target.classList.add('show1');
//     }
// },{
//     root:null,
//     rootMargin:'100px',
//     threshold:0.5,
// });
// const observer2 = new IntersectionObserver((entry,observer) => {
//     if(entry.isIntersecting) {
//         entry.target.classList.add('show1');
//     }
// },{
//     root:null,
//     rootMargin:'100px',
//     threshold:0.5
// })
window.addEventListener('scroll',() => {
    courses.forEach((course) => {
        observer.observe(course);
    });
    
});

// window.addEventListener('scroll',() => {
//     observer1.observe(div3_image);
//     observer2.observe(div3_content);
// })

const div3_img = document.querySelector('.div3_image');
const div3_con = document.querySelector('.div3_content');

window.addEventListener('scroll',()=>{
    let inheight = window.innerHeight/12*11;
    let currentHeight = div3_img.getBoundingClientRect().top;
    if(inheight > currentHeight){
        div3_img.classList.add('show1');
        
    }
});
window.addEventListener('scroll',() => {
    let inheight1 = window.innerHeight/12*11;
    let currentHeight1 = div3_con.getBoundingClientRect().top;
    if(inheight1 > currentHeight1) {
        div3_con.classList.add('show1');
    }
})
let nav = document.querySelector('.nav');
window.addEventListener('scroll',()=>{
    nav.classList.add('activate');
})

