import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  const mockItem = [
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2020-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    },
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Movimentação",
      description: "et labore proident aute nulla",
      status: "processing",
      amount: 2078.66,
      date: "2020-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    },
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Teste",
      description: "et labore proident aute nulla",
      status: "processed",
      amount: 2078.66,
      date: "2020-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filtrar por titulo', () => {
    expect(pipe.transform(mockItem, 'resgate', '')).toEqual([mockItem[0]]);
  });

  it('filtrar por status', () => {
    expect(pipe.transform(mockItem, '', 'processed')).toEqual([mockItem[2]]);
  });

  it('se os valores do filtro forem zero', () => {
    expect(pipe.transform(mockItem, '', '')).toEqual(mockItem);
  });

});
