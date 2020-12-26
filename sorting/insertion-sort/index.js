let arrayToSort = [];
let i = 1;
let j = i-1;
let tempVar = i;


function setup(){
    createCanvas(1024,500);
    frameRate(60);
    for(let i=0;i<=width/10;i++){
        arrayToSort[i] = random(height);
    }
}
function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(0,0,255);
        strokeWeight(8);
        line(i*10,height,i*10,height-arrayToSort[i]);
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