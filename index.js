// var array = ["qwerty", 123, true, { name: "nimadir" }];
// var person = {
//   fullname: "ibs",
//   age: 1,
// };

var listOfParticipant = [
//   {
//     name: "person1",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person2",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person3",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person4",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person5",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person6",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person7",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person8",
//     phoneNumber: "123456789",
//   },
//   {
//     name: "person9",
//     phoneNumber: "123456789",
//   },
];

var listofWinners = [];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseWinner() {
  var randomNumber = random(0, listOfParticipant.length - 1);
  var winner = listOfParticipant[randomNumber];
  console.log(randomNumber);
  deletePerson(randomNumber);
  listofWinners.push(winner);
  loopWinners();
  document.getElementById("fullname").innerHTML = winner.name;
  document.getElementById("phone-number").innerHTML = winner.phoneNumber;
}

function loopArray() {
  var tableText = "";
  listOfParticipant.forEach(
    function (value, index) {
      tableText+=`<td>
                    <td>${value.name}</td>
                    <td>${value.phoneNumber}</td>
                    <td><button onclick="deletePerson(${index})">delete</button></td>
                  </tr>`
    });
    document.getElementById("table").innerHTML = tableText
}
loopArray();

function addPerson(){
  var inputName = document.getElementById("input-fullname").value;
  var inputPhoneNumber = document.getElementById("input-phone-number").value;

  if(inputName !== "" && inputPhoneNumber !== "") {
    var personObject = {
      name:inputName,
      phoneNumber: inputPhoneNumber,
    };
    listOfParticipant.push(personObject);
    loopArray();
  }
};

function deletePerson(index) {
   listOfParticipant.splice(index, 1);
   loopArray()
}

function loopWinners() {
  var winnerTableText = `<caption>
                           Winners
                        </caption>
                        <tr>
                          <th>fullname</th>
                          <th>phone-number</th>
                          <th>award</th>
                        </tr>`;

  listofWinners.forEach(function(value, index) {
        winnerTableText += `<tr>
                              <td>${value.name}</td>
                              <td>${value.phoneNumber}</td>
                              <td>${awards(index)}</td>
                            </tr>`
    });
    document.getElementById("winners").innerHTML = winnerTableText;
}

function awards(index) {
   switch(index){
     case 0:
       return "$500 000";
       case 1:
         return "$10 000.000";
         case 2:
           return "$1.000.000.000";
           case 3:
             return "$300.000.000.000.000";
             case 4:
               return "FERRARI";
               case 5:
                 return "4 xonali UY"
                 case 6:
                   return "GELIK"
                   case 7:
                     return "ROLSE ROYS"
                      default:
                        return "Looser";
   }
}