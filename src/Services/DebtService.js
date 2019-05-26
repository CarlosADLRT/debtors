import { sbxCoreService } from '../Network/index';

export default class DebtService {
  static addNewDebt(data) {
    return sbxCoreService.insert('debt', data);
  }
  static addPay(data) {
    // TODO: Me falta actualizar la deduda con el pago que se le dio si es abono a capital.
    return sbxCoreService.insert('pay', data);
  }
}
