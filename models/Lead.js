const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true ,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true ,
    match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please enter a valid phone number']
  },
  altPhone: {
    type: String,
    match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please enter a valid phone number']
  },
  altEmail: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Lost'],
    default: 'New'
  },
  qualification: {
    type: String,
    enum: ['High School', 'Bachelor', 'Master', 'PhD', 'Other']
  },
  interestField: {
    type: String,
    enum: ['Web Development', 'Data Science', 'Digital Marketing', 'Graphic Design', 'Other']
  },
  source: {
    type: String,
    enum: ['Website', 'Cold Call', 'Social Media', 'Referral', 'Campaign', 'Other'],
    required: true
  },
  assignedTo: {
    type: String,
    required: true
  },
  jobInterest: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  passoutYear: {
    type: Number,
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear() + 5, 'Year cannot be more than 5 years in the future']
  },
  headFrom: {
    type: String
  },
  address: {
    type: String,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  campaign: {
    type: String
  },
  reason: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);