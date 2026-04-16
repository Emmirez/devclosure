export const verifyAdminKey = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'] || req.query.adminKey;
  
  if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ 
      error: 'Unauthorized: Invalid admin key',
      hint: 'Provide admin key in X-Admin-Key header'
    });
  }
  
  next();
};