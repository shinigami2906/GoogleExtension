var menuItem = {
    "id": "Daikon",
    "title": "Daikon",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);
chrome.storage.sync.set({
    "cucai" : 0,
    0 :{
        date : "18/2/2020",
        count : 1,
        1 : "Daikon"
    },
    "Daikon" : 1
});

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Daikon" && clickData.selectionText){    
        chrome.storage.sync.get((items)=>{
            let update = {}
            let date = (new Date(Date.now())).toLocaleDateString();
            let cucai = items.cucai;
            let last = items[cucai];
            if (last.date !=date){

                update[cucai+1] = {
                    count : 1,
                    1 : clickData.selectionText,
                    date : date
                }
                update["cucai"] =cucai+1;
            } else {
                last.count++;
                last[last.count] = clickData.selectionText;
                update[cucai] = last;
            }
            if (items[clickData.selectionText] == undefined)  update[clickData.selectionText] = 1;
            else update[clickData.selectionText] = items[clickData.selectionText] +1; 
           
            chrome.storage.sync.set(update,()=>{});
        })
      
    }
});

