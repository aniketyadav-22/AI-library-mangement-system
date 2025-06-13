const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  author: {
    type: String, 
    required: true 
},
  description: { type: String },
  category: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' 
},
  copiesAvailable: { 
    type: Number, 
    default: 1 
},
  totalCopies: { 
    type: Number, 
    default: 1 
},
  addedAt: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Book', bookSchema);
