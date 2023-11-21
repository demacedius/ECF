import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Commentaire from 'App/Models/Commentaire'
import UpdateCommentaireValidator from 'App/Validators/UpdateCommentaireValidator'

export default class CommentairesController {
    async index ({ view }: HttpContextContract){
        const comment = await Commentaire.all()
        return view.render('partials/comments', {
            comment
        })
    }

    async create({view}:HttpContextContract){
        const comment = new Commentaire()
        return view.render('partials/create', {
            comment
        })
    }

    async store({ request, response}:HttpContextContract){
        const comment = await Commentaire.create({
            name: request.input('name'),
            content: request.input('content'),
            online: request.input('online')
        })
        return response.redirect().toRoute('home', {
            comment
        })
    }

    async show({ params, view }: HttpContextContract){
        const comment = await Commentaire.findOrFail(params.id)
        return view.render('partials/modify',{
            comment
        })
    }

    async update({params, request, response, session}:HttpContextContract){
        const comment = await Commentaire.findOrFail(params.id)
        const data = await await request.validate(UpdateCommentaireValidator)
        comment.merge({...data, online: data.online || false}).save()
        session.flash({success: "L'article a bien été sauvegarder"})
        return response.redirect().toRoute('home')
    }
    
    
}
