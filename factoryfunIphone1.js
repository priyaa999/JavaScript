function iPhone1(ASIN,color,display,camera){
 let obj = {};

 obj.ASIN = ASIN;
 obj.color = color;
 obj.display = display;
 obj.camera = camera;

 obj.dial = function(){
    console.log("tring..tring...");
    
 }
 obj.sendMessage = function(){
    console.log("Sending message")
 }
obj.cameraClick = function(){
    console.log("Camera clicked")
}
   return obj
}

let i1 = iPhone1(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP"
  );
//   ---- properties
  console.log(i1.ASIN); // 1
  console.log(i1.color); // "B09X67JBQV"
  console.log(i1.display); // 7.8
  console.log(i1.camera); // "IOS"
  
//   ---- methods
  console.log(i1.dial()); // "tring.. tring..."
  console.log(i1.sendMessage()); // "Sending message..."
  console.log(i1.cameraClick()); // "Camera clicked"
  

