var array = [
    {
        image: "https://images3.alphacoders.com/138/thumb-440-1383735.webp",
        username: "Sung Jinwoo",
        age: 27,
        married:true,
        status: 'stranger'
    },
            
    {
        image: "https://mfiles.alphacoders.com/100/thumb-350-1007437.jpeg",
        username: "Gojo Satoru",
        age: 25,
        married:true,
        status: 'stranger'
    },
            
    {
        image: "https://avatarfiles.alphacoders.com/341/thumb-350-341398.webp",
        username: "Nagi Seishiro",
        age: 24,
        married:true,
        status: 'stranger'
    },
            
    {
        image: "https://images3.alphacoders.com/946/thumb-440-94605.webp",
        username: "Ichigo Kurosaki",
        age: 20,
        married:true,
        status: 'stranger'
    },
            
    {
        image: "https://images6.alphacoders.com/100/thumb-440-1001037.webp",
        username: "Aizen Sousuke",
        age: 30,
        married:true,
        status: 'stranger'
    },

    {
        image: "https://images4.alphacoders.com/137/thumb-440-1378902.webp",
        username: "Isagi Yoichi ",
        age: 24,
        married:true,
        status: 'stranger'
    },

];


function eventChange(){

var arr =''

array.forEach(function(e, idx){
    arr = arr + `<div class="card">
        <img src="${e.image}" alt="image not found">
        <h2>${e.username}</h2>
        <h5>${e.age}</h5>
        <h4>Married:${e.married}</h4>
        <h3>${e.status}</h3>
        <button id=${idx}>Add a friend</button>
        </div>`
});

var main = document.querySelector('#main');
main.innerHTML = arr

}

eventChange();

main.addEventListener('click', function(dets){
    var silver = array[dets.target.id]
    console.log(silver);
    silver.status = 'friends'
    eventChange();
});