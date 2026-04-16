import Testimonial from '../models/Testimonial.js';


export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json({ 
      success: true,
      count: testimonials.length,
      testimonials 
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch testimonials' 
    });
  }
};


export const getTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne({ id: req.params.id });
    
    if (!testimonial) {
      return res.status(404).json({ 
        success: false,
        error: 'Testimonial not found' 
      });
    }
    
    res.json({ 
      success: true,
      testimonial 
    });
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch testimonial' 
    });
  }
};


export const createTestimonial = async (req, res) => {
  try {
    const { id, initials, name, role, stars, text, createdAt } = req.body;
    
    // Validation
    if (!name || !text || !stars) {
      return res.status(400).json({ 
        success: false,
        error: 'Name, text, and stars are required' 
      });
    }
    
    if (text.length < 20) {
      return res.status(400).json({ 
        success: false,
        error: 'Testimonial must be at least 20 characters' 
      });
    }
    
    if (stars < 1 || stars > 5) {
      return res.status(400).json({ 
        success: false,
        error: 'Stars must be between 1 and 5' 
      });
    }
    
    // Check if testimonial with same id exists
    const existing = await Testimonial.findOne({ id });
    if (existing) {
      return res.status(400).json({ 
        success: false,
        error: 'Testimonial with this ID already exists' 
      });
    }
    
    const testimonial = await Testimonial.create({
      id,
      initials,
      name: name.trim(),
      role: role?.trim() || 'Client',
      stars,
      text: text.trim(),
      createdAt
    });
    
    res.status(201).json({ 
      success: true,
      testimonial 
    });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create testimonial' 
    });
  }
};


export const updateTestimonial = async (req, res) => {
  try {
    const { name, role, stars, text } = req.body;
    
    // Build update object
    const updateData = {};
    if (name) updateData.name = name.trim();
    if (role !== undefined) updateData.role = role?.trim() || 'Client';
    if (stars) updateData.stars = stars;
    if (text) updateData.text = text.trim();
    
    const testimonial = await Testimonial.findOneAndUpdate(
      { id: req.params.id },
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!testimonial) {
      return res.status(404).json({ 
        success: false,
        error: 'Testimonial not found' 
      });
    }
    
    res.json({ 
      success: true,
      testimonial 
    });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to update testimonial' 
    });
  }
};


export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findOneAndDelete({ id: req.params.id });
    
    if (!testimonial) {
      return res.status(404).json({ 
        success: false,
        error: 'Testimonial not found' 
      });
    }
    
    res.json({ 
      success: true,
      message: 'Testimonial deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete testimonial' 
    });
  }
};


export const getAdminStats = async (req, res) => {
  try {
    const total = await Testimonial.countDocuments();
    const averageStars = await Testimonial.aggregate([
      { $group: { _id: null, avg: { $avg: '$stars' } } }
    ]);
    
    res.json({ 
      success: true,
      stats: {
        total,
        averageStars: averageStars[0]?.avg || 0
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch stats' 
    });
  }
};


export const healthCheck = (req, res) => {
  res.json({ 
    success: true,
    status: 'OK', 
    timestamp: Date.now(),
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
};