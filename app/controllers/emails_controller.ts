import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import { forgotPasswordValidator, changePasswordValidator } from '#validators/user'

export default class EmailsController {
  public async passwordedit({ params, view }: HttpContext) {
    const email: string = params.email
    return view.render('security/passwordedit', { email: [email] })
  }
  public async sendPassword({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await forgotPasswordValidator.validate(data)
    User.findByOrFail('email', payload.email)
    const appHost = process.env.APP_URL
    await mail.send((message) => {
      message
        .to(payload.email)
        .from('argykaselve@gmail.com')
        .subject('Verify your email address')
        .html(
          `<a href="${appHost}/passwordedit/${payload.email}" target="_blank" >Voici le lien pour réinsaliser votre mot de passe !</a>`
        )
    })
    return response.redirect('/login')
  }

  public async passwordEnregistrement({ params, request, response }: HttpContext) {
    const email: string = params.email
    const data = request.all()
    const payload = await changePasswordValidator.validate(data)
    const user = await User.findByOrFail('email', email)

    user.password = payload.password
    await user.save()

    return response.redirect('/login')
  }
}
