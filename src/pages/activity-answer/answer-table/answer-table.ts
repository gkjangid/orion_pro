import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';


@Component({
  selector:    'answer-table',
  templateUrl: 'answer-table.html'
})
export class AnswerTableComponent implements OnInit {

  @Input()  photoChanged:     boolean = false;
  @Input()  question:         any = {};
  @Input()  questionIdx:      number;
  @Input()  userActivity:     any = {};
  @Output() data:             EventEmitter<any> = new EventEmitter();
  @ViewChild( 'answertable' ) tableRef: any;

  constructor(){}

  ngOnInit(){
    if ( !( this.userActivity.answers [this.questionIdx] instanceof Array ) ){
      this.userActivity.answers [this.questionIdx] = this.getTableArray();
    }
  }

  answerChanged( event ): void {
    this.data.emit( event );
  }

  getScrollHeight(): any {
      const tableRef = this.tableRef;
      if( tableRef ){
        return tableRef.nativeElement.scrollHeight + 75 + 'px';
      }
  }

  getResult( rowIndex: number, colIndex: number ): string {
    if ( this.isDisabled( rowIndex, colIndex ) ){ return 'cell-disabled'; }
    if ( !this.question.table.results ){ return ''; }
    if ( !this.question.table.results [rowIndex] ){ return ''; }
    return this.question.table.results [rowIndex] [colIndex];
  }

  getTableArray(): any[][] {
    return this.question.table.rows.map( item => {
      return this.question.table.columns.map( item => {
        return null;
      });
    });
  }

  isDisabled( row: number, col: number ): boolean {
    if (
         !this.question.table
      || !this.question.table.cellValidations
      || !this.question.table.cellValidations [row]
      || !this.question.table.cellValidations [row] [col]
    ){
      return false;
    }
    return this.question.table.cellValidations [row] [col] .validationType == 'disabled';
  }
}
