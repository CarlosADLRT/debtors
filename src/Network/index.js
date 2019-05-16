import { SbxCoreService, SbxSessionService } from 'sbx-axios';
import Enviroment from '../Utils/Enviroment';

const sbxCoreService = new SbxCoreService();
const sbxSessionService = new SbxSessionService(sbxCoreService);
sbxSessionService.initialize(Enviroment.domain, Enviroment.appKey);

export { sbxSessionService, sbxCoreService };
