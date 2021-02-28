"use strict";
// // console.log("hello, world");

// // var images = document.getElementsByTagName('img');
// // console.log(images);
// // var phrase = document.getElementsByTagName('p');
// // console.log(phrase)

// // var heading = document.getElementById('mainarticle');
// // console.log(heading);

// var mainarticle = document.getElementById('main');
// // mainarticle.setAttribute('align', 'right')

// // var youtube = document.getElementById('youtube');
// // youtube.innerHTML('Wellcome to My Youtube');

// var new_heading = document.createElement('h2');
 
// new_heading.innerHTML = 'Subscribe';
// mainarticle.appendChild(new_heading);

// var button = document.getElementById('btn');
// button.onclick = function()
// {
//     alert('hello');
// }

var u_name = document.myform.u_name;
var message = document.getElementById("message");
var pword = document.myform.pword;
var pmessage = document.getElementById("pmessage");


function runMe()
{
    if( u_name.value.length < 3){
        message.innerHTML = "Very Weak";
        message.style.color = "red";
    } else if( u_name.value.length < 6 ){
        message.innerHTML = "Weak";
        message.style.color = "orange";
    }else if( u_name.value.length < 9 ){
        message.innerHTML = "medium";
        message.style.color = "blue";
    }else {
        message.innerHTML = "strong";
        message.style.color = "green";
    }

}
function prunMe()
{
    if( pword.value.length < 3){
        pmessage.innerHTML = "Very Weak";
        pmessage.style.color = "red";
    } else if( pword.value.length < 6 ){
        pmessage.innerHTML = "Weak";
        message.style.color = "orange";
    }else if( pword.value.length < 9 ){
        pmessage.innerHTML = "medium";
        pmessage.style.color = "blue";
    }else {
        pmessage.innerHTML = "strong";
        pmessage.style.color = "green";
    }

}

//console.log('hello, world');
//message.innerHTML = " hello";   
