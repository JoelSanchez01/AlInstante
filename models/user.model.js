import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  nombre: {
    type: String, 
    requiered: true,
    trim: false, 
    unique: false
  },
  username: {
    type: String, 
    requiered: true,
    trim: true, 
    unique: false
  },
  correo: {
    type: String, 
    requiered: true,
    trim: true, 
    unique: true,
    lowercase: true,
  },
  password: {
    type: String, 
    requiered: true,
    trim: true, 
    unique: true,
    select: true
  }
}, 
  {
    timestamps: true
  }
)

export default mongoose.model('User', userSchema)