import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/Books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Collection : AngularFirestoreCollection<Book>;
  Doc : AngularFirestoreDocument<Book>;
  books : Observable<Book[]>;

  constructor(private afs : AngularFirestore) { 
    this.Collection = this.afs.collection('Islamic');
    this.books = this.Collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );
  }

  getBooks(){
    return this.books;
  }
}
