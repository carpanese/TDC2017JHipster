
const enum Status {
    'OPEN',
    'PROGRESS',
    'DONE'

};
import { User } from '../../shared';
export class Task {
    constructor(
        public id?: number,
        public descricao?: string,
        public status?: Status,
        public duoDate?: any,
        public user?: User,
    ) {
    }
}
