var counters = document.querySelectorAll('.counter');
var counterSection = document.querySelector('.counter-section');
var speed = 200;

function incCounter(){
    var updateCounter =  () => {
        counters.forEach(counter => {
            var target = +counter.getAttribute('data-target');
            var value = +counter.innerText;
            var inc = target / speed ;
    
            if(value < target){
                counter.innerText = inc + value;
                setTimeout(updateCounter,1);
            }else{
                counter.innerText = target;
            }
        })
    }
  updateCounter();
}

var counterSectionOptions = {
    rootMargin: "0px"
};

var counterSectionObserver = new IntersectionObserver(function(entries,counterSectionObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            incCounter();
        }
    })
},counterSectionOptions);

counterSectionObserver.observe(counterSection);