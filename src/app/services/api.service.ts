import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/Books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  islamicCollection : AngularFirestoreCollection<Book>;
  islamicBooks : Observable<Book[]>;

  americanLiteratureCollection : AngularFirestoreCollection<Book>;
  americanLiteratureBooks : Observable<Book[]>;

  arabicLiteratureCollection : AngularFirestoreCollection<Book>;
  arabicLiteratureBooks : Observable<Book[]>;

  arabicNovelsCollection : AngularFirestoreCollection<Book>;
  arabicNovelsBooks : Observable<Book[]>;

  childrenCollection : AngularFirestoreCollection<Book>;
  childrenBooks : Observable<Book[]>;

  englishCollection : AngularFirestoreCollection<Book>;
  englishBooks : Observable<Book[]>;

  frenchCollection : AngularFirestoreCollection<Book>;
  frenchBooks : Observable<Book[]>;

  germanCollection : AngularFirestoreCollection<Book>;
  germanBooks : Observable<Book[]>;

  historyCollection : AngularFirestoreCollection<Book>;
  historyBooks : Observable<Book[]>;

  horrorCollection : AngularFirestoreCollection<Book>;
  horrorBooks : Observable<Book[]>;

  humanCollection : AngularFirestoreCollection<Book>;
  humanBooks : Observable<Book[]>;

  internationalCollection : AngularFirestoreCollection<Book>;
  internationalBooks : Observable<Book[]>;

  medicalCollection : AngularFirestoreCollection<Book>;
  medicalBooks : Observable<Book[]>;

  philosophyCollection : AngularFirestoreCollection<Book>;
  philosophyBooks : Observable<Book[]>;

  pocketCollection : AngularFirestoreCollection<Book>;
  pocketBooks : Observable<Book[]>;

  psychologyCollection : AngularFirestoreCollection<Book>;
  psychologyBooks : Observable<Book[]>;

  romanticCollection : AngularFirestoreCollection<Book>;
  romanticBooks : Observable<Book[]>;

  thinkCollection : AngularFirestoreCollection<Book>;
  thinkBooks : Observable<Book[]>;

  constructor(private afs : AngularFirestore) { 
    //Islamic
    this.islamicCollection = this.afs.collection('Islamic');
    this.islamicBooks = this. islamicCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //american-literature
    this.americanLiteratureCollection = this.afs.collection('american-literature');
    this.americanLiteratureBooks = this.americanLiteratureCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //arabic-literature
    this.arabicLiteratureCollection = this.afs.collection('arabic-literature');
    this.arabicLiteratureBooks = this.arabicLiteratureCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //arabic-novels
    this.arabicNovelsCollection = this.afs.collection('arabic-novels');
    this.arabicNovelsBooks = this.arabicNovelsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //children-stories
    this.childrenCollection = this.afs.collection('children-stories');
    this.childrenBooks = this.childrenCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //english-literature
    this.englishCollection = this.afs.collection('english-literature');
    this.englishBooks = this.englishCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //french-literature
    this.frenchCollection = this.afs.collection('french-literature');
    this.frenchBooks = this.frenchCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //german-literature  
    this.germanCollection = this.afs.collection('german-literature');
    this.germanBooks = this.germanCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );   

    //history-book
    this.historyCollection = this.afs.collection('history-book');
    this.historyBooks = this.historyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      ); 

    //horror-novels
    this.horrorCollection = this.afs.collection('horror-novels');
    this.horrorBooks = this.horrorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );    

    //human-developement
    this.humanCollection = this.afs.collection('human-developement');
    this.humanBooks = this.humanCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //international-novels
    this.internationalCollection = this.afs.collection('international-novels');
    this.internationalBooks = this.internationalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //medical-book
    this.medicalCollection = this.afs.collection('medical-book');
    this.medicalBooks = this.medicalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //philosophy
    this.philosophyCollection = this.afs.collection('philosophy');
    this.philosophyBooks = this.philosophyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //pocket-novels
    this.pocketCollection = this.afs.collection('pocket-novels');
    this.pocketBooks = this.pocketCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //psychology-and-sociology
    this.psychologyCollection = this.afs.collection('psychology-and-sociology');
    this.psychologyBooks = this.psychologyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //romantic-novels
    this.romanticCollection = this.afs.collection('romantic-novels');
    this.romanticBooks = this.romanticCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

    //think-and-culture
    this.thinkCollection = this.afs.collection('think-and-culture');
    this.thinkBooks = this.thinkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );

  }

  getislamicBooks(){
    return this.islamicBooks;
  }

  getamericanLiteratureBooks(){
    return this.americanLiteratureBooks;
  }

  getarabicLiteratureBooks(){
    return this.arabicLiteratureBooks;
  }

  getarabicNovelsBooks(){
    return this.arabicNovelsBooks;
  }

  getchildrenBooks(){
    return this.childrenBooks;
  }

  getenglishBooks(){
    return this.englishBooks;
  }

  getfrenchBooks(){
    return this.frenchBooks;
  }

  getgermanBooks(){
    return this.germanBooks;
  }

  gethistoryBooks(){
    return this.historyBooks;
  }

  gethorrorBooks(){
    return this.horrorBooks;
  }

  gethumanBooks(){
    return this.humanBooks;
  }

  getinternationalBooks(){
    return this.internationalBooks;
  }

  getmedicalBooks(){
    return this.medicalBooks;
  }

  getphilosophyBooks(){
    return this.philosophyBooks;
  }

  getpocketBooks(){
    return this.pocketBooks;
  }

  getpsychologyBooks(){
    return this.psychologyBooks;
  }

  getromanticBooks(){
    return this.romanticBooks;
  }

  getthinkBooks(){
    return this.thinkBooks;
  }

}
