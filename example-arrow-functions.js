var names = ['Mahendra', 'Singamsetty', 'Mohana', 'Supraneetha'];

// names.forEach(function(name){
//   console.log(name);
// });


//names.forEach((name)=>console.log(name));

var marks = [10, 20, 30, 40, 50];
var sum = 0;
marks.forEach((n)=>sum += n);
console.log(sum);

var returnMe = (name) => name + '!';
console.log(returnMe('Mahendra'));

var person = {
  name: 'Mahendra',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

//person.greet();

function add(a, b) {
  return a + b;
}
console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a, b) => a + b;
console.log(addStatement(1, 3));
