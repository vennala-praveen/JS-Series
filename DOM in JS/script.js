// var h1 = document.querySelector('h1');
// document.title="DOM";

// h1.addEventListener('click', function(){
//     h1.innerHTML = 'DOMString'
//     h1.style.color = 'red'
//     h1.style.backgroundColor = 'blue'
//     console.log('Yesterday Mens day!');
// })

function follow(){
   const btnEle = document.querySelector('.btn');

   if(btnEle.innerText === 'Follow'){
    btnEle.innerHTML = 'Follower';
   }else{
    btnEle.innerHTML = 'Follow';
   }
}