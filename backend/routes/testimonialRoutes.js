import express from "express";
import {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getAdminStats,
  healthCheck,
} from "../controllers/testimonialController.js";
import { verifyAdminKey } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/health", healthCheck);
router.get("/testimonials", getTestimonials);
router.get("/testimonials/:id", getTestimonial);
router.post("/testimonials", createTestimonial);

// Admin only routes (require admin key)
router.get("/admin/stats", verifyAdminKey, getAdminStats);
router.put("/testimonials/:id", verifyAdminKey, updateTestimonial);
router.delete("/testimonials/:id", verifyAdminKey, deleteTestimonial);

export default router;
