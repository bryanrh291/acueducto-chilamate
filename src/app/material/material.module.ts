import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers:[
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
