//exports without declaring const
module.exports.items = ['item1', 'items2'];

const person = {
  name: 'bob',
};
//exports without declaring const and assign to another name
module.exports.singlePerson = person;
