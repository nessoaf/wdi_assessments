var buttoninc = document.getElementById('inc'),
buttondec = document.getElementById('dec'),
count = 0,
dis = document.getElementById('display'),
distxt = document.getElementById('display'),
i = document.getElementById('input')

i.addEventListener('change', update)
function update(e){
    count=e.target.value
}

function inc() {
    console.log('+')
    count = count + parseInt(i.value);
    console.log(count)
    dis.innerHTML = count  
    if (count > 0) {
        document.getElementById('display').style.color = 'blue'  
    }
}
function dec() {
    count = count - parseInt(i.value);
    dis.innerHTML = count
    if (count < 0) {
        document.getElementById('display').style.color = 'red'
    }
}
























//took me 30 min becuase i mispelt something..... god damn
// var buttoninc = document.getElementById("inc"),
//     dis = document.getElementById('display')
// count = 0;
// buttoninc.onclick = function () {
//     count += 1;
//     dis.innerHTML = count;
//     if (count > 0) {
//         document.getElementById('display').style.color = 'blue'
//     }
// };
// var buttondec = document.getElementById('dec')
// buttondec.onclick = function () {
//     count -= 1;
//     dis.innerHTML = count
    // if (count < 0) {
    //     document.getElementById('display').style.color = 'red'
    // }
// }