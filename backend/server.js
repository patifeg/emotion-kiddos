import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();

console.log('tentar conexão');

mongoose.connect(process.env.MONGDODB_URL || 'mongodb://127.0.0.1/EmotionKiddos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected!"));

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Produto não encontrado' })
    }

});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});