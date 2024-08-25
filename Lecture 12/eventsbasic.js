// console.log('Jay Shree Krishna');

// document.getElementById('owl').onclick = function () {
//     alert("owl clicked")
// }



/* 

document.getElementById('images').addEventListener('click', (e) => {
    console.log('clicked inside the ul');
},false)

document.getElementById('owl').addEventListener('click', (e) => {
    console.log('owl clicked');
    e.stopPropagation();
},false)

document.getElementById('google').addEventListener('click', (e) => {
    console.log('google clicked');
    e.preventDefault();
    e.stopPropagation();
},true)


*/


document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
    
}, false)

// removeIt.parentNode.removeChild(removeIt);