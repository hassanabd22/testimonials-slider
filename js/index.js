const info = [
    {
        src:'/images/image-tanya.jpg',
        text:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ” `,
        name:'Tanya Sinclair',
        job:'UX Engineer'
    },
    {
        src:'/images/image-john.jpg',
        text:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name:'John Tarkpor',
        job:'Junior Front-end Developer'
    }
];

let Image = document.getElementById('image');
let text  = document.getElementById('text');
let Name  = document.getElementById('name');
let job   = document.getElementById('job');
let next   = document.querySelector('.next');
let prve  = document.querySelector('.prev')



let num = 0;

window.addEventListener("DOMContentLoaded", function () {
    

});

function getInfo() {
  const item = info[num];
  Image.src = item.src;
  text.textContent = item.text;
  Name.textContent = item.name;
  job.textContent= item.job;
};



next.addEventListener('click', function (){
    num++;
    if (num > info.length -1) {
        num = 0;
    }
    getInfo(num)
})

prve.addEventListener('click', function (){
    num--;
    if (num < 0) {
        num = info.length -1;
    }
    getInfo(num)
})




