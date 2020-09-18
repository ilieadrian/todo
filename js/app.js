let submitBtn = document.getElementById('button-addon2');
let inputText = document.getElementById('input-text');
let ulList = document.getElementById('ul-list');
let items = ['test', 'data'];

function addNewToDo() {
    let item = inputText.value;

    if(item.length > 0) {
        items.push(item);
    }

    inputText.value = '';
}

function renderPage() {
    ulList.innerHTML = '';

    items.forEach(function(item) {
        ulList.insertAdjacentHTML("beforeend",
        `
            <li class='list-group-item shadow-lg p-3 bg-white rounded'>
            <input type='checkbox' aria-label='Checkbox for following text input' class='mr-2'>
            <span>${item}</span>
            <button type='button' class='close' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
            </button>
            </li>
        `)
    });
}

//O varianta de lucru tine in pending

// function getEventTarget(e) {
//     e = e || window.event;
//     return e.target || e.srcElement; 
// }

// ulList.onclick = function(event) {
//     var target = getEventTarget(event);
//     alert(target.innerHTML);
// };

//O varianta de lucru tine in pending


function markAsDone() {
    let liItems = document.getElementsByTagName('LI');
    // console.log(checkbox)
        // for (let i = 0; i < liItems.length; i++)
        //     {
        //         // liItems[i].classList.toggle('marked-done');
        //         let link = liItems[i];
        //         console.log(i)
        //     }
    };

renderPage();



$( "LI" ).click(function() {
    // `this` is the DOM element that was clicked
    var index = $( "LI" ).index( this );
    // console.log(this.index())
    console.log( index );
});



submitBtn.addEventListener('click',() => {    
    addNewToDo();
    renderPage();    
});

ulList.addEventListener('click', (e) => {
    markAsDone(e);
});

