export class Cadempresa {
    cdEmpresa: number;
    nmEmpresa: string;
    nmAbreviado: string;
    nrTelefone: string;
    enderecoCompleto: string;
    pessoContato: string;
    cnpjEmpresa: string;
    diretorioArquivos: string;
}

export class Cadamostragem {
    cdAmostragem: number;
    cdEmpresa = new Cadempresa();
    nmAmostragem: string;
}


export class Cadfrequencia {
  cdFrequencia: number;
  cdEmpresa = new Cadempresa();
  nmFrequencia: string;
}

export class Cadtipodemetodo {
  cdTipoDeMetodo: number;
  cdEmpresa = new Cadempresa();
  nmTipoDeMetodo: string;
}

export class Cadmaterial {
  cdMaterial: number;
  cdEmpresa = new Cadempresa();
  nmMaterial: string;
}

export class Cadtipodeverificador {
  cdTipoDeVerificador: number;
  nmTipoDeVerificador: string;
  nrNiveis: number;
  rotuloNivel1: string;
  rotuloNivel2: string;
  rotuloNivel3: string;
  rotuloNivel4: string;
  rotuloNivel5: string;
}

export class Cadniveldeavaliacao {
  cdNivelDeAvaliacao: number;
  nmNivelDeAvaliacao: string;
  sigla: string;
  txDescricao: string;
}

export class Verificador_m {
  cdEmpresa = new Cadempresa();
  cdTipoDeVerificador =  new Cadtipodeverificador();
  cdVerificador: number;
  cadNivelDeAvaliacao = new Cadniveldeavaliacao();
  codalfa: string;
  nmverificador: string;
  limiar: string;
  p01_graco: number;

}



export class Modlocal1 {
  codigo: number;
  cadEmpresa = new Cadempresa();
  nmlocal1: string;
}

export class Modlocal2 {
  codigo: number;
  cadEmpresa = new Cadempresa();
  modlocal1 = new Modlocal1();
  nmlocal2: string;
}



