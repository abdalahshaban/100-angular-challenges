import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { COMPONENTS_ROUTES } from './components.routes';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { SharedModule } from '../shared/shared.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { TabsComponent } from './tabs/tabs.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ToggleComponent,
    ModalComponent,
    QuoteComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    SnackbarComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
