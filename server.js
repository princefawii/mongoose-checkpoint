const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.MONGO_URI;
console.log(URI)

mongoose.connect( URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

//To check for the connectivity to the MongoDB

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the schema for the Person model
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // The 'name' field is required
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String], // An array of strings
  },
  // You can add more fields here as needed
});

// Create the Person model based on the schema
 const Person = mongoose.model('Person', personSchema);

// // Create a new Person document instance
// const firstPerson= new Person({
//   name: 'Kunle Rabiu',
//   age: 41,
//   favoriteFoods: ['Eba', 'Amala', 'Garri'],
// });

// // Save the new person to the database using a promise
// firstPerson.save()
//   .then((savedPerson) => {
//     console.log('Person saved successfully:', savedPerson);

//     // You can perform additional actions here with the saved document
//   })
//   .catch((err) => {
//     console.error('Error saving person:', err);
//   });

// const peopleArray = [
//   {
//     name: 'Kunle Rabiu',
//     age: 41,
//     favoriteFoods: ['Eba', 'Amala', 'Garri'],
//   },
//   {
//     name: 'Diipo poju',
//     age: 32,
//     favoriteFoods: ['fufu', 'pounded yam', 'milo'],
//   },
//   {
//     name: 'Obisesan Ajibade',
//     age: 21,
//     favoriteFoods: ['juice', 'rice', 'potatoe']
//   }
// ]

// // Use Promise.all() to create and save the people documents
// Promise.all(peopleArray.map(personData => new Person(personData).save()))
//   .then(savedPeople => {
//     console.log('People saved successfully:', savedPeople);
//   })
//   .catch(err => {
//     console.error('Error saving people:', err);
//   });

Person.find({ name: 'Kunle Rabiu' })
.then((people) => {
  console.log('People with the name "Kunle Rabiu":', people);
})
.catch((error) => {
  console.error('Error:', error);
});
;
  
  








