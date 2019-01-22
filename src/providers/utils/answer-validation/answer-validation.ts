import { AnswerValidationLogical }      from './answer-validation-logical';
import { AnswerValidationMath }         from './answer-validation-math';
import { AnswerValidationTable }        from './answer-validation-table';
import { Status }                       from './answer-validation-base';


export class ValidateAnswer {

  status: Status = null;

  constructor( activity: any, question: any, userActivity: any, answer: any ){
    const checker = this[ 'type_' + question.questionType ];
    if ( !checker ){
      let msg = `Invalid question type: ${question.questionType}`;
      alert( msg );
      throw( msg );
    }
    this.status = checker( activity, question, userActivity, answer );
  }

  type_action( activity: any, question: any, userActivity: any, answer: any ): Status {
    return null;
  }

  type_fillInBlanks( activity: any, question: any, userActivity: any, answer: any ): Status {
    for ( let choice of question.choices ){
      if ( choice.choice.trim() == answer.trim() ){
        return {
          isCorrect: true,
          text:      choice.feedback || 'Correct!',
          mediaUrl:  choice.feedbackUrl,
          mediaType: choice.feedbackUrlType,
        };
      }
    }
    return {
      isCorrect: false,
      text:      question.feedbackIncorrect || 'Wrong answer!',
      mediaUrl:  question.feedbackIncorrectUrl,
      mediaType: question.feedbackIncorrectUrlType,
};
  }

  type_logic( activity: any, question: any, userActivity: any, answer: any ): Status {
    const validator = new AnswerValidationLogical( activity, question, userActivity, answer );
    return validator.validate();
  }

  type_math( activity: any, question: any, userActivity: any, answer: any ): Status {
    const validator = new AnswerValidationMath( activity, question, userActivity, answer );
    return validator.validate();
  }

  type_multipleChoice( activity: any, question: any, userActivity: any, answer: any ): Status {
    const choice = question.choices[ answer ];
    return {
      isCorrect: choice.isCorrect || false,
      text:      choice.feedback  || ( choice.isCorrect? 'Correct!': 'Wrong answer!' ),
      mediaUrl:  choice.feedbackUrl,
      mediaType: choice.feedbackUrlType,
    };
  }

  type_noAutoCorrection( activity: any, question: any, userActivity: any, answer: any ): Status {
    return null;
  }

  type_table( activity: any, question: any, userActivity: any, answer: any ): Status {
    const validator = new AnswerValidationTable( activity, question, userActivity, answer );
    return validator.validate();
  }

  type_upload( activity: any, question: any, userActivity: any, answer: any ): Status {
    return null;
  }

}
