import { AnswerValidationBase, Status } from './answer-validation-base';

export class AnswerValidationMath extends AnswerValidationBase {

  compareAnswer( answer: any, correctAnswer: number, round: number = null ): Status {
    answer = parseFloat( answer );
    if ( isNaN( answer ) )        { return this.error( 'System Error 1: Invalid value' ); }
    if ( isNaN( correctAnswer ) ) { return this.error( 'System Error 2: Invalid value' ); }

    if ( round !== null ){
      answer        = this.round( answer );
      correctAnswer = this.round( correctAnswer );
    }

    if ( answer == correctAnswer ){
      return this.answerCorrect();
    } else {
      return this.answerIncorrect();
    }
  }

  getOperand( operandNo: number, qIndices: object ): number {
    let operand = this.question[ `mathTypeOperand${operandNo}` ]
    if ( operand == -1 ){
      operand = parseFloat( this.question[ `mathTypeOperand${operandNo}Value` ] );
    } else {
      const qIdx = qIndices[ operand ];
      operand = parseFloat( this.userActivity.answers[ qIdx ] )
    }
    return operand;
  }

  getOperandList( qIndices: object ): number[] {
    return this.question.mathTypeOperand1.map( qId => {
      let qIdx = qIndices[ qId ];
      return parseFloat( this.userActivity.answers[ qIdx ] );
    });
  }

  getOperands(): number[] {
    let qIndices    = this.getQIndices();
    let operands    = [];
    const listTypes = [ 'sum', 'average' ];
    if ( listTypes.indexOf( this.question.mathType ) != -1 ){
      operands = this.getOperandList( qIndices );
    } else {
      operands.push( this.getOperand( 1, qIndices ) );
      operands.push( this.getOperand( 2, qIndices ) );
    }
    return operands;
  }

  getQIndices(): object {
    let qIndices = {};
    this.activity.questions.map( (question, index) => {
      qIndices[ question.id ] = index;
    });
    return qIndices;
}

  mathAverage( operands: number[] ): number {
    const total = operands.reduce( (x,y) => x+y );
    return total / operands.length;
  }

  mathDivide( operands: number[] ): number {
    return operands[0] / operands[1];
  }

  mathMultiply( operands: number[] ): number {
    return operands[0] * operands[1];
  }

  mathSubtract( operands: number[] ): number {
    return operands[0] - operands[1];
  }

  mathSum( operands: number[] ): number {
    return operands.reduce( (x,y) => x+y );
  }

  round( value: number, precision: number = 2 ): number {
    const factor = Math.pow( 10, precision );
    let tmp      = Math.round( value * factor );
    return tmp / factor;
  }

  validate(): Status {
    const operands:       number[] = this.getOperands();
    let   correctAnswer:  number   = null;

    switch ( this.question.mathType ){
      case 'sum':
        correctAnswer = this.mathSum( operands );
        return this.compareAnswer( this.answer, correctAnswer );
      case 'average':
        correctAnswer =  this.mathAverage( operands );
        return this.compareAnswer( this.answer, correctAnswer, this.question.precision || 0 );
      case '-':
        correctAnswer =  this.mathSubtract( operands );
        return this.compareAnswer( this.answer, correctAnswer );
      case '/':
        correctAnswer =  this.mathDivide( operands );
        return this.compareAnswer( this.answer, correctAnswer, this.question.precision || 0 );
      case '*':
        correctAnswer =  this.mathMultiply( operands );
        return this.compareAnswer( this.answer, correctAnswer );
      }
  }

}
