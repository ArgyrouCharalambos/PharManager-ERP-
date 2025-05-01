import type { HttpContext } from '@adonisjs/core/http'
import USER from '#models/user'
import {
  createUserValidator,
  connexionUserValidator,
} from '#validators/user'

export default class UsersController {
  //création d'un utilisateur
  public async create({ request, response }: HttpContext) {
        const data = request.all()
    const payload = await createUserValidator.validate(data)
    await USER.create({
      fullName:payload.fullName,
      password:payload.password,
      email:payload.email
    })
    response.redirect('/login') 
   
  }
  //connexion d'un utilisateur
  public async login({ request, auth, response }: HttpContext) {
    const data = request.all()
    const payload = await connexionUserValidator.validate(data)
    const user = await USER.verifyCredentials(payload.email, payload.password)

    await auth.use('web').login(user)

    response.redirect('/')
  }

  public async deconnect({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
  public async profil({ auth, view }: HttpContext) {
    const user = auth.user
    const fullName = user?.fullName
    const email = user?.email

    return view.render('pages/profil', {
      fullName: [fullName],
      email: [email],
    })
  }
}
