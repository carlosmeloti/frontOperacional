import { CadtipodeverificadorService } from './cadtipodeverificador/cadtipodeverificador.service';
import { CadmaterialService } from './cadmaterial/cadmaterial.service';
import { CadtipodemetodoService } from './cadtipodemetodo/cadtipodemetodo.service';
import { CadfrequenciaService } from './cadfrequencia/cadfrequencia.service';
import { CadamostragemService } from './cadamostragem/cadamostragem.service';
import { CadempresaService } from './cadempresa/cadempresa.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {TreeModule} from 'primeng/tree';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {InputTextareaModule} from 'primeng/inputtextarea';
import { MenuComponent } from './menu/menu.component';
import { CadempresaComponent } from './cadempresa/cadempresa.component';
import { CadtipodeverificadorComponent } from './cadtipodeverificador/cadtipodeverificador.component';
import { CadniveldeavaliacaoComponent } from './cadniveldeavaliacao/cadniveldeavaliacao.component';
import { CadamostragemComponent } from './cadamostragem/cadamostragem.component';
import { CadfrequenciaComponent } from './cadfrequencia/cadfrequencia.component';
import { CadtipodemetodoComponent } from './cadtipodemetodo/cadtipodemetodo.component';
import { CadmaterialComponent } from './cadmaterial/cadmaterial.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerificadorMComponent } from './verificador-m/verificador-m.component';
import { ArvorelocaisComponent } from './arvorelocais/arvorelocais.component';
import { NodeService } from 'src/service/nodeservice';
import { UnidadelocalsublocalComponent } from './unidadelocalsublocal/unidadelocalsublocal.component';
import { NiveishierarquicosComponent } from './niveishierarquicos/niveishierarquicos.component';
import { ModmonitoramentoComponent } from './modmonitoramento/modmonitoramento.component';
import { AppmonitoramentoComponent } from './appmonitoramento/appmonitoramento.component';
import { AppmonitoramentoverificadorComponent } from './appmonitoramentoverificador/appmonitoramentoverificador.component';
import { AppavaliacaoComponent } from './appavaliacao/appavaliacao.component';
import { CadniveldeavaliacaoService } from './cadniveldeavaliacao/cadniveldeavaliacao.service';
import { ErrorHandlerService } from './core/error-handler.service';
import { VerificadorMService } from './verificador-m/verificador-m.service';
import { VerificadorMEditandoComponent } from './verificador-m/verificador-m-editando/verificador-m-editando.component';
import { VerificadorMEditandoService } from './verificador-m/verificador-m-editando/verificador-m-editando.service';
import { VerificadorMAssociarComponent } from './verificador-m/verificador-m-associar/verificador-m-associar.component';
import { VerificadorMAssociarService } from './verificador-m/verificador-m-associar/verificador-m-associar.service';

import { Modlocal1Component } from './modlocal1/modlocal1.component';
import { Modlocal1Service } from './modlocal1/modlocal1.service';
import { Modlocal2Component } from './modlocal2/modlocal2.component';


const routes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: 'cadempresa', component:CadempresaComponent},
  { path: 'cadempresa/:codigo', component:CadempresaComponent},
  { path: 'cadamostragem', component:CadamostragemComponent},
  { path: 'cadamostragem/:codigo', component:CadamostragemComponent},
  { path: 'cadfrequencia', component:CadfrequenciaComponent},
  { path: 'cadfrequencia/:codigo', component:CadfrequenciaComponent},
  { path: 'cadniveldeavaliacao', component:CadniveldeavaliacaoComponent},
  { path: 'cadniveldeavaliacao/:codigo', component:CadniveldeavaliacaoComponent},
  { path: 'cadtipodemetodo', component:CadtipodemetodoComponent},
  { path: 'cadtipodemetodo/:codigo', component:CadtipodemetodoComponent},
  { path: 'cadtipodeverificador', component:CadtipodeverificadorComponent},
  { path: 'cadtipodeverificador/:codigo', component:CadtipodeverificadorComponent},
  { path: 'cadmaterial', component:CadmaterialComponent},
  { path: 'cadmaterial/:codigo', component:CadmaterialComponent},
  { path: 'verificador_m', component:VerificadorMComponent},
  { path: 'verificador_m/:codigo', component:VerificadorMEditandoComponent},
  { path: 'verificador_m/associar/:codigo', component:VerificadorMAssociarComponent},
  { path: 'unidadelocalsublocal', component:UnidadelocalsublocalComponent},
  { path: 'niveishierarquicos', component:NiveishierarquicosComponent},
  { path: 'modmonitoramento', component:ModmonitoramentoComponent},
  { path: 'appmonitoramento', component:AppmonitoramentoComponent},
  { path: 'appmonitoramentoverificador', component:AppmonitoramentoverificadorComponent},
  { path: 'appavaliacao', component:AppavaliacaoComponent},
  { path: 'modlocal1', component:Modlocal1Component},
  { path: 'modlocal1/:codigo', component:Modlocal1Component},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadempresaComponent,
    CadtipodeverificadorComponent,
    CadniveldeavaliacaoComponent,
    CadamostragemComponent,
    CadfrequenciaComponent,
    CadtipodemetodoComponent,
    CadmaterialComponent,
    InicioComponent,
    VerificadorMComponent,
    ArvorelocaisComponent,
    UnidadelocalsublocalComponent,
    NiveishierarquicosComponent,
    ModmonitoramentoComponent,
    AppmonitoramentoComponent,
    AppmonitoramentoverificadorComponent,
    AppavaliacaoComponent,
    VerificadorMEditandoComponent,
    VerificadorMAssociarComponent,
    Modlocal1Component,
    Modlocal2Component

  ],
  imports: [
    AccordionModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule,
    InputMaskModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    TabViewModule,
    TooltipModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    TreeModule,
    CheckboxModule,
    CalendarModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    AppRoutingModule
  ],
  providers: [
    NodeService,
    CadamostragemService,
    CadtipodemetodoService,
    CadfrequenciaService,
    CadempresaService,
    CadmaterialService,
    CadtipodeverificadorService,
    CadniveldeavaliacaoService,
    ConfirmationService,
    VerificadorMService,
    VerificadorMEditandoService,
    VerificadorMAssociarService,
    Modlocal1Service,
    ErrorHandlerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
