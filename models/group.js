var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var PostSchema = new Schema ({
	completed: {type: Boolean, default: false},
	name: {type: String, required: false},
	content: { type: String, required: true}, 
	prayerCount: { type: Number, default: 0},
	createdAt: { type: Date, default: Date.now },
	comment: { type: String, default: "" },
	image_url: { type: String, required: false}

});



var GroupSchema = new Schema ({
	name: {type: String, required: true},
	posts: [PostSchema]
});




var Group = mongoose.model('Group', GroupSchema);



module.exports = Group;


