//Let's make some objects again, but this time they can do stuff.
const hat = { 
    size : "large",
    color : "blue",
    onHead : false,
    material : "corduroy",
    adjustable : true,
    brim : true,
    sayHi : function() {
        console.log(`I'm a ${this.size} ${this.color} ${this.material} hat`);
    },
    putOn : function() {
        this.onHead = true;
    },
    takeOff : function() {
        this.onHead = false;
    }
};
