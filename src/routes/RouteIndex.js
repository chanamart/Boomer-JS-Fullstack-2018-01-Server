import Route from './Route';
import packageJson from '../../package.json';

@Route.Route({
  routeBase: '',
})
export default class RouteIndex extends Route {
  constructor(params) {
    super({ ...params, model: 'users' });
  }

  @Route.Get({
    path: 'user/:pseudo',  
  })
  async user(ctx) {
    const user = await this.model.findOne({ where: { pseudo: ctx.params.pseudo }, attributes: ['id', 'pseudo', 'defeat', 'score', 'rank'] });
    this.sendOk(ctx, user);
  }
  
  @Route.Get({
    path: 'top',  
  })
  async top(ctx) {
    var Sequelize = require('sequelize');
    const op = Sequelize.Op;
    const top = await this.model.findAll({limit: 5, order: [['score', 'DESC']], where: { score: { [op.gt]: 0 }}, attributes: ['id', 'pseudo', 'score'] });

    for (let index = 0; index < top.length; index++) {
      top[index].dataValues.rank = index + 1;      
    }
    this.sendOk(ctx, top);
  }
}
