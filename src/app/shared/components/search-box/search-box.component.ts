import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  //this DebounceSusbcription is a subscription type that can be igualado to a Subject/Observable
  //due to the response of this ones are a Subscription type response
  private debouncerSuscription?: Subscription;

  // Subject is a type of Observable, it haves the same attributes as the Observable (.pipe, .subscribe)
  private debouncer: Subject<string> = new Subject<string>()

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';


  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  //After the declaration of the debouncer and the debounceSubscription, we can connect them on the
  //ngOnInit() --> when the app initializes  first function;
  ngOnInit(): void {
    this.debouncerSuscription =  this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })
  }

  // ngOnDestroy acts when the component is closed. This means when the user changes the router and
  // new components need to be loaded (Even if it renders the same component) this will do some actions
  //  before changing "screen", in this case will unsubscribe from the debouncer call
  ngOnDestroy(): void {
    this.debouncer.unsubscribe()
  }

  sendSearchValue = (value: string) => {
    this.onValue.emit(value);
  }

  onKeyPress ( searchTerm: string) {
    this.debouncer.next(searchTerm)
 }

}
