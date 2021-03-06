import { task } from 'mobx-task';
import { computed, observable } from 'mobx';
import {
  createLocationTag,
  fetchCustomers,
  fetchJobLocation,
  fetchJobSites
} from '../api';
import { ICustomer } from '../types/i-customer';
import { IJobLocation } from '../types/i-jobLocation';
import { IJobSite } from '../types/i-jobSite';
import AddPhotosStore from './add-photos-store';
import { Service } from '../../../config/services';

export default class LocationDetailStore {
  @observable public customers: ICustomer[] = [];

  @observable public selectedCustomer?: ICustomer;

  @observable public selectedJobLocation?: IJobLocation;

  @observable public selectedJobSite?: IJobSite;

  @observable public note?: string;

  @observable public address?: string;

  @observable public selectedCustomerJobLocations: IJobLocation[] = [];

  @observable public selectedCustomerJobSites: IJobSite[] = [];

  public photosStore?: AddPhotosStore;

  constructor(public nfcTag: string = '123123128') {}

  @task
  public async fetchCustomers() {
    const {
      data: { customers },
    } = await fetchCustomers();
    this.customers = customers;
  }

  @task
  public async fetchCustomerJobLocations() {
    const data: any = {
      companyId: this.selectedCustomer?.company,
      customerId: this.selectedCustomer?._id
    };
    const res = await fetchJobLocation(data);
    this.selectedCustomerJobLocations = res.data;
  }

  @task
  public async fetchCustomerJobSites() {
    const data: any = {
      locationId: this.selectedJobLocation?._id,
      customerId: this.selectedCustomer?._id
    };
    const res = await fetchJobSites(data);
    this.selectedCustomerJobSites = res.data;
  }

  @task.resolved
  public async createLocation() {
    const locationData: any = {
      customerId: this.selectedCustomer!._id,
      images: this.photosStore!.imageUrls.join(','),
      address: this.address!,
      note: this.note!,
      nfcTag: this.nfcTag,
      jobLocationId: this.selectedJobLocation?._id,
    };

    if (this.selectedJobSite) {
      locationData.jobSiteId = this.selectedJobSite._id;
    }

    const res = await createLocationTag(locationData);
    return res.data;
  }

  @computed
  public get isLocationDataValid(): boolean {
    return [this.selectedJobLocation, this.address]
      .every((i) => i !== undefined);
  }

  @computed
  public get isCustomerDataValid(): boolean {
    return [this.selectedCustomer].every((i) => i !== undefined);
  }
}
