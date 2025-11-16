let marks = Array(40,50,60,70,10);
let highest=marks[0];
let lowest=marks[0];
let sum = marks[0];
for (let i=1; i< marks.length;i++){
    // console.log(marks);
    if(marks[i]>highest){
        highest = marks[i];
       
    }
     if(marks[i]< lowest){
        lowest = marks[i];
       
    }
    sum+= marks[i];
}
let avg = sum / marks.length;

console.log(highest+ " highest number");
console.log(lowest+ " lowest number");
console.log(avg+ " average");