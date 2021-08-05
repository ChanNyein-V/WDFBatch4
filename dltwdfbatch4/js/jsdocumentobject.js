let val;

val = 'hay'; // hay
val = document; // whole html document
val = document.doctype; //<!DOCTYPE html>
val = document.head; //<head>...</head>
val = document.body; //<body>...</body>
val = document.URL; // directory of file (or) domain name

val = document.forms;
val = document.forms[0]; //1st form information
val = document.forms[0].id;// get id from form[0]
val = document.forms[0].class;//can't get class from form[0]
val = document.forms[0].action; //file directory
val = document.forms[0].method; //get

val = document.links; //showing absolute tag quantity
val = document.links[3]; // get absolute tag from index[3]
val = document.links[3].id;// get id from absolute tag from index 3
val = document.links[3].href; // get link from absolute tag from index 3
val = document.links[3].className; //get class from absolute tag from index 3

val = document.links[0];
val = document.links[0].className; // output come out as string list
val = document.links[0].classList; // output come out as DOMTokenList like array
val = document.links[0].classList[0]; // can get class name in class attribute with index
val = document.links[0].classList[1];

val = document.images; // image information on document
val = document.images[0]; // image link or directory
val = document.images[0].src; // give image location
val = document.images[0].className; // image list as string list
val = document.images[0].classList; // image list as DOMTokenList list
val = document.images[0].classList[0]; // get image class name in image class attribute with index number
val = document.images[0].alt; // alt value
val = document.images[0].getAttribute('alt');
val = document.images[0].getAttribute('abcd');

// console.log(val);

// Change Styling
document.getElementById('task-title').style.background = "grey";
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "5px";

// Change Content စာသားကိုပြောင်းတာ
document.getElementById('task-title').textContent = "My List";
document.getElementById('task-title').innerText = "My Tasks";
document.getElementById('task-title').innerHTML = "My List";

document.getElementById('task-title').textContent = "<span style='color: yellow'>My List</span>";// can't write html code
document.getElementById('task-title').innerText = "<span style='color: yellow'>My Tasks</span>";// can't write html code
document.getElementById('task-title').innerHTML = "<span style='color: yellow'>My List</span>";

// HTML Collection (Array)
const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[3]);
items[3].style.color = "violet";
// items[3].innerHTML = "Have to shop";
// items[1].innerHTML = "<span>Prepare Dinner</
items[1].innerHTML = 'Prepare Dinner <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

//HTML Collection (Array)
const lis = document.getElementsByTagName('li');
// console.log(lis);
lis[0].style.color = 'red';
// lis[0].textContent = "Have to visit";

//document.querySelector()
/*console.log(document.querySelector('h4'));
console.log(document.querySelector('.task-title'));
console.log(document.querySelector('#task-title'));*/

/*
document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.color = 'green';
document.querySelector('ul li:last-of-type').style.color = 'blue';
document.querySelector('ul li:nth-of-type(3)').style.color = 'red';
document.querySelector('ul li:nth-of-type(3)').innerHTML = "have to cook";
*/

// const listitems = document.querySelector('ul').getElementsByTagName("li");
const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);

/*
document.querySelector('ul li:nth-of-type(odd)').style.background = "lightblue";
document.querySelector('ul li:nth-of-type(even)').style.background = "darkblue";
*/

//HTML Collection array (Cover HTML Collection array)
const lists = document.getElementsByTagName('li');
/*
console.log(lists);
console.log(lists.length);
console.log(lists[2]);
*/

/*
//Can't do like this
lists.forEach(function (list){
    console.log(list);
});
*/

const arrlis = Array.from(lists);

/*
arrlis.forEach(function(arrli) {
   // console.log(arrli);
   // console.log(arrli.className);
   arrli.innerText = 'Hello';
});
*/

/*
//With index number
arrlis.forEach(function (arrli,idx){
    arrli.textContent = `${idx} : Hello Myanmar`;
});
*/


//document.querySelectorAll() (nodelist = array) doesn't need to covert to pure array
let itsqs = document.querySelector('.collection .collection-item');

/*
console.log(itsqs);
console.log(itsqs.length); // can't call
console.log(itsqs.className);
console.log(itsqs[2]); //can't call like this bcoz it call individual
*/


let itsqsas = document.querySelectorAll('.collection .collection-item');

/*
console.log(itsqsas);
console.log(itsqsas.length);
console.log(itsqsas.className); //can't call like this
console.log(itsqsas[2]);
*/

itsqsas.forEach(function (itsqsa){
    // console.log(itsqsa);
    // console.log(itsqsa.className);
    // itsqsa.textContent = "Hello World";
});

itsqsas.forEach(function (itsqsa,idx){
    // console.log(itsqsa);
    // console.log(itsqsa.className);
    // itsqsa.textContent = "Hello World";
    // itsqsa.innerHTML = `${idx} : Hello Myanmar`;
});

const liodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(liodds);

const lievens = document.querySelectorAll('li:nth-child(even)');
// console.log(lievens);

liodds.forEach(function (liodd){
    // console.log(liodd);
    liodd.style.background = "gold";
});


for(let i=0; i < lievens.length; i++){
    lievens[i].style.background = "orange";
}

let chil;


// console.log(chil);


// Create Element
const li = document.createElement('li');

// Add Id
li.id = "new-item";

// Add Class
// li.className = 'collection-item';
li.classList.add('collection-item');

// Set Attribute
            // (att name, value)
li.setAttribute('title','new-item');

// Create Text Node
/* li.innerText = 'abc';
li.textContent = 'def';
li.innerHTML = 'ghi'; */


// Another method
// li.appendChild(document.createTextNode('Hello Mandalay'));

const newnode = document.createTextNode('Hello Yangon');

li.appendChild(newnode);

// console.log(li);


// create element for new link
const link = document.createElement('a');
// add attribute
link.setAttribute('href','#');
// add id
link.id = 'delete-item6';
//add class
// link.className = "delete-item";
// link.classList.add('delete-item','delete');
link.classList.add('delete-item');

link.innerHTML = `<i class="far fa-trash-alt"></i>`;
// console.log(link);

// Append link into li
li.appendChild(link);
// console.log(li);

// Append li as child into ul
document.querySelector('ul.collection').appendChild(li);



























// 2CTN WDFXXXX

/*
* val = document ဆိုတာ document (အကုန်လုံးကိုသိသွားတာ) တခုလုံးကို လာပေးတာ အဲဒါကြောင့် document.getElementByID
* ဆိုတာ document ထဲမှာရှိတယ့် ဘယ်ID ကိုလာပေးဆိုတာကိုပြောနေတာ
*
* document ထဲက doctype ကိုလိုချင်ရင် document.doctype ဆိုပြီပေးလိုက်ရင်ရပြီ
*
* document.head လိုပေးလိုက်ရင် document ထဲက head တပိုင်းလုံးရလာတယ် (ပြောမယ်ဆိုရင် link ချိတ်တာအားလုံး)
*
* document.body ကလည်း document.head လိုပဲတခုလုံးကိုပါလာမှာ
*
* document.URL က file ရဲ့ပတ်လမ်းကြောင်း/domain name ရလာတယ်
*
* document.forms (မှာတခုသတိရမှာ forms မှာ 's' ပါတယ်) HTMLCollection (ပြတာက
* array လိုမျိုးပြတာ output ကို) ဆိုပြီရလာတယ်
* သူကိုဖြည်ချကျရင် length ဆိုတာပါတယ် သူကဘာကိုပြလည်းဆိုတော့ form ဘယ်နှစ်ခုရှိလည်းဆိုတာကိုပြတာ
* သူထဲမှာ form နဲ့ပတ်သက်တဲ့ information အကုန်ရှိတယ်
*
* form မှာ class တွေ id တွေ မပေးပါနဲ့ ခေါ်လို့ရတယ် ဘယ်လိုခေါ်လည်းဆိုရင် document.forms
* ဆိုပြီခေါ်တယ်
*
* form တွေကို index number နဲ့လည်းခေါ်လို့ရတယ် document.forms[0/1/2/etc...];
*
* document.forms[0].id ဆိုတာ form 0 ထဲက id ကို လှမ်းယူတာ
*
* document.forms[0].class ဆိုပြီ တိုက်ရိုက်လှမ်းယူလို့မရဘူး ID ကိုပဲယူလို့ရတာ
*
* document.forms[0].action ကျတော့ file လမ်းကြောင်းထွက်တာ action ထဲမှာက
* database ရဲ့ပတ်လမ်းကြောင်းကိုထည့်ပေးရတာ/value မရှိရင် page ကိုပဲပြန်လာတာ
*
* document.forms[0].method ဘာမှမထည့်ထားရင် get ရတယ်/ method က protocol
* database ပတ်လမ်းကြောင်းကိုဘာနဲ့သွားထည့်လည်းဆိုတာကိုပြောတာ
*
* document.links လိုပေးလိုက်ရင် HTMLCollections(6) ဆိုပြီထွက်လာတယ် သူက HTML project
* တခုလုံးမှာ absolute tag/links ဘယ်နှစ်ခုရှိလည်းဆိုတာကိုပြတာ
*
* document.links[3] လိုခေါ်လိုက်ရင် number 4 ခုမြောက်ရဲ့ absolute tag ကိုခေါ်ထုတ်မယ်/ဖော်ပြမယ်
*
* document.links[3].id လိုခေါ်ရင် အဲ links[3] ရဲ့ အထဲက ID ကိုထုတ်ပေးမှာ
*
* document.links[3].href လိုခေါ်ရင် အဲ file လမ်းကြောင်းအပြင် အဲ့ absolute tag ရဲ့ link
* ကိုပါ append လုပ်ပေးလိုက်တာ
*
* document.links[3] မှာ class ကိုခေါ်ချင်ရင် ဒီလို document.links[3].className
* ဆိုပြီခေါ်လို့ရတယ်
* တကယ်လို့ class name မှာ value တခုထပ်ပို့ရှိခဲ့ value ရှိသလောက်ထွက်လာမှာ
* but className လိုပေးလိုက်ရင် string အနေနဲ့ထွက်လာတာ ခွဲလို့မရဘူး
* ခွဲပြီလိုချင်ရင် classList ဆိုတာကိုသုံးရတယ်
*
* document.links[3].classList က ထွက်ရင် array အနေနဲ့ထွက်တာ
* (DOMTokenList နဲ့ထွက်တာ) array နဲ့ထွက်တဲ့ အတွက် index ပြန်ထောက်ပြီခေါ်လို့ရတယ်
*
* document.images ကတော့ img တွေကိုဆွဲထုတ်ပေးတာ HTMLCollection နဲ့ထွက်တာ (ပြောမယ်ဆို
* ရင် array နဲ့ထွက်တာ)
* သူကိုခေါ်ချင်ရင် index number နဲ့ခေါ်လို့ရတယ်
*
* document.images[0].src က ပုံရဲ့ပတ်လမ်းကြောင်းကိုထုတ်
*
* document.images[0].className က ကျတော့ အပေါ်က အတိုင်းပဲ string list နဲထွက်လာမှာ
* document.images[0].classList ကတော့ array list နဲ့ထွက်လာမှာ DOM Token list လိုမျိုး
* document.images[0].alt ကတော့ alt ရဲ့ value ကိုထုတ်ပေးတာ
*
* document.images[0].getAttribute ဆိုတာ image tag ထဲမှာရှိတဲ့ သူရဲ့လိုချင်တဲ့
* specific attribute ကိုခေါ်တာ / နောက်ကိုယ်ပိုင်လိုချင်တဲ့ attribute ကိုလည်းလိုချင်လည်း
* ယူလို့ရတယ်
*
*
* CSS ရဲ့ property and style ကိုသုံးချင်ရင် (.style) ဆိုပြီ သုံးရတယ်
* document.getElementById('task-title').style.background = "grey";
*
* innerText & textContent မှာ HTML code အလုပ်မလုပ်ဘူး innerHTML မှာပဲ HTML code
* အလုပ်လုပ်တာ ကျန်တဲ့ text တွေပြောင်းဖို့တွက်ဆိုရင်တော့ innerText, textContent & innerHTML
* အားလုံးအလုပ်လုပ်တယ်
*
* document.getElementsByClassName ကိုသုံးပြီ class ကိုခေါ်ရင် # ထည့်စရာမလိုဘူး ဒီတိုင်းခေါ်လို့ရတယ်
* getElementsByClassName ကိုသုံးပြီ class တွေကိုခေါ်ရင် အဲ class name နဲ့တူတဲ့ class
* အားလုံးထွက်လာမယ်
* ထွက်လာတဲ့ value က HTMLCollection ထွက်လာတာ array လိုမျိုး
*
* document.querySelector() က powerful ဖြစ်တယ် သူက tag, class, id ၃ခုလုံးကိုခေါ်လို့ရတယ်
* တခုသတိထားရမှာက class နဲ့ id ကိုခေါ်ရင် (.),(#) နဲ့ခေါ်ရမယ်
* document.getElementByTagName ကျတော့ querySelector() နဲ့အတူတူပဲခေါ်တာက
* getElementById ကျတော့ (.) နဲ့ခေါ်စရာမလိုဘူး
* getElementByClassName ဆိုရင်လည်း အတူတူပဲ (#) နဲ့ခေါ်စရာမလိုဘူး
*
* querySelector ကိုသုံးပြီ tag,class,id ကိုခေါ်ရင် array လိုမျိုးအားလုံးထွက်လာတာမဟုတ်ပဲ
* အဲ tag,class,id တွေရဲ့ ပထမဆုံးတခုပဲထွက်လာတာ
* querySelector မှာ tag to tag / sudo element / sudo class အဲဒါတွေအားလုံးသုံးလို့
* ရတဲ့ အပြင် innerHTML, innerText, innerContent ဆိုတဲ့စာသားအစားထိုးတဲ့ attributes
* တွေပါသုံးလို့ရတယ်
*
* document.querySelector('ul').getElementsByTagName("li") ဒါကတော့ အကုန်ထုတ်ချင်
* ရင်သုံးဖို့အတွက် သူမှာ tagName / ClassName ပဲခေါ်လို့ရမယ် ID ခေါ်လို့မရဘူ id တခုပဲရှိနေလို့ unique
* ဖြစ်နေလို့
*
* querySelector ကို သုံးပြီ background/text ထည့် အဲလို style တခုခုပြောင်းတာလုပ်ရင်လည်း ထိပ်ဆုံးက
* ဟာပဲဖြစ်တယ် ဘာလို့လည်းဆိုတော့ သူက querySelector ဖြစ်နေလို့
*
* HTML Collection array က looping ဒီတိုင်းပတ်လို့မရဘူး ပတ်ချင်ရင် သူကို pure array
* ပြောင်းပေးရတယ်
* pure array ပြောင်းဖို့အတွက် Array.form(); ဆိုတာကိုသုံးပေးရတယ်
* looping ကိုလည်း index number တွေနဲ့လည်းထုတ်လို့ရတယ်
*
*   
*
*
*
*
*
*
*
*
*
*
* */

/*
* HTML Collections လို ပြောရင် array လို့မြင်ရမယ်
* */