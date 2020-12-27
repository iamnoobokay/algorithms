let arrayToSort = [];

let i = 0;
let j = 0;
let comparisions=0;
let swaps = 0;


function setup(){
    createCanvas(1340,620);
    frameRate(60);
    for(let i=0;i<=width;i++){
        // width/12 or 0
        arrayToSort[i] = random(height);
    }
}

// function draw(){
//     background(0);
//     for(let i = 0; i<arrayToSort.length;i++){
//         stroke(255,0,0);
//         strokeWeight(10);
//         line(i*12,height,i*12,height-arrayToSort[i]);
//     }
//     // bubble sort algorithm
//     let a = arrayToSort[j];
//     let b = arrayToSort[j+1];
//     if(a>b){
//         swap(j,j+1)
//     }

//     if(i<arrayToSort.length){
//         j=j+1;
//         if(j>=arrayToSort.length-i-1){
//             j=0;
//             i=i+1;
//         }
//     }else{
//         noLoop();
//         console.log("Completed");
//     }
    
// }

function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(255);
        // strokeWeight(10);
        line(i,height,i,height-arrayToSort[i]);
    }
    // bubble sort algorithm
    if(i<arrayToSort.length){
        for(let j = 0;j<arrayToSort.length-1;j++ ){
            let a = arrayToSort[j];
            let b = arrayToSort[j+1];
            if(a>b){
                swap(j,j+1)
            }
            comparisions++;
        }
        i++;
    }else{
        noLoop();
        console.log("Completed");
    }
    document.getElementById('comparision').innerHTML = `Comparisions:${comparisions}`
    document.getElementById('swaps').innerHTML = `Swaps:${swaps}`
}

function swap(a,b){
    let temp = arrayToSort[a];
    arrayToSort[a] = arrayToSort[b];
    arrayToSort[b] = temp;
    swaps++;
}
