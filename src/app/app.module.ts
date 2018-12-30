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


const routes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: 'cadempresa', component:CadempresaComponent},
  { path: 'cadamostragem', component:CadamostragemComponent},
  { path: 'cadfrequencia', component:CadfrequenciaComponent},
  { path: 'cadniveldeavaliacao', component:CadniveldeavaliacaoComponent},
  { path: 'cadtipodemetodo', component:CadtipodemetodoComponent},
  { path: 'cadtipodeverificador', component:CadtipodeverificadorComponent},
  { path: 'cadmaterial', component:CadmaterialComponent},
  { path: 'verificador_m', component:VerificadorMComponent},
  { path: 'unidadelocalsublocal', component:UnidadelocalsublocalComponent},
  { path: 'niveishierarquicos', component:NiveishierarquicosComponent},
  { path: 'modmonitoramento', component:ModmonitoramentoComponent},
  { path: 'appmonitoramento', component:AppmonitoramentoComponent},
  { path: 'appmonitoramentoverificador', component:AppmonitoramentoverificadorComponent},
  { path: 'appavaliacao', component:AppavaliacaoComponent},
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
    AppavaliacaoComponent

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
    AppRoutingModule
  ],
  providers: [
    NodeService,
    CadamostragemService,
    CadempresaService,
    CadniveldeavaliacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
