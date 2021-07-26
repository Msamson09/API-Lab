import { Router } from 'express'
const router = Router()
import * as charactersCtrl from '../controllers/characters.js'

router.get('/characters', charactersCtrl.index)
router.get('/characters/:id', charactersCtrl.show)
router.post('characters', charactersCtrl.create)
router.put('characters/:id', charactersCtrl.update)
router.delete('characters/:id', charactersCtrl.delete)


export {
  router
}
