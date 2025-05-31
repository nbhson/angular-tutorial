import { Inject, Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class UIService<VIEW_MODEL> implements OnInit {

  /* view-model là instance của component & html sẽ binding tới */
  model: VIEW_MODEL;

  constructor(@Inject(String) private _model?: VIEW_MODEL) {
    /** khởi tạo view-model */
    // this.model = <VIEW_MODEL>{};
    this.model = _model ? _model : <VIEW_MODEL>{};
  }

  ngOnInit(): void {
    /**
     * Overwrite this method in your implementation of the ui-service
     * and make all the needed initializations, 
     * including setting default values on the view-model (if it is the case)
     */
  }
}