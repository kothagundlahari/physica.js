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
            
        }
        if(p1 instanceof Array && p2 instanceof Array ){
            if(p1.length== p2.length){
                // Recursive funtion for creating multiple lines using p1 entry as starting point and p2 entry as ending point
                a1=p1.slice();
                a2=p2.slice();
                return (function arrayLineBuilder(a1 ,a2){
                    if(a1.length&& a2.length){
                        console.log(a1, a2);
                        var popp1=a1.pop();
                        var popp2=a2.pop();
                        console.log("pop 1 & 2");
                        console.log(popp1, popp2)
                        return "M "+popp1.x+" "+popp1.y+" L "+popp2.x+" "+popp2.y +" "+ arrayLineBuilder(a1,a2);
                    }
                    else{
                        return "";
                    }
                })(a1,a2)
            }
        }
        else if(p1 instanceof Array && !p2){
            
        }
    
    }
}