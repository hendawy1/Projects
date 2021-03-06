var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leaderschema = new Schema({
		name: {
			type: String,
			required: true,
			unique: true
	    		},
	    	image: {
			type: String,
			required: true
			},

	    
	    	designation: {
			type: String,
			required: true
	    		},

	    	abbr: {
			type: String,
			required: true
	    		},
			
	    	description: {
			type: String,
			required: true
	    		}

	    		
	
	}, 
	{
    		timestamps: true
	});
var  Leaders = mongoose.model('leader',leaderschema);
module.exports = Leaders;

