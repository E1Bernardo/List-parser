var listStart = document.getElementById('left-column'); 

newList = document.getElementById('right-column');
newList.innerHTML = listStart.innerHTML;

listParser(newList);

function listParser(element){
    const nodes = element.childNodes;

    for(let node of nodes){
        if(node.nodeName != '#text'){
            if(node.children.length == 0){
                if(node.outerText.indexOf('https://') != -1  || node.outerText.indexOf('http://') != -1){
                node.innerHTML = `<a href="${node.outerText}">${node.outerText}</a><br>`;
                }
            }
            else{
                listParser(node);
            }
        }
    }
 }