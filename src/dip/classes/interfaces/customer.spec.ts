import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Sivuca', 'Silva', '555.555');
    expect(sut).toHaveProperty('firstName', 'Sivuca');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '555.555');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Sivuca', 'Silva', '555.555');
    expect(sut.getName()).toBe('Sivuca Silva');
    expect(sut.getIDN()).toBe('555.555');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Suvaquinho de ouro', '888.888');
    expect(sut).toHaveProperty('name', 'Suvaquinho de ouro');
    expect(sut).toHaveProperty('cnpj', '888.888');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Suvaquinho de ouro', '888.888');
    expect(sut.getName()).toBe('Suvaquinho de ouro');
    expect(sut.getIDN()).toBe('888.888');
  });
});
