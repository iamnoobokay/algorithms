let arrayToSort = [];
let i = 0;
let j = i+1;


function setup(){
    createCanvas(1340,620);
    frameRate(60);
    for(let i=0;i<=width/10;i++){
        arrayToSort[i] = random(height);
    }
}

function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(0,255,0);
        strokeWeight(10);
        line(i*12,height,i*12,height-arrayToSort[i]);
    }
    let min = i;
    if(arrayToSort[j]<arrayToSort[min]){
        min=j
    }
    if(min!=i){
        swap(i,min);
    }

    if(i<arrayToSort.length){
        j=j+1;
        if(j>=arrayToSort.length){
            i=i+1;
            j=i+1;
        }
    }else{
        noLoop();
        console.log("Completed");
    }
}

function swap(i,min){
    let temp = arrayToSort[i];
    arrayToSort[i] = arrayToSort[min];
    arrayToSort[min] = temp;
}