import Product from '#models/product'
import Sale from '#models/sale'
import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public async index({ view, auth }: HttpContext) {
    const recentSales = await Sale.query()
      .orderBy('created_at', 'desc')
      .where('userid', Number(auth.user?.id))
      .limit(5)

    const saleS = recentSales.map((sale) => {
      return {
        date: sale.createdAt.plus({ hours: 2 }).toFormat('dd/MM/yyyy HH:mm'),
        amount: Number(sale.totalPrice),
      }
    })

    const total =
      (
        await Product.query()
          .sum('quantity as total')
          .where('userid', Number(auth.user?.id))
          .first()
      )?.$extras.total || 0
    const vente =
      (
        await Sale.query()
          .sum('total_price as total')
          .where('userid', Number(auth.user?.id))
          .first()
      )?.$extras.total || 0
    const alt =
      (
        await Product.query()
          .where('alert_expired', true)
          .where('userid', Number(auth.user?.id))
          .count('* as total')
      )[0]?.$extras.total || 0
    const SALE = await Sale.query()
      .orderBy('created_at', 'desc')
      .where('userid', Number(auth.user?.id))
      .limit(5)
      .preload('product')

    return view.render('dashboard', {
      totalStock: total,
      venteMois: vente,
      Alerte: alt,
      sales: SALE,
      auth,
      saleS,
    })
  }
}
