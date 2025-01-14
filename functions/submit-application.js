// functions/submit-application.js
const mongoose = require('mongoose');

// Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  bufferCommands: false, // Disable mongoose buffering
};

// Track connection status
let isConnected = false;

// Connect to MongoDB
const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, options);
    isConnected = db.connections[0].readyState;
    console.log('=> Using new database connection');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

// Application Schema
const applicationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  submittedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create the model
let Application;
try {
  // Try to get the existing model
  Application = mongoose.model('Application');
} catch {
  // If it doesn't exist, create it
  Application = mongoose.model('Application', applicationSchema);
}

exports.handler = async (event, context) => {
  // Set context callbackWaitsForEmptyEventLoop to false
  context.callbackWaitsForEmptyEventLoop = false;

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Configure this according to your needs
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);

    // Validate required fields
    const { name, email, phone, description } = data;
    if (!name || !email || !phone || !description) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          error: 'Missing required fields',
        }),
      };
    }

    // Connect to database
    await connectToDatabase();

    // Create new application
    const application = new Application({
      name,
      email,
      phone,
      description,
      submittedAt: new Date()
    });

    // Save to database
    const savedApplication = await application.save();

    // Return success response
    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Application submitted successfully',
        data: {
          id: savedApplication._id,
          submittedAt: savedApplication.submittedAt
        }
      }),
    };

  } catch (error) {
    console.error('Error processing request:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          error: 'Validation error',
          details: Object.values(error.errors).map(err => err.message)
        }),
      };
    }

    // Handle other errors
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Internal server error',
      }),
    };
  }
};