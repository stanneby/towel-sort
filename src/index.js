
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined){ return [] }
  let result = [];
  matrix.forEach( (row, index) => {
    if(index%2 == 1){
      row.reverse();
    }
    row.forEach( value => result.push(value) );
  })
  return result;
}
