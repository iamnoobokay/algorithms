let arrayToSort = [];

let i = 0;
let j = 0;


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
    // bubble sort algorithm
    let a = arrayToSort[j];
    let b = arrayToSort[j+1];
    if(a>b){
        swap(j,j+1)
    }

    if(i<arrayToSort.length){
        j=j+1;
        if(j>=arrayToSort.length-i-1){
            j=0;
            i=i+1;
        }
    }else{
        noLoop();
        console.log("Completed");
    }
    
}

function swap(a,b){
    let temp = arrayToSort[a];
    arrayToSort[a] = arrayToSort[b];
    arrayToSort[b] = temp;
}