const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Recommended options for MongoDB connection
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message); // Log detailed error message
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = { db };