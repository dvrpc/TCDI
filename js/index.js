const tcdiScript = 'http://staging.dvrpc.org/asp/google/drive/tcdi/?year=2012';

// Accordion functionality 
var accordion = document.querySelectorAll('.accordion')

for(var i = 0; i < accordion.length; i++){
    accordion[i].onclick = function(){
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    }
}

// Accordion toggling

// REMINDER: when dynamicallly populating tables w/API call, set 'municipality' field to null if it has already been encountered