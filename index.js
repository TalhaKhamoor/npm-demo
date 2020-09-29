var _ = require("underscore");

// order in which the module is searched for
// 1 ) core module
// 2 ) File or Folder
// 3 ) node_modules
var result = _.contains([1, 2, 3], 3);
console.log(result);
