import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/testimonials`);
      const data = await response.json();
      setTestimonials(data.testimonials);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTestimonial = async (newTestimonial) => {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTestimonial)
    });
    const data = await response.json();
    if (response.ok) {
      await fetchTestimonials();
    }
    return data;
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return { testimonials, loading, error, addTestimonial, fetchTestimonials };
};