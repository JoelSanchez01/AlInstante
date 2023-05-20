import User from '../models/user.model.js'

//Consultar todos los usuarios
export const getUsers = async(req, res) => {
  try {
    const users = await User.find()
  res.json(users)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

//Crear usuario
export const createUsers = async(req, res) => {
  try {
    const { nombre, username, correo, password } =  req.body
    
  const user = new User({
    nombre, username, correo, password
  })
    
  await user.save()
  res.json(user)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

//Actualizar usuario
export const updateUsers = async(req, res) => {
  try {
    const {id} = req.params
  const userUpdated = await User.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(userUpdated)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

//Eliminar usuario
export const deleteUsers = async(req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)  
  
    if(!user) return res.status(404).json({
    message: 'User does not exist'
  })

  return res.json(user)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

//Consultar UN usuario
export const getUser = async(req, res) => {
  try {    
  const user = await User.findById(req.params.id)  

  if (!user) return res.status(404).json({
    message: 'User does not exist'
  })

  return res.json(user)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}
