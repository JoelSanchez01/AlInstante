import { Router } from 'express'
import {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  getUser
       } from '../controllers/user.controller.js'
const router = Router()

router.get('/users', getUsers)

router.post('/users', createUsers)

router.put('/users/:id', updateUsers)

router.delete('/users/:id', deleteUsers)

router.get('/users/:id', getUser)

export default router