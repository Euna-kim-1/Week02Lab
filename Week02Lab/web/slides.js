/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=initLinks;
var myPix = new Array("pics/NewYork.jpg","pics/Italy.jpg","pics/Lavaredo.jpg");
var thisPic=0;
function initLinks()
{ 
  document.getElementById("prevLink").onclick=processPrevious; 
  document.getElementById("nextLink").onclick=processNext; 
}

function processPrevious()
{
    if(thisPic==0)
    {
     thisPic=myPix.length;
    }
    thisPic--;
    document.getElementById("myPicture").src=myPix[thisPic];
    return false;
}

function processNext()
{
  thisPic++;
  if(thisPic==myPix.length)
 {
   thisPic=0;
  }
   document.getElementById("myPicture").src=myPix[thisPic];
   return false;
}


