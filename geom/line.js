line={
    p1:{},
    p2:{},
    length: function(){
    return Math.sqrt(Math.pow((p1.x-p2.x),2)+ Math.pow((p1.y-p2.y),2))
    },
    create:function(p1,p2){
        var obj= Object.create(this);
        obj.p1=p1;
        obj.p2=p2;
        return obj;
    },
    drawLine:function(p1,p2){
        if(p1 instanceof Point && p2 instanceof Point){
           return "M "+p1.x+" "+p1.y+" L "+p2.x+" "+p2.y; 
        }
        if(p1 instanceof Array && p2 instanceof Array ){
            if(p1.length== p2.length){
                // Recursive funtion for creating multiple lines using p1 entry as starting point and p2 entry as ending point
                let a1=p1.reverse().slice();
                let a2=p2.reverse().slice();
                return (function binaryArrayLineBuilder(a1 ,a2){
                    if(a1.length&& a2.length){
                        var popp1=a1.pop();
                        var popp2=a2.pop();
                        return "M "+popp1.x+" "+popp1.y+" L "+popp2.x+" "+popp2.y +" "+ binaryArrayLineBuilder(a1,a2);
                    }
                    else{
                        return "";
                    }
                })(a1,a2)
            }
        }
        // if p1 is single array item then iterate through it
        // and build line
        else if(p1 instanceof Array && !p2){
            let a1=p1.reverse().slice()
            return (function arrayLineBuilder(a1){
                if(a1.length){
                    let popp=a1.pop();
                    return "M "+popp.x+" "+popp.y+" "+arrayLineBuilder(a1);
                }
                else{
                    return "";
                }
            })(a1)
        }
    
    }
}