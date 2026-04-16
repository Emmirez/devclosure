const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const testimonialsAPI = {
  // Get all testimonials
  getAll: async () => {
    const response = await fetch(`${API_URL}/testimonials`);
    return response.json();
  },
  
  // Create new testimonial
  create: async (data) => {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  // Update testimonial (admin)
  update: async (id, data, adminKey) => {
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Key': adminKey
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  // Delete testimonial (admin)
  delete: async (id, adminKey) => {
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Key': adminKey }
    });
    return response.json();
  }
};