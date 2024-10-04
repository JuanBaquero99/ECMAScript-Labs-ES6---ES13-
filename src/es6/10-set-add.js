const list = new Set();

list.add('item1');
list.add('item2');
list.add('item3').add('item4');

console.log(list); // Set { 'item1', 'item2', 'item3', 'item4' }