// Required packeges:
const mongoose = require('mongoose')

// Connect to MongoDB
// H@$k$yHf$36c2JJ
// completeMERNstakeEcommerceDB
const mongooseConnection = async () => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: '',
      pass: '',
    }
    await mongoose.connect(`mongodb+srv://completeMERNstakeEcommerceDB:H%40$k$yHf$36c2JJ@cluster0.ptptzcl.mongodb.net/completeMernStakeProjectDB?retryWrites=true&w=majority`)
    console.log(
      `MongoDB Successfully Connected with-- ${mongoose.connection.name}`.green
        .bold
    )
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// Module Connection:

module.exports = { mongooseConnection }
