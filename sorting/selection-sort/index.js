let arrayToSort = [];
let i = 0;
let j = i+1;


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
        stroke(255,0,0);
        strokeWeight(8);
        line(i*10,height,i*10,height-arrayToSort[i]);
    }
    let min = i;
    if(arrayToSort[j]<arrayToSort[i]){
        min=j
    }
    swap(i,min);

    if(i<arrayToSort.length-1){
        j=j+1;
        if(j>=arrayToSort.length){
            j=i+1+1;
            i=i+1;
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