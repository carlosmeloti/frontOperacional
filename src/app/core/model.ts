export class Cadempresa {
    codigo: number;
    nmEmpresa: string;
    nmAbreviado: string;
    nrTelefone: string;
    enderecoCompleto: string;
    pessoContato: string;
    cnpjEmpresa: string;
    diretorioArquivos: string;
}

export class Cadamostragem {
    codigo: number;
    cadEmpresa = new Cadempresa();
    nmamostragem: string;
}


            