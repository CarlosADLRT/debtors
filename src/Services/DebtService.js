import { sbxCoreService } from '../Network/index';
import environment from '../environment';

export default class DebtService {
  static addNewDebt(data) {
    return sbxCoreService.insert('debt', data);
  }
  static addPay(data) {
    return sbxCoreService
      .run(environment.cs.addPay, data)
      .then(res => res.response.body);
  }
}
