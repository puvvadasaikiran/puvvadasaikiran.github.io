var tabButtons=document.querySelectorAll(".psktab .pskbutton button");
var tabPanels=document.querySelectorAll(".psktab .pskcontent");

function showPanel(panelIndex,colorCode)
{
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";

    
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#f50136";

    tabPanels.forEach(function(node){
        node.style.display="none";
    });

    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;


}
showPanel(0,'#ffff');

var tabButtons1=document.querySelectorAll(".psktab1 .pskbutton1 button");
var tabPanels1=document.querySelectorAll(".psktab1 .pskcontent1");

function showPanel1(panelIndex,colorCode)
{
    tabButtons1.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";

    
    });
    tabButtons1[panelIndex].style.backgroundColor=colorCode;
    tabButtons1[panelIndex].style.color="#f50136";

    tabPanels1.forEach(function(node){
        node.style.display="none";
    });

    tabPanels1[panelIndex].style.display="block";
    tabPanels1[panelIndex].style.backgroundColor=colorCode;


}
showPanel1(0,'#ffff');

