let x;
$(function(){

    chrome.storage.sync.get(function(items){
        
        let count = items.cucai;
        x = count;
        item = items[count]
        $("#date")[0].textContent = item.date;
        let patterns = $(".patternX")[0];
        for (let i = 1; i<=item.count;i++){
            let clone = patterns.cloneNode(true)
            clone.classList.remove("d-none");
            clone.classList.add("d-flex")
            clone.childNodes[0].textContent = item[i];
            clone.childNodes[1].textContent = items[item[i]];
            $(".patternX")[0].parentNode.appendChild(clone)
        }
   
    });
    $("button")[1].addEventListener("click",clickLeft);
    $("button")[2].addEventListener("click",clickRight);

});

function update(y){
 
    chrome.storage.sync.get(function(items){
        item = items[y]
        $("#date")[0].textContent = item.date;
        $(".patternX").removeClass("d-flex").addClass("d-none")
        let patterns = $(".patternX")[0];
        for (let i = 1; i<=item.count;i++){
            let clone = patterns.cloneNode(true)
            clone.classList.remove("d-none");
            clone.classList.add("d-flex")
            clone.childNodes[0].textContent = item[i];
            clone.childNodes[1].textContent = items[item[i]];
            $(".patternX")[0].parentNode.appendChild(clone)
        }
   
    });
}
function clickLeft(){
    if (x ==0) return;
    x= x-1;
    update(x);
}

function clickRight() {
    chrome.storage.sync.get(function(items){
        
        let count = items.cucai;
        if (x == count) return;
        x = x+1;update(x)
    });
}