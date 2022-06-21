let dbEmpresas = {};
const empresas = localStorage.getItem('dbEmpresas');

const data_empresas = {
    empresas: [
        {
            empresa: 'Empresa 1',
            endereco: 'Avenida Abílio Machado 810',
            cep: '30820971',
            email: 'empresacoletora1@email.com',
            telefone: '31981433985',
            materiais: [' Pilhas', ' Baterias', ' Telefones', ' Celulares'],
},
        {
        empresa: 'Empresa 2',
        endereco: 'Rua São Domingos',
        cep: '30610628',
        email: 'empresacoletora2@email.com',
        telefone: '31992534761',
        materiais: [' Pilhas', ' Baterias', ' Computadores'],


},
        {
        empresa: 'Empresa 3',
        endereco: 'Rua Cerejeira',
        cep: '37045025',
        email: 'empresacoletora3@email.com',
        telefone: '31986538215',
        materiais: [' Pilhas', ' Baterias', ' Telefones', ' Celulares'],


},
        {
        empresa: 'Empresa 4',
        endereco: 'Rua Peregrino Varela',
        cep: '35931462',
        email: 'empresacoletora4@email.com',
        telefone: '31999075679',
        materiais: [' Eletrodomésticos', ' Computadores', ' Celulares'],
    },
      
] 
};


if(!empresas) {
    dbEmpresas = data_empresas;
    localStorage.setItem('dbEmpresas', JSON.stringify(data_empresas));
} else {
    dbEmpresas = JSON.parse(empresas);
}
