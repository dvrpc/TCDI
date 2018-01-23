const tcdiScript = 'http://staging.dvrpc.org/asp/google/drive/tcdi/?year=2012';

// Accordion functionality 
var accordion = document.querySelectorAll('.accordion')

for(var i = 0; i < accordion.length; i++){
    accordion[i].onclick = function(){
        // show/hide the accordions on click
        this.classList.toggle('active')

        // toggle the aria-expanded attribute of the accordion button
        let ariaExpandedBool = this.getAttribute('aria-expanded')
        ariaExpandedBool === 'false' ? ariaExpandedBool = 'true' : ariaExpandedBool = 'false'
        this.setAttribute('aria-expanded', ariaExpandedBool)

        // toggle the aria-hidden attribute of the accordion panel
        let panel = this.nextElementSibling
        let ariaHiddenBool = panel.getAttribute('aria-hidden')
        ariaHiddenBool === 'false' ? ariaHiddenBool = 'true' : ariaHiddenBool = 'false'
        panel.setAttribute('aria-hidden', ariaHiddenBool)

        // show/hide the panel on click
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    }
}


// REMINDER: when dynamicallly populating tables w/API call, set 'municipality' field to null if it has already been encountered