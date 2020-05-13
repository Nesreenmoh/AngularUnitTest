import { CustomerReservation } from './customer-reservation';

describe('Customer Reservation', () => {
  let customerService: CustomerReservation;

  // we need it to setup our test and object and any test will not be affacted by other tests
  beforeEach(() => {
    customerService = new CustomerReservation();
  });

  // destoying the object after running all tests
  afterAll(() => {
    customerService = null;
  });

  // this will run only one time  before all tests
  beforeAll(() => {});
  // this will run only one time after all tests
  afterAll(() => {});

  it('should register customer, and increase current customer count by 1', () => {
    customerService.registerCustomer();
    expect(customerService.customerCount).toBe(11);
  });

  it('should unregister customer, and decrease current customer count by 1', () => {
    customerService.unRegisterCustomer();
    expect(customerService.customerCount).toBe(9);
  });

  it('Testing a room is reserved or not', () => {
    // arrange and create an object of a class
    //act
    const reserved = customerService.reserveRoom();
    //assert
    expect(reserved).toBeTruthy();
  });
});
