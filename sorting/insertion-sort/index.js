let arrayToSort = [];
let i = 1;
let j = i-1;
let tempVar = i;
let comparision = 0;
let swaps = 0;


function setup(){
    createCanvas(1340,620);
    for(let i=0;i<=width;i++){
        arrayToSort[i] = random(height);
    }
}
function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(0,0,255);
        line(i,height,i,height-arrayToSort[i])
    }

    if(i<arrayToSort.length){
        for(let j=i-1;j>=0;j--){
            if(arrayToSort[j]>arrayToSort[tempVar]){
                let temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[tempVar];
                arrayToSort[tempVar] = temp;
                tempVar--;
                swaps++;
            }
            comparision++;
        }
        i++;
        tempVar=i;
    }
    document.getElementById('comparision').innerHTML=`Comparisions: ${comparision}`;
    document.getElementById('swaps').innerHTML=`Swaps: ${swaps}`;
}