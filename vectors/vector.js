vector=
{
	_x:0,
	_y:0,

	// dummy constructor
	create : function(x,y){obj= Object.create(vector);obj._y=y; obj._x=x; return obj;},

	// member functions
	getX : function(){ return this._x},
	getY : function(){ return this._y},
	setX : function(value){  this._x=value;},
	setY : function(value){  this._y=value;},
	getLength : function(){ return Math.sqrt(this._x*this._x + this._y*this._y)},
	getAngle : function(){ return Math.atan2(this._y,this._x) },
	setAngle : function(angle){ length=this.getLength(); this._y =Math.cos(angle)*length; this._x= Math.sin(angle)*length; },
	setlegth: function(length){ angle=this.getAngle(); this._y=Math.cos(angle)*length; this._x=Math.sin(angle)*length; }
}