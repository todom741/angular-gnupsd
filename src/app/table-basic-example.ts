import {Component} from '@angular/core';

export interface FileList {
  name: string;
  date: string;
}

const FILE_DATA: FileList[] = [
  {name: 'FileUpload01.jpg', date: "01-01-2020"},
  {name: 'FileUpload02.jpg', date: "01-02-2020"},
  {name: 'FileUpload03.jpg', date: "01-03-2020"},
  {name: 'FileUpload04.jpg', date: "01-04-2020"},
  {name: 'FileUpload05.jpg', date: "01-05-2020"},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['name', 'date'];
  dataSource = FILE_DATA;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */