import { SbxCoreService, SbxSessionService } from 'sbx-axios';
import Environment from '../Utils/Environment';

const sbxCoreService = new SbxCoreService();
const sbxSessionService = new SbxSessionService(sbxCoreService);
sbxSessionService.initialize(Environment.domain, Environment.appKey);

export { sbxSessionService, sbxCoreService };
