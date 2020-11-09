function myFunction() {
var ul = document.getElementById("testing");
var li = document.createElement("li");
li.
$(li).addClass("list-group-item d-flex justify-content-between align-items-center");
// $(li).append(document.createTextNode(todoTitle));
$(li).append(($('<i class="fa fa-trash-o" aria-hidden="true"></i>')));
}



window.onload= function()
{
    var add_button = document.getElementById('add-button');
var del_buttons = document.getElementsByClassName('delete'); 
var task_container = document.querySelector('.tasks-container');
var task_input = document.getElementById('new-task')
var completeAll = document.getElementById('check-all-button');
var clearComplete = document.getElementById('clearComplete');
var showComplete = document.getElementById('showComplete');
var showInprogress = document.getElementById('showInprogress');
var showNotStarted = document.getElementById('showNotStarted');

//var task_card_string = "<div class=\"task-card not-started\"><div class=\"status-icon\"></div><p class=\"task-text\"></p><p class=\"task-status\">Not-Started</p><ion-icon class=\"delete fs-large mg-10\" name=\"close-circle-outline\"></ion-icon></div>"
var task_card_string = "<div class=\"status-icon\"></div><p class=\"task-text\"><p class=\"task-status color-red\"></p><ion-icon class=\"delete fs-large mg-10\" name=\"close-circle-outline\"></ion-icon>"
var task_count = 5;
eventSetter();


function eventSetter(){
    var del_buttons = document.getElementsByClassName('delete'); 
    for(del of del_buttons){
        del.addEventListener('click',removeCard);
    }
    
    var cards = document.getElementsByClassName('task-card');
    console.log(cards);
    for(let i=0;i<cards.length;i++){
        console.log(cards[i]);
        cards[i].addEventListener('mouseover', function(){
            console.log(cards[i]);
            cards[i].children[3].style.visibility="initial";
        })
        cards[i].addEventListener('mouseleave', function(){
            console.log(cards[i].children[3].style.visibility);
            cards[i].children[3].style.visibility="hidden";
        })
    }
    
}

function reassignIDs(){
    var cards = document.getElementsByClassName('task-card');
    var count=1;
    for(card of cards){
        card.setAttribute("id", "t"+(count++));
        card.eve
    }
}

function resetColor(){
    var allButtons = document.getElementsByClassName('filter-button');
    for(button of allButtons)
        button.style.color = "gray";
}


add_button.addEventListener('click', function(){


    //Adding the new task in the task container
    var task_card = document.createElement('div');
    task_card.innerHTML= task_card_string
    task_card.setAttribute("class", "task-card");
    task_card.setAttribute("id", "t"+(++task_count));
    task_container.appendChild(task_card);
    let card_text = document.querySelector('#t' + task_count + " p");
    card_text.innerHTML = task_input.value;
    task_input.value = "";
    
    //Change Task Count
   eventSetter();

})

document.addEventListener("keydown", function (event){
    var keyValue = event.key;
    if(keyValue=="Enter"){
         //Adding the new task in the task container
    var task_card = document.createElement('div');
    task_card.innerHTML= task_card_string
    task_card.setAttribute("class", "task-card ");
    task_card.setAttribute("id", "t"+(++task_count));
    task_container.appendChild(task_card);
    let card_text = document.querySelector('#t' + task_count + " p");
    card_text.innerHTML = task_input.value;
    task_input.value = "";
    
    //Change Task Count
   eventSetter();
    }
      
  });

function removeCard(){
    var parent = this.parentElement;
    parent.classList.add('delete-card');
    setTimeout(function(){
        // console.log(this);
        parent.parentNode.removeChild(parent);
        reassignIDs(); 
        eventSetter();
    }, 550)
    task_count --;
    
    // this.parentElement.parentNode.removeChild(this.parentElement);
}


completeAll.addEventListener('click', function(){
    var progress_buttons = document.getElementsByClassName('status-icon');
    for(p of progress_buttons){
        var parentCard = p.parentElement;
        var status = parentCard.classList[1];
        parentCard.classList.remove(status);
        var statusElem = parentCard.children[2];
        parentCard.classList.remove(status);
        parentCard.classList.add("Completed");
        statusElem.innerHTML="Completed";
        statusElem.classList.remove(statusElem.classList[1]);
        statusElem.classList.add('color-green');
    }
});

clearComplete.addEventListener('click', function(){
    let cards = document.getElementsByClassName('Completed');
    let parent = cards[0].parentElement;
    let length = cards.length;
    let count=length-1;
    intervalID = setInterval(function(){
        cards[count].classList.add('delete-card');
        task_count--;
        setTimeout(function(){
            this.parentNode.removeChild(this); 
      }.bind(cards[count]),500 )
        count--;
        if(count<0){
            clearInterval(intervalID);
        }
    }, 500);
    

});





}


