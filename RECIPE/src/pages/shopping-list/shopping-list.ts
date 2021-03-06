import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";
import { PopoverController } from 'ionic-angular';
import { SLOptionsPage } from './sl-options/sl-options';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(private slService: ShoppingListService,private popOverCtrl:PopoverController) {}

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }
  onBtnShoppingItemClick(index: number){
    this.slService.removeItem(index);
    this.loadItems();
  }
  onShowOptions(event:MouseEvent){
      const popover= this.popOverCtrl.create(SLOptionsPage);
      popover.present({ev:event});

      popover.onDidDismiss(
        data=>{
            if(data.action == "load"){
                this.slService.storeList()
                              .subscribe(
                                ()=>{console.log("success"),
                                error=>{console.log("error")}});
            }else{

            }
        });
  }
  private loadItems() {
    this.listItems = this.slService.getItems();
  }
}
