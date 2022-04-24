import jwt from 'jsonwebtoken';

export const genarateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || 'Pietra22',
        {
            expiresIn: '30d',
        }
    );
};