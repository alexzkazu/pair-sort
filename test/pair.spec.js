var expect = require("chai").expect;

var namesList = [{
      id: 1,
      name: "Alex",
      partners: []
    },
    {
      id: 2,
      name: "Zach",
      partners: []
    },
    {
      id: 3,
      name: "Andy",
      partners: [{id: 4, name:"Sami"}]
    },
    {
      id: 4,
      name: "Sami",
      partners: [{id: 3, name:"Andy"}]
    }];

// takes a master list of name objects
describe("master list, array of names", function() {

  it("should exist with names and partners filled", function() {

  expect(namesList[0]).to.be.deep.equal({id: 1, name: "Alex", partners:[]});
  expect(namesList[1]).to.be.deep.equal({id: 2, name: "Zach", partners:[]});
  expect(namesList[2]).to.be.deep.equal({id: 3, name: "Andy", partners:[{id: 4, name:"Sami"}]});
  expect(namesList[3]).to.be.deep.equal({id: 4, name: "Sami", partners:[{id: 3, name:"Andy"}]});

  });
});


// takes a random item in a list, another random item in the list
describe("random items", function() {

  var tempList1 = namesList; // save full list to temp
  var tempList2 = namesList;

  var first;
  var second;

  it("should pick the first random item - non-paired", function() {
    // first = Math.floor(Math.random()* namesList.tempList1);
    first = tempList1.splice(0,1); // static for now, hard to test random

    expect(first[0]).to.be.deep.equal({id: 1, name: "Alex", partners:[]});

  });

  it("should pick the second random item - non-paired", function() {
    // second = Math.floor(Math.random()* namesList.tempList1);
    second = tempList1.splice(0,1); // static for now, hard to test random

    expect(second[0]).to.be.deep.equal({id: 2, name: "Zach", partners:[]});

  });
  
  // compares whether they've been paired in the past before
  it("compare 2 items to see if they've been picked before - non-paired", function() {

    function compareNumbers(first,second){

    }


  });

});

// if they have, re-run the picking function

// if not, pushes both names into an array

// and pushes each other's names into the objects, contained in the master name list.




// describe("", function() {

//   it("", function() {



// 	expect(negativeNum).to.be.at.least(0);

//   });

// });