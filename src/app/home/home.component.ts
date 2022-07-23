import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// firebase:
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pdfSrc: string;
  loadginState: boolean = false;

  constructor(private _storage: Storage, private _matDialog: MatDialog) {
    this.pdfSrc = '';
    // this.loadginState = false;
    this.downloadPdf();
  }

  ngOnInit(): void {}

  downloadPdf(): void {
    // this.loadginState = true;
    const pdfRef = ref(this._storage, 'pdfs');
    listAll(pdfRef)
      .then(async (response) => {
        // console.log('reponse:', response);
        const url = await getDownloadURL(response.items[0]);
        this.pdfSrc = url;
        // console.log('item:', url);
        // this.openDialog();
        // this.loadginState = false;
      })
      .catch((error) => {
        console.log(error);
        this._matDialog.open(PopUpComponent);
      });
  }
}
