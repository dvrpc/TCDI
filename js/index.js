const tcdiScript = 'http://staging.dvrpc.org/asp/google/drive/tcdi/?year=2012';

// Accordion functionality 
var accordion = document.querySelectorAll('.accordion')
var accordionButtons = $('.accordion-controls li button');

for(var i = 0; i < accordion.length; i++){
    accordion[i].onclick = function(){
        // show/hide the accordions on click
        this.classList.toggle('active')
        // toggle aria-controls attributes to true/false depending on toggle (or just do opposite since it's onclick?)
        let expandedOrNot = this.getAttribute('aria-expanded')
        console.log('expanded or not ', expandedOrNot)

        var panel = this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    }
}


// REMINDER: when dynamicallly populating tables w/API call, set 'municipality' field to null if it has already been encountered