var mongoose;

function init(mong){
	mongoose=mong;
}

function space(){
	var spaceSchema=mongoose.Schema({
			'title':String,
			'thumbUrl':String,
			'nodes':[{modelUrl:String, location:[Number], rotation:[Number], size:Number}]
	});
		
	userSchema.static('findById', function(id, callback){
		return this.find({id:id}, callback);
	});

	userSchema.static('findAll', function(callback){
		return this.find({},callback);
	});	

	return spaceSchema;
}

module.exports.init=init;
module.exports.space=space;
