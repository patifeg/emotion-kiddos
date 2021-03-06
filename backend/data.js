import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'Michel',
            email: 'admin@example.com',
            password: bcrypt.hashSync('fpw', 8),
            isAdmin: true,
        },
        {
            name: 'Pam',
            email: 'pam@example.com',
            password: bcrypt.hashSync('fpw', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Vestido Cinderela P',
            category: 'Vestidos',
            image: '/images/p1.jpg',
            price: 279,
            countInStock: 10,
            brand: 'EK',
            rating: 4.5,
            numReviews: 10,
            description: 'Vestido de alta qualidade da princesa do sapatinho de cristal',
        },
        {
            name: 'Vestido Jasmine P',
            category: 'Vestidos',
            image: '/images/p2.jpg',
            price: 179,
            countInStock: 20,
            brand: 'EK',
            rating: 3.2,
            numReviews: 25,
            description: 'Vestido de alta qualidade',
        },
        {
            name: 'Vestido Cinderela M',
            category: 'Vestidos',
            image: '/images/p1.jpg',
            price: 279,
            countInStock: 0,
            brand: 'EK',
            rating: 2.5,
            numReviews: 8,
            description: 'Vestido de alta qualidade da princesa do sapatinho de cristal',
        },
        {
            name: 'Vestido Jasmine M',
            category: 'Vestidos',
            image: '/images/p2.jpg',
            price: 179,
            countInStock: 12,
            brand: 'EK',
            rating: 5,
            numReviews: 5,
            description: 'Vestido de alta qualidade',
        },
        {
            name: 'Vestido Cinderela G',
            category: 'Vestidos',
            image: '/images/p1.jpg',
            price: 279,
            countInStock: 0,
            brand: 'EK',
            rating: 4.5,
            numReviews: 10,
            description: 'Vestido de alta qualidade da princesa do sapatinho de cristal',
        },
        {
            name: 'Vestido Jasmine G',
            category: 'Vestidos',
            image: '/images/p2.jpg',
            price: 179,
            countInStock: 2,
            brand: 'EK',
            rating: 3.5,
            numReviews: 7,
            description: 'Vestido de alta qualidade',
        },
    ],
};
export default data