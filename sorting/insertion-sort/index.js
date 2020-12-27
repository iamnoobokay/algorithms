let arrayToSort = [];
let i = 1;
let j = i-1;
let tempVar = i;


function setup(){
    createCanvas(1340,620);
    frameRate(60);
    for(let i=0;i<=width/12;i++){
        arrayToSort[i] = random(height);
    }
}
function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(0,0,255);
        strokeWeight(10);
        line(i*12,height,i*12,height-arrayToSort[i]);
    }

    if(arrayToSort[j]>arrayToSort[tempVar]){
        let temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[tempVar];
        arrayToSort[tempVar] = temp;
    }
        
    if(i<arrayToSort.length){
        j--;
        tempVar--;
        if(j<0){
            i++;
            j=i-1;
            tempVar=i;
        }
    }
}