var expect = require("chai").expect;

// takes a master list of name objects
describe("master list, array of names", function() {

  var namesList = [];

  it("list should exist, empty", function() {

  expect(namesList).to.be.a("array");
  expect(namesList.length).to.be.equal(0);

  });

  it("should exist with names and partners filled", function() {

  namesList = [
    {
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
    }
  ];
  
  expect(namesList[0]).to.be.deep.equal({id: 1, name: "Alex", partners:[]});
  expect(namesList[1]).to.be.deep.equal({id: 2, name: "Zach", partners:[]});
  expect(namesList[2]).to.be.deep.equal({id: 3, name: "Andy", partners:[{id: 4, name:"Sami"}]});
  expect(namesList[3]).to.be.deep.equal({id: 4, name: "Sami", partners:[{id: 3, name:"Andy"}]});

  });
});


// takes a random item in a list, another random item in the list
describe("random numbers", function() {

  it("should pick the first random number", function() {

  });

  it("should pick the second random number", function() {

  });

});

// compares whether they've been paired in the past before

// if they have, re-run the picking function

// if not, pushes both names into an array

// and pushes each other's names into the objects, contained in the master name list.




// describe("", function() {

//   it("", function() {



// 	expect(negativeNum).to.be.at.least(0);

//   });

// });