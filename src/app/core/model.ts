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
pkLocal1 = new Modlocal1_PK();
nmlocal1: string;
}

export class Modlocal1_PK {
cdLocal1: number;
cdEmpresa = new Cadempresa();
}

export class Modlocal2 {
pkLocal2 = new Modlocal2_PK();
nmLocal2: string;
}

export class Modlocal2_PK {
cdLocal2: number;
cdEmpresa = new Modlocal1_PK();
cdLocal1 = new Modlocal1_PK();
}


export class Modlocal3 {
pkLocal3 = new Modlocal3_PK();
nmLocal3: string;
}

export class Modlocal3_PK {
cdLocal3: number;
cdEmpresa = new Cadempresa();
cdLocal1 = new Modlocal2_PK();
cdLocal2 = new Modlocal2_PK();
}


export class ModNivel1 {
  pkNivel1 = new ModNivel1_PK();
  nmNivel1: string;
}

export class ModNivel1_PK {
  cdNivel1: number;
  cdEmpresa = new Cadempresa();
}

export class ModNivel2 {
  pkNivel2 = new ModNivel2_PK()
  nmNivel2: string;
}

export class ModNivel2_PK {
  cdNivel2: number;
  cdNivel1 = new ModNivel1_PK();
  cdEmpresa = new ModNivel1_PK();
}

export class ModNivel3 {
  pkNivel3 = new ModNivel3_PK();
  nmNivel3: string;
}

export class ModNivel3_PK {
  cdNivel3: number;
  cdNivel1 = new ModNivel2_PK();
  cdNivel2 = new ModNivel2_PK();
  cdEmpresa = new ModNivel2_PK();
}

export class ModNivel4 {
  pkNivel4 = new ModNivel4_PK();
  nmNivel4: string;
}

export class ModNivel4_PK {
  cdNivel4: number;
  cdNivel1 = new ModNivel3_PK();
  cdNivel2 = new ModNivel3_PK();
  cdNivel3 = new ModNivel3_PK();
  cdEmpresa = new ModNivel3_PK();
}

export class ModMonitoramentoTemplate {
 cdTemplate: number;
 mmTemplate: string;
 cdTipoDeVerificador = new Cadtipodeverificador();
}





