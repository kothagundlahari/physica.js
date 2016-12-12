point=  {
create:function(p,q){
    if(typeof p == "number" && typeof q == "number"){
        var obj= Object.create(new Point);
        obj.x=p;
        obj.y=q;
        return obj;
    } 
    else 
    if(p instanceof Array &&  !!!q){
        var arr=new Array();
        thisObject=this;
        p.forEach(function(a){
            var obj =Object.create(new Point);
            obj.x=a[0];
            obj.y=a[1];
            arr.push(obj);
        })
        return arr;
    }
    }
    
}

Point=function(x,y){
    this.x=x;this.y=y
}