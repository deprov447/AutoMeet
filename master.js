var subject= require("./app"),
    conf = require("./config.json"),
    open = require("open");
var prevsub;
if(subject!=="none")
{
    console.log("Opening " + subject + " on " + conf.browser+ "....");
    open(conf.links[subject], { app: conf.browser });
    prevsub=subject;
    setInterval(function()
    {
        subject= require("./app");
        if(subject!=prevsub)
        {
            console.log("Opening " + subject + " on " + conf.browser+ "....");
            open(conf.links[subject], { app: conf.browser });
            prevsub=subject;
        }
    },1000*60)
}
else
{
    console.log("Maybe this isnt some classtime...\n");
    setTimeout(function(){
        console.log("Or maybe theres an error :)");
        setTimeout(function(){
            console.log("Opening default link...");
            open(conf.links["default"], { app: conf.browser });
        },2000)
    },5000)
}

// loops every 1 mins
