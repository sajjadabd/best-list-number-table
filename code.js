let table = document.getElementById("tableBody");

let start = 0;
let end = 3;

// get input from alert

//let month = prompt("Enter current month");
//let day = prompt("Enter current day");
//let howManyPage = prompt("How many page do you want to see?");

let month = 1;
let day = 17;
let howManyPage = 10;
let hmp = howManyPage;


// end = 21;
// end = 21*2;
// end = 21*3;


let total = []

let eachDeep = []

let eachColumn = [];

let numberOfRowsEachPage = 12;
let norep = numberOfRowsEachPage;

let numberOfColumnsEachPage = 3;
let nocep = numberOfColumnsEachPage;

for(let j=0;j<nocep;j++) {
  for(let i=0;i<norep;i++) {
    for(let k=1;k<=hmp;k++){
      eachDeep.push( k + (i) * hmp + (j * norep * hmp) );
    }
    eachColumn.push(eachDeep);
    eachDeep = [];
  }
  total.push(eachColumn);
  eachColumn = [];
}



// for(let j=0;j<howManyPage;j++){
//   for(let i=0;i<norep;i++) {
//     if(j==0) {
//       eachPage.push([
//         ( (norep * i)+i ) * howManyPage + j + 1 , 
//         norep*1+i  ,
//         norep*2+i  
//       ]);
//     } else {
//       eachPage.push([
//         i + total[j-1][norep-1][2] , // add with the last elemtn of last total index
//         norep*1+i + total[j-1][norep-1][2]  ,
//         norep*2+i + total[j-1][norep-1][2] 
//       ]);
//     }
//   }
//   total.push(eachPage);
//   eachPage = [];
// }


console.log(total);


let content = `` ;
//console.log(`start processing at ${start}`);


for(let deep=0;deep<howManyPage;deep++){
  for(let row=0;row<norep;row++) {
    content += `<tr>`;
    for(let column=0;column<nocep;column++) {
      content += `<td>${total[column][row][deep]}</td>`;
    }
    content += `</tr>`;
  }
}


// total.forEach(element => {
//   element.forEach(e => {
//     content += `<tr>`;
//     e.forEach( value => {
//       //console.log(value);
//       content += `<td>${month}-${day}-${value}</td>`;
//     });
//     content += `</tr>`;
//   });
// });

// for(let i = start; i <= end; i++){
//   content += `
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   `;
// }

// content += `
// <div class="column">
//   <div class="cell">${month}-${day}-${i}</div>
//   <div class="cell">${month}-${day}-${i+1}</div>
//   <div class="cell">${month}-${day}-${i+2}</div>
// </div>
// `;

//console.log(`end processing at ${end}`);

table.innerHTML = content;