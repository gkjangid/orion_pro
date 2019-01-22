export interface Status {
  isCorrect:  boolean,
  text:       string,
  mediaType:  string,
  mediaUrl:   string,
}

export class AnswerValidationBase {

  constructor(
    protected activity:     any,
    protected question:     any,
    protected userActivity: any,
    protected answer:       any,
  ){ }

  answerCorrect( message?: string, mediaUrl?: string, mediaType?: string ): Status {
    return {
      isCorrect: true,
      text:      message || this.question.feedbackCorrect || 'Correct!',
      mediaUrl:  this.question.feedbackCorrectUrl,
      mediaType: this.question.feedbackCorrectUrlType,
    };
  }

  answerIncorrect( message?: string, mediaUrl?: string, mediaType?: string ): Status {
    return {
      isCorrect: false,
      text:      message || this.question.feedbackIncorrect || 'Wrong answer!',
      mediaUrl:  this.question.feedbackIncorrectUrl,
      mediaType: this.question.feedbackIncorrectUrlType,
    };
  }

  error( message: string ): Status {
    return {
      isCorrect: false,
      text:      message,
      mediaUrl:  null,
      mediaType: null,
    };
  }

}