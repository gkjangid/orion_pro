import { AnswerValidationBase, Status } from './answer-validation-base';


export class AnswerValidationLogical extends AnswerValidationBase {

  getOperand( operandNo: number ): number {
    let operand = this.question[ `logicalTypeOperand${operandNo}` ]

    if ( operand == -1 ){
      operand = parseFloat( this.question[ `logicalTypeOperand${operandNo}Value` ] );
    } else {
      let qIndices = {};
      this.activity.questions.map( (question, index) => {
        qIndices[ question.id ] = index;
      });
      const qIdx = qIndices[ operand ];
      operand = parseFloat( this.userActivity.answers[ qIdx ] )
    }

    if ( isNaN( operand ) ){
      return null;
    }
    return operand;
  }

  validate(): Status {
    let operand1, operand2;
    operand1 = this.getOperand( 1 );
    if ( operand1 === null ){ return this.error( 'System Error 1: Invalid value' ); }

    if ( this.question.logicalType.startsWith( 'between' ) ){
      operand2 = this.getOperand( 2 );
      if ( operand2 === null ){ return this.error( 'System Error 2: Invalid value' ); }
    }

    const answer = parseFloat( this.answer );
    if ( isNaN( answer ) ){ return this.error( 'System Error 3: Invalid value' ); }

    switch ( this.question.logicalType ){
      case '>':
        if ( answer > operand1 ){
          return this.answerCorrect();
        }
        break;

      case '>=':
        if ( answer >= operand1 ){
          return this.answerCorrect();
        }
        break;

      case '=':
        if ( answer == operand1 ){
          return this.answerCorrect();
        }
        break;

      case '<=':
        if ( answer <= operand1 ){
          return this.answerCorrect();
        }
        break;

      case '<':
        if ( answer < operand1 ){
          return this.answerCorrect();
        }
        break;

      case 'betweenInc':
        if ( answer >= operand1 && answer <= operand2 ){
          return this.answerCorrect();
        }
        break;

      case 'betweenExc':
        if ( answer > operand1 && answer < operand2 ){
          return this.answerCorrect();
        }
        break;
    } // switch

    return this.answerIncorrect();
  }

}
