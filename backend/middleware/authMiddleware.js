import jwt from 'jsonwebtoken'


const authMiddleware = (req, res, next) => {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) 
        return res.json({ success: false, message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        res.json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware