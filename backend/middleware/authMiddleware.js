import jwt from 'jsonwebtoken'

   /**
 * Middleware to verify JWT token and attach user data to the request
 */
const authMiddleware = (req, res, next) => {

    // Extract Bearer token from Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // If no token, deny access
    if (!token) 
        return res.json({ success: false, message: "Access Denied" });

    try {

         // Verify and decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach user info (from token) to request object
        req.user = decoded; 
        next();
    } catch (err) {
        res.json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware