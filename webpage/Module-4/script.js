//Immediately invoked function expression IIFE
(function(){
    
    var names = ["Max","John","Jen","Pual","Frank","Larry","Paula","Laura","Jim"];
     for (var i=0;i<names.length;i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        console.log(firstLetter);
        if (firstLetter === 'j')
        {
            byeSpeaker.speak(names[i]);
        }
        else
        {
            helloSpeaker.speak(names[i]);
        }
  
     }
    
})();


