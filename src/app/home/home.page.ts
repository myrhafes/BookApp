import { Component } from '@angular/core';
import { Book } from '../model/Books';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  Books : Book[];
  pdfSrc ="https://firebasestorage.googleapis.com/v0/b/books-90def.appspot.com/o/%D9%82%D9%84%D8%A7%D8%AF%D8%A9-%D9%85%D8%B1%D8%AF%D9%88%D8%AE-kutub-pdf.net.pdf?alt=media&token=4dc82ccf-0342-4efb-94ba-5aefa22ceafa";
  page = "60";
  public pdfZoom:number = 1;
  public ZOOM_STEP:number = 0.25;
  public DEFAULT_ZOOM:number = 1;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe(books => {
      this.Books = books;
    })
  }
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

	public resetZoom()
	{
		this.pdfZoom = this.DEFAULT_ZOOM;
	}
  function(){
    console.log(this.Books);
  }
}

