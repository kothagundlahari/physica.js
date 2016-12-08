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
    }
}