var expect = require("chai").expect;
var _ = require("underscore");

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

    function comparePeople(first,second){

      //if both have never paired with anybody, return false
      if (first.partners.length === 0 || second.partners.length === 0){
        return false;
      }

      //otherwise, go through each of first's past partners and see if it matches with second person's name
      for (var i=0; i < first.partners.length; i++){
        if(first.partners[i].name === second.name) {
          return true;
        } else {
          return false;
        }
      }
    }

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
describe("random items - non-paired", function() {

  var tempList = namesList; // save full list to temp

  var first;
  var second;

  it("should pick the first random item - non-paired", function() {
    // first = Math.floor(Math.random()* tempList.length);
    first = tempList[0]; // static for now, hard to test random

    expect(first).to.be.deep.equal({id: 1, name: "Alex", partners:[]});

  });

  it("should pick the second random item - non-paired", function() {
    // second = Math.floor(Math.random()* tempList.length);
    second = tempList[1]; // static for now, hard to test random

    expect(second).to.be.deep.equal({id: 2, name: "Zach", partners:[]});

  });
  
  // compares whether they've been paired in the past before
  it("compare 2 items to see if they've been picked before - non-paired", function() {

    expect(comparePeople(first,second)).to.be.equal(false);

  });

});

// takes a random item in a list, another random item in the list
describe("random items - paired", function() {

  var tempList = namesList; // save full list to temp

  var first;
  var second;

  it("should pick the first random item - paired", function() {
    // first = Math.floor(Math.random()* tempList.length);
    first = tempList[2]; // static for now, hard to test random

    expect(first).to.be.deep.equal({id: 3, name: "Andy", partners:[{id: 4, name:"Sami"}]});

  });

  it("should pick the second random item - paired", function() {
    // second = Math.floor(Math.random()* tempList.length);
    second = tempList[3]; // static for now, hard to test random

    expect(second).to.be.deep.equal({id: 4, name: "Sami", partners:[{id: 3, name:"Andy"}]});

  });
  
  // compares whether they've been paired in the past before
  it("compare 2 items to see if they've been picked before - paired", function() {

    expect(comparePeople(first,second)).to.be.equal(true);

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