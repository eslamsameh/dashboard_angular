import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ArticalsRoutnigModule,routedComponents} from './artical-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ArticalTagesService } from '../../@core/data/ArticalTags.service';
import { CKEditorModule } from 'ngx-ckeditor';


@NgModule({
  imports: [
    ThemeModule,
    ArticalsRoutnigModule,
    Ng2SmartTableModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ArticalTagesService
  ],
})
export class ArticalsModule { }
