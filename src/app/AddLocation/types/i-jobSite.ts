import { IBaseModel } from '../../../interfaces/i-base-model';

export interface IJobSite extends IBaseModel {
    name: string
    address: {
        city: string,
        state: string,
        street: string,
        zipcode: string
    },
    location: {
        coordinates: {
            long: number,
            lat: number
        }
    },
    customerId: string,
    companyId: string
}
