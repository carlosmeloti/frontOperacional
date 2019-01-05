export class Cadempresa {
    codigo = 1  
}

export class Cadamostragem {
    codigo: number;
    cadempresa = new Cadempresa();
    nmamostragem: string;
}