import { Component, Input, OnInit } from '@angular/core';
import { StorageService, Item  } from '../services/storage/storage.service';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AdmobService } from '../services/admob/admob.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {
  
  BookInput: any;
  pdfSrc: any;
  page ="1";
  id:string;
  itemExist : Item;

  constructor(private storageService: StorageService, private plt: Platform, private route: ActivatedRoute,
     private router: Router, private loadingController: LoadingController, private navCtrl: NavController) {
      //this.loadItems();
      
      this.route.queryParams.subscribe(params => {
        if(params && params.data){
          
          this.BookInput = JSON.parse(params.data);

          this.pdfSrc = this.BookInput.pdf;

          this.presentLoading();
          //this.id = this.BookInput.id;

          /*this.itemExist = {
            id: this.id,
            page: this.page
          } */

          /*this.storageService.getItems().then(val =>{
              this.items = val;
              this.loadPage();
              this.page = this.itemExist.page;
          })
          */
        }
      })
    }

  ngOnInit(): void {
  }

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

  }
  
  next: number;
  pageNext(){
    this.next = parseInt(this.page);
    this.next++;
    this.page = this.next.toString();
  }
  
  back: number;
  pageBack(){
    this.back = parseInt(this.page);
    this.back--;
    this.page = this.back.toString();
  }

  goback() {
    this.navCtrl.pop();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'cssClass',
      message: 'جار التحميل',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  //Sqlite
  /*items: Item[] = []; 
  ArrayIds = new Array();
  check :Boolean ;

  obj;

  loadPage(){
    this.loadIds();
    this.check = this.ArrayIds.includes(this.itemExist.id);
    if(this.check){
      this.obj = this.items.find(o => o.id === this.itemExist.id);
      this.itemExist.page = this.obj.page;
    }else{
      this.page = "1";
    }
  }

  Save(){
    this.loadIds();
    this.check = this.ArrayIds.includes(this.itemExist.id);
    this.itemExist.page = this.page;
    if(!this.check){
      this.addItem();
    }else{
      this.updateItem(this.itemExist);
    }
    this.loadIds();
    Swal.fire(
      'لقد تم حفظ الصفحة بنجاح'
    )
  }

  loadItems(){
    this.storageService.getItems().then(items=>{
      this.items = items;
    });
  }

  loadIds(){
    this.loadItems();
    if(this.items !== null){
      for(let i of this.items){
        this.ArrayIds.push(i.id);
      }
    }
    
  }

  //Create
  addItem(){
    this.storageService.addItem(this.itemExist).then(item => {
      this.loadItems();
    });
  }

  //Update
  updateItem(item: Item){
    this.storageService.updateItem(item).then(item =>{
      this.loadItems();
    });
  }
  */
  

}