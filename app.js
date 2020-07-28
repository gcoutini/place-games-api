const app = require('./config/express');

process.env.PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}...`);
});