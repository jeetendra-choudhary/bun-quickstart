import { Application } from 'express'
import controller from '../app/controller'


export default (app: Application) => {
    app.post('/user', controller.create)
    app.get('/user', controller.get)
    app.put('/user', controller.update)
    app.delete('/user', controller.remove)
}