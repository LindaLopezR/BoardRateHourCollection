// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by board-ratehour-collection.js.
import { name as packageName } from "meteor/board-ratehour-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('board-ratehour-collection - example', function (test) {
  test.equal(packageName, "board-ratehour-collection");
});
