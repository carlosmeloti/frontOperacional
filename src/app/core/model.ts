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

export class Cadfrequencia {
  codigo: number;
  cadEmpresa = new Cadempresa();
  nmFrequencia: string;
}

export class Cadtipodemetodo {
  codigo: number;
  cadEmpresa = new Cadempresa();
  tipometodo: string;
}

export class Cadmaterial {
  codigo: number;
  cadEmpresa = new Cadempresa();
  nmmaterial: string;
}

export class Cadtipodeverificador {
  cdTipoVerificador: number;
  nmTipoVerificador: string;
  nrniveis: number;
  rotulonivel1: string;
  rotulonivel2: string;
  rotulonivel3: string;
  rotulonivel4: string;
  rotulonivel5: string;
}

export class Cadniveldeavaliacao {
  codigo: number;
  nmnivelavaliacao: string;
  sigla: string;
  txdescricao: string;
}

export class Verificador_m {
  id: number;
  codigo: number;
  cadEmpresa = new Cadempresa();
  cadTipoDeVerificador = new Cadtipodeverificador();
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



