import { Component, ViewChild } from '@angular/core';
import { Book } from '../model/Books';
import { ApiService } from '../services/api.service';
import { StorageService, Item  } from '../services/storage/storage.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  
  pdfSrc ="https://firebasestorage.googleapis.com/v0/b/books-90def.appspot.com/o/%D9%82%D9%84%D8%A7%D8%AF%D8%A9-%D9%85%D8%B1%D8%AF%D9%88%D8%AE-kutub-pdf.net.pdf?alt=media&token=1fb54274-9faa-41a1-b531-5a590f680a8d";
  page ="100" ;
  public pdfZoom:number = 1;
  public ZOOM_STEP:number = 0.25;
  public DEFAULT_ZOOM:number = 1;
  
	public zoomIn()
	{
		this.pdfZoom += this.ZOOM_STEP;
	}

	public zoomOut()
	{
		if (this.pdfZoom > this.DEFAULT_ZOOM) {
      this.pdfZoom -= this.ZOOM_STEP;
    }
    console.log(this.page);
  }
  
  next: number;
  pageNext(){
    this.next = parseInt(this.page);
    this.next++;
    this.page = this.next.toString();
    console.log(this.page);
  }
  
  back: number;
  pageBack(){
    this.back = parseInt(this.page);
    this.back--;
    this.page = this.back.toString();
    console.log(this.page);
  }

  //Firestore  
  Books : Book[];

  //Sqlite
  items: Item[] = []; 
  newItem: Item = <Item>{} 
                              
  constructor(private apiService: ApiService, private storageService: StorageService, private plt: Platform,
    private toastController: ToastController) {
      this.loadItems();
    }
  
   //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.getBooks().subscribe(books => {
      this.Books = books;
    })
  }
  
  //Sqlite
  ArrayIds = new Array();
  itemExist: Item = {
    id:"1",
    page:"12"
  }
  
  check :Boolean = true;

  Save(){
    this.loadIds();
    this.check = this.ArrayIds.includes(this.itemExist.id);
    if(!this.check){
      this.addItem();
    }else{
      this.updateItem(this.itemExist);
    }
    console.log(this.page);
  }

  loadItems(){
    this.storageService.getItems().then(items=>{
      this.items = items;
    });
  }

  loadIds(){
    this.loadItems();
    for(let i of this.items){
      this.ArrayIds.push(i.id);
    }
  }

  //Create
  addItem(){
    this.storageService.addItem(this.newItem).then(item => {
      //this.newItem = <Item>{};
      this.loadItems();
    });
  }

  //Update
  updateItem(item: Item){
    this.storageService.updateItem(item).then(item =>{
      this.loadItems();
    });
  }

  
}

