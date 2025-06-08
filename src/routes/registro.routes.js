import { Router } from "express";
import {
    getRegistros, 
    getregistrosxid,
    postRegistro,
    putRegistro,
    patchRegistro,
    deleteRegistro
} from '../controladores/registroCtrl.js'
const router=Router()
//armar nuestras rutas

router.get('/mediciones', getRegistros)  //select
router.get('/mediciones/:id',getregistrosxid)  //select x id
router.post('/mediciones',postRegistro)  //insert
router.put('/mediciones/:id',putRegistro)  //update
router.patch('/mediciones/:id',patchRegistro)  //update
router.delete('/mediciones/:id',deleteRegistro)  //delete

export default router
