/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    let proffesion_by_developer = arr.filter((elem) => {
           
            return elem.profession == "developer"

    }).map((emp)=> {       
         console.log(emp);
    });

    // console.log(proffesion_by_developer);
    
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
       
       if(emp.profession === "developer")
        {
          console.log(emp);
        }

  })

}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filterArray = arr.filter((elem) => {
         return elem.profession !== "admin";
  });
  console.log(filterArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  { id: 4, name: "abdul", age: "30", profession: "hr" },
  { id: 5, name: "aman", age: "40", profession: "sales manager" },
  { id: 6, name: "rakesh", age: "50", profession: "sweeper" },
];

  let arr3 = [...arr , ...arr2];
  console.log(arr3);

}

// PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// concatenateArray();