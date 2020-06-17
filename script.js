var buttoninc = document.getElementById('inc'),
buttondec = document.getElementById('dec'),
count = document.getElementById('input'),
dis = document.getElementById('display')

function inc() {
    console.log('+')
    count += 1
    dis.innerHTML = count + count
    
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
//     if (count < 0) {
//         document.getElementById('display').style.color = 'red'
//     }
// }