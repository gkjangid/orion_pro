import { AnswerValidationBase, Status } from './answer-validation-base';

export class AnswerValidationTable extends AnswerValidationBase {

  countResults( results: string[][] ): any {
    let counts = { correct: 0, wrong: 0 };
    results.map( row => {
      row.map( col => {
        if ( col.startsWith( 'correct' ) ){
          counts.correct += 1;
        } else
        if ( col.startsWith( 'wrong' ) ){
          counts.wrong += 1;
        }
      });
    });
    return counts;
  }

  compare( correctAnswers: any[][], answers: any[][] ): string [][] {
    return answers.map( (rowItem, rowIdx) => {

      return rowItem.map( (answer, colIdx) => {
        if ( !correctAnswers [rowIdx] ){ return ''; }

        let correctAnswer = correctAnswers [rowIdx] [colIdx];
        if ( correctAnswer == null ){ return ''; }

        if ( correctAnswer instanceof Array ){
          const length = correctAnswer.length;
          if ( !length ) { return ''; }

          for ( let i=0; i<length; i++ ){
            if ( !answer ){ return 'wrong-answer'; }
            if ( correctAnswer[ i ].trim().toLowerCase() == answer.trim().toLowerCase() ){
              return 'correct-answer';
            }
          }
          return 'wrong-answer';

        } else {
          if ( this.round( correctAnswer ) == this.round( answer ) ){
            return 'correct-answer';
          } else {
            return 'wrong-answer';
          }
        }
      });
    });
  }

  getRowColIdx( operandNo: number, indexInfo: any, validationInfo: any ): [ number, number ] {
    const operand = validationInfo.cells[ operandNo ];
    if ( !operand ){
      return;
    }
    let [ rowName, colName ] = operand.split( '/' );
    return [ indexInfo.rows[rowName], indexInfo.columns[colName] ];
  }

  getOperand( operandNo: number, indexInfo: any, validationInfo: any, answers: any[][] ): string {
    const indices = this.getRowColIdx( operandNo, indexInfo, validationInfo );
    if ( !indices ){ return null; }
    let [ rowIdx, colIdx ] = indices;
    return answers [rowIdx] [colIdx];
  }

  getAnswer_average( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    const data = validationInfo.cells.map( (item, idx) => {
      return parseFloat( this.getOperand( idx, indexInfo, validationInfo, answers ) );
    });
    const total = data.reduce( (x,y) => x + y );
    return total / data.length;
  }

  getAnswer_divide( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    const operand1 = this.getOperand( 0, indexInfo, validationInfo, answers );
    const operand2 = this.getOperand( 1, indexInfo, validationInfo, answers );
    return parseFloat( operand1 ) / parseFloat( operand2 );
  }

  getAnswer_disabled( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    return null;
  }

  getAnswer_multiply( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    const operand1 = this.getOperand( 0, indexInfo, validationInfo, answers );
    const operand2 = this.getOperand( 1, indexInfo, validationInfo, answers );
    return parseFloat( operand1 ) * parseFloat( operand2 );
  }

  getAnswer_subtract( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    const operand1 = this.getOperand( 0, indexInfo, validationInfo, answers );
    const operand2 = this.getOperand( 1, indexInfo, validationInfo, answers );
    return parseFloat( operand1 ) - parseFloat( operand2 );
  }

  getAnswer_sum( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    const data = validationInfo.cells.map( (item, idx) => {
      return parseFloat( this.getOperand( idx, indexInfo, validationInfo, answers ) );
    });
    return data.reduce( (x,y) => x + y );
  }

  getAnswer_text( indexInfo: any, validationInfo: any, answers: any[][] ): any {
    return validationInfo.textAnswers.map( item => item.answer );
  }

  getIndexInfo(): any {
    let indexInfo = { rows: {}, columns: {} };
    this.question.table.rows.map( ( item, idx ) => {
      indexInfo.rows[ item.name ] = idx;
    });
    this.question.table.columns.map( ( item, idx ) => {
      indexInfo.columns[ item.name ] = idx;
    });
    return indexInfo;
  }

  getCorrectAnswers(): any {
    let answers = [];
    const indexInfo = this.getIndexInfo();

    this.question.table.rows.map( ( rowItem, rowIdx ) => {
      if ( !answers[rowIdx] ){
        answers[rowIdx] = [];
      }

      this.question.table.columns.map( ( colItem, colIdx ) => {
        if( !this.question.table.cellValidations ){
          answers [rowIdx] [colIdx] = null;
          return;
        }
        if( !this.question.table.cellValidations [rowIdx] ){
          answers [rowIdx] [colIdx] = null;
          return;
        }
        const validation = this.question.table.cellValidations [rowIdx] [colIdx];
        if ( !validation || !validation.validationType ){
          answers [rowIdx] [colIdx] = null;
          return;
        };
        answers [rowIdx] [colIdx] = this[ 'getAnswer_' + validation.validationType ](
          indexInfo,
          validation,
          this.answer,
        )
      });
    })
    return answers;
  }

  round( value: number, precision: number = 2 ): number {
    const factor = Math.pow( 10, precision );
    let tmp      = Math.round( value * factor );
    return tmp / factor;
  }

  validate(): Status {
    const correctAnswers = this.getCorrectAnswers();
    this.question.table.results = this.compare( correctAnswers, this.answer )
    const counts = this.countResults( this.question.table.results );
    if ( counts.wrong > 0 ){
      return this.answerIncorrect();
    } else {
      return this.answerCorrect();
    }
  }

}