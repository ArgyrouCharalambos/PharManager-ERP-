import type { HttpContext } from '@adonisjs/core/http'
import Sale from '#models/sale'
import Product from '#models/product'

export default class SalesController {
  public async index({ view, auth }: HttpContext) {
    const sales = await Sale.query().preload('product').where('userid', Number(auth.user?.id))
    const SALE = await Sale.query()
      .preload('product')
      .orderBy('created_at', 'desc')
      .where('userid', Number(auth.user?.id))
    return view.render('sales/index', { sales, SALE, auth })
  }

  public async create({ view, auth }: HttpContext) {
    const products = await Product.findManyBy('userid', auth.user?.id)

    return view.render('sales/create', { products })
  }

  public async store({ request, response, auth }: HttpContext) {
    const { product_name, quantity_sold } = request.only(['product_name', 'quantity_sold'])

    const product = await Product.findByOrFail('name', product_name)
    if (product.quantity < quantity_sold) {
      throw new Error('Stock insuffisant')
    }

    const totalPrice = product.price * quantity_sold
    await Sale.create({
      productId: product.id,
      quantitySold: quantity_sold,
      totalPrice: totalPrice,
      paymentMethod: 'cash',
      userid: auth.user?.id,
    })

    product.quantity -= quantity_sold
    await product.save()

    return response.redirect('/sales')
  }
  public async stats({}: HttpContext) {}
}
