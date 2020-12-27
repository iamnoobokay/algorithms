let arrayToSort = [];
let i = 0;
let j = i+1;
let comparisions=0;
let swaps = 0;

function setup(){
    createCanvas(1340,620);
    // frameRate(60);
    for(let i=0;i<=width;i++){
        arrayToSort[i] = random(height);
    }
}
// 54321
function draw(){
    background(0);
    for(let i = 0; i<arrayToSort.length;i++){
        stroke(0,255,0);
        // strokeWeight(10);
        line(i,height,i,height-arrayToSort[i]);
    }
    // for(let i = 0; i < arrayToSort.length; i++) {
        // for(let j = i+1; j < arrayToSort.length; j++){
            
        // } 
    // }
    if(i<arrayToSort.length){
        let min = i;
        for(let j = i+1; j<arrayToSort.length;j++){
            if(arrayToSort[j] < arrayToSort[min]) {
                min=j;
            }
            comparisions++;
        }
        if (min!=i) {
            swap(i,min);    
        }
    }
    i++;
    document.getElementById('comparision').innerHTML = `Comparisions:${comparisions}`
    document.getElementById('swaps').innerHTML = `Swaps:${swaps}`
}

function swap(i,min){
    let temp = arrayToSort[i];
    arrayToSort[i] = arrayToSort[min];
    arrayToSort[min] = temp;
    swaps++;
}