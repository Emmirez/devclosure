import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  initials: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    default: 'Client'
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  text: {
    type: String,
    required: true,
    minlength: 20
  },
  createdAt: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Index for better query performance
testimonialSchema.index({ createdAt: -1 });
testimonialSchema.index({ stars: -1 });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;