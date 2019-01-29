// BUDGET CONTROLLER
var budgetController = (function () {

var Expense = function (id, description, value) {  //expense prototype
   this.id = id;
   this.description = description;
   this.value = value;
   this.percentage = -1;
};


Expense.prototype.calcPercentage = function(totalIncome) {
   if (totalIncome > 0) {
   this.percentage = Math.round((this.value / totalIncome)* 100);
      } else {
      this.percentage = -1;
   }
};


Expense.prototype.getPercentage = function() {
   return this.percentage;
};


var Income = function (id, description, value) {  // income prototype
   this.id = id;
   this.description = description;
   this.value = value;
};


var calculateTotal = function(type) {
   var sum = 0;
   Monetarydata.allItems[type].forEach(function (current) {
   sum += current.value;
   });
   Monetarydata.totals[type] = sum;
};


var Monetarydata = {   //data structure to hold all items for income ,expendetures and totals of both
   allItems: {
   exp: [],
   inc: []
   },

   totals: {
   exp: 0,
   inc: 0
   },

   budget: 0,
   percentage: -1
};


return {
addItem: function(type,description,value) {
   var newItem, ID;
   /*
   so in order of explaining ID
   1.monetaryData.allItems[type] refers to eaither the exp or inc arrays
   based upon the type submitted to the first bracket

   2.monetaryData.allitems[type].length -1 refers to the types length -1 position
   due to arrays starting at element 0. 

   3.finally the .id +1 gathers the next coming elements id so we can shove it into the
   list with a correct numerical id.
   */
   if(Monetarydata.allItems[type].length > 0) {
   ID = Monetarydata.allItems[type][Monetarydata.allItems[type].length - 1].id + 1;
   } else {
     ID = 0;
   }

//create new item based on inc or exp type
   if (type === 'exp'){
   newItem = new Expense(ID,description,value);
   } else if (type === 'inc') {
     newItem = new Income(ID,description,value);
   }
   //push item into our data structure
   Monetarydata.allItems[type].push(newItem);

   //return new item.
   return newItem;
},


deleteItem: function (type, id) {
   var ids,index;
   ids = Monetarydata.allItems[type].map(function(current) {
   return current.id;
   });

   index = ids.indexOf(id);
   if (index !== -1) {
   Monetarydata.allItems[type].splice(index,1);
   }
},


calculateBudget: function() {
   //calculate the budget.
   calculateTotal('exp');
   calculateTotal('inc');
   //b. calculate the budget: income - expense
   Monetarydata.budget = Monetarydata.totals.inc - Monetarydata.totals.exp;

   //c. calculate budget percentage
   if (Monetarydata.totals.inc > 0) {
   Monetarydata.percentage = Math.round((Monetarydata.totals.exp / Monetarydata.totals.inc) * 100);
   } else { 
     Monetarydata.percentage = -1;
   }   
},


calculatePercentages: function () {
   Monetarydata.allItems.exp.forEach(function(curr) {
   curr.calcPercentage(Monetarydata.totals.inc);
   });
},


getPercentages: function() {
   var allPerc = Monetarydata.allItems.exp.map(function(cur) {
   return cur.getPercentage();
   });
   return allPerc;
},


getbudget: function() {
   return {
   budget: Monetarydata.budget,
   totalInc: Monetarydata.totals.inc,
   totalExp: Monetarydata.totals.exp,
   totalperc: Monetarydata.percentage
   };
},


testing: function () {
   console.log(Monetarydata);
   }
};
})();   // end of budget controller --------------------------------------------------------------------------------



var UIController = (function() {

var Domstrings = {    //dom string controller to alleviate  label type cogestion
   inputType: '.add__type',
   inputDescription: '.add__description',
   inputvalue: '.add__value',
   inputbtn: '.add__btn',
   click: 'click',
   keypress: 'keypress',
   incomeContainer: '.income__list',
   expensesContainer: '.expenses__list',
   BudgetLabel: '.budget__value',
   IncomeLabel: '.budget__income--value',
   ExpenseLabel: '.budget__expenses--value',
   PercentLabel: '.budget__expenses--percentage',
   container: '.container',
   expensesPercLabel: '.item__percentage',
   dateLabel: '.budget__title--month',
   };

   var formatNumber = function(num,type){
      var numSplit,int, dec;
      /*
      + or - before number
      exactly 2 decimal points
      comma separating the thousands
      */ 
      num = Math.abs(num);
      num = num.toFixed(2);
   
      numSplit = num.split('.');
      int = numSplit[0];
   
      if (int.length > 3){
      int = int.substr(0, int.length -3 ) + ',' + int.substr(int.length -3, 3);
      }
      dec = numSplit [1];
      return (type === 'exp' ? sign = '-' : '+') + ' ' + int + '.' + dec;
   };

   nodeListForEach = function(list,callback) {
      for (var i = 0; i < list.length;i++) {
      callback(list[i],i);
      }
   };

return {
   getinput: function() {  // returns input values
   return {
   type: document.querySelector(Domstrings.inputType).value, // will be eaither inc or exp
   description: document.querySelector(Domstrings.inputDescription).value,
   value: parseFloat(document.querySelector(Domstrings.inputvalue).value)
   };
},


addListItem: function (obj, type) {
   var html,newhtml,element;

   //create html string with placeholder text
   if(type === 'inc'){
   element = Domstrings.incomeContainer;
   html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
   } else if (type === 'exp') {
     element = Domstrings.expensesContainer;
     html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
   }
   //replace the placeholder text with some actual data
   newhtml = html.replace('%id%', obj.id);
   newhtml = newhtml.replace('%description%', obj.description);
   newhtml = newhtml.replace('%value%', formatNumber(obj.value, type));

   //insert the html into the dom
   document.querySelector(element).insertAdjacentHTML('beforeend', newhtml);
   },


   deleteListItem: function (selectorID) {
   var element = document.getElementById(selectorID);
   element.parentNode.removeChild(element);
},


clearFields: function() {
   var fields, fieldsArr;
   fields = document.querySelectorAll(Domstrings.inputDescription + ', ' + Domstrings.inputvalue);
   /*
   queryselectorall returns list
   you can use slice to turn a list into an array
   since this is a list and we can't use slice due to it not being an array already
   Array.protoype.slice.call(); allows us to call the original array function 
   make fields arry into a prototype, slice it, and use fields as the original data
   */
   fieldsArr = Array.prototype.slice.call(fields);

   //for each sets each perameter of the function (current,index,array)
   //to 0
   fieldsArr.forEach(function(current,index,array){
   current.value = "";
   });
   // sets focus to fieldsArray[0] which is the input description
   //should be along the lines [.inputDescription, .inputvalue];
   fieldsArr[0].focus();
},


displayBudget: function(obj) {
   var type;
   obj.budget > 0 ? type = 'inc' : type = 'exp';

   document.querySelector(Domstrings.BudgetLabel).textContent =  formatNumber(obj.budget,type);
   document.querySelector(Domstrings.IncomeLabel).textContent =  formatNumber(obj.totalInc, 'inc');
   document.querySelector(Domstrings.ExpenseLabel).textContent = formatNumber(obj.totalExp, 'exp');

   console.log(obj.totalperc);
   console.log(obj.percentage);
   if(obj.totalperc > 0) {
   document.querySelector(Domstrings.PercentLabel).textContent = obj.totalperc + '%';
   } else {
     document.querySelector(Domstrings.PercentLabel).textContent = '---';
   }
},


displayPercentages: function (percentages) {
   var fields, nodeListForEach;
   fields = document.querySelectorAll(Domstrings.expensesPercLabel);

nodeListForEach(fields, function(current, index) {

   if (percentages[index] > 0){
      current.textContent = percentages[index] + '%';
   } else {
     current.textContent = '---';
     }
   });
},


displayMonth: function() {
   var now,year,month,date,months;

   months = ['January', 'February', 'March',
             'April',   'May',      'June', 
             'July',    'August',   'September', 
             'October', 'November', 'December'];

   now = new Date();
   year = now.getFullYear();
   month = now.getMonth();
   document.querySelector(Domstrings.dateLabel).textContent = months[month] + ' ' + year;
},


changeType: function() {
   var fields;
   fields = document.querySelectorAll(
      Domstrings.inputType + ',' +
      Domstrings.inputDescription+ ',' +
      Domstrings.inputvalue
   );

   nodeListForEach(fields, function(cur){
   cur.classList.toggle('red-focus');
   });

   document.querySelector(Domstrings.inputbtn).classList.toggle('red');
},

getDomstrings: function() {  // returns domstrings for use in other functions
   return Domstrings;
   }
};
}) (); // end of UI controller --------------------------------------------------------------------------------


// GLOBAL CONTROLLER
var AppController = (function(budgetController, UIController) {
var setupEventListners = function() {
   // puls from UI controller domstrings variable
   var Dom = UIController.getDomstrings();

   document.querySelector(Dom.inputbtn).addEventListener('click',ctrlAdditem);

   document.addEventListener(Dom.keypress,function(e) {
   if(e.keyCode === 13 || e.which === 13) {  //keycode and which allow us to use 13 as enter key
   ctrlAdditem();
   }
   });
   document.querySelector(Dom.container).addEventListener('click', ctrlDeleteItem);

   document.querySelector(Dom.inputType).addEventListener('change', UIController.changeType);
};
 

var updateBudget = function() {
   //calculate the budget
   budgetController.calculateBudget();
   //return budget
   var budget = budgetController.getbudget();
   //3. display the budget in the UI
   UIController.displayBudget(budget);
};

updatePercentage = function () {
   //1. calculate percentages
   budgetController.calculatePercentages();

   //2. read from budget controller
   var percentages = budgetController.getPercentages();


   //3. update user interface
   UIController.displayPercentages(percentages);
};


var ctrlAdditem = function () {  //controller add item function
   var input, newItem;

   //1. get the field input data
   input = UIController.getinput();

   if(input.description !== "" && !isNaN(input.value) && input.value > 0){
   //2. add the item to the buget controller
   newItem = budgetController.addItem(input.type,input.description,input.value);

   //3. add the item to the ui
   UIController.addListItem(newItem, input.type);

   //4. clear fields
   UIController.clearFields();

   //5. calculate and update budget
   updateBudget();

   //6. calculate and update percentages
   updatePercentage();
   }
};


var ctrlDeleteItem = function(event) {
   var labelvalue, splitID, type, ID;
        
   labelvalue = event.target.parentNode.parentNode.parentNode.parentNode.id;
   if (labelvalue) {
   splitID = labelvalue.split('-');
   type = splitID[0];
   ID = parseInt(splitID[1]);
            
   // 1. delete the item from the data structure
   budgetController.deleteItem(type, ID);

   //2. delete item from the UI 
   UIController.deleteListItem(labelvalue);

   //3. update and show new totals
   updateBudget();

   //4. calculate and update percentages
   updatePercentage();
   }
};


return {
   init: function () {
   console.log('application booted.');
   UIController.displayMonth();
   UIController.displayBudget({
   budget: 0,
   totalInc: 0,
   totalExp: 0,
   totalperc: -1
   });
   setupEventListners();
   }
};
})(budgetController, UIController);  // end of AppController --------------------------------------------------------------------------------

AppController.init();
