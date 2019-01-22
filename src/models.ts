
interface QuestionTableValidation {
  validationType: string,
  cells:          string[];
  priority?:      string;
}

export const BackboneTypes: string[] = [
  'activity',
  'job',
  'intelligence',
  ];

export class Activity {
  ageGroups:          string[]    = [];
  backboneType:       string      = BackboneTypes[0];
  cities:             string[]    = [ 'Singapore' ];
  contexts:           string[]    = [];
  coach:              string      = '';
  id:                 number      = null;
  jobs:               string[]    = [];
  locations:          string[]    = [];
  outcomes:           Outcome[]   = [];
  private:            boolean     = true;
  questions:          Question[]  = [];
  status:             string      = 'Draft';
  title:              string      = '';
  username:           string      = '';
  briefDescription:   string      = '';
  description:        string      = '';

  constructor(){
    this.outcomes = [
      new Outcome(),
      new Outcome(),
      new Outcome(),
    ];
  }
}

export class Choice {
  choice:     string;
  isCorrect:  boolean;
  feedback:   string;
  order:      number = 999;
}

export class Outcome {
  category: string;
  verb:     string;
  text:     string;
}

export class Question {
  id:             number;
  ageGroups:      string[] = [];
  checker:        string   = '';
  choices:        Choice[] = [];
  question:       string   = '';
  questionOrder:  number   = 999;
  subjects:       string[] = [];
  table:          QuestionTable;
  questionType:   string   = '';

  constructor(){
    this.id     = new Date().valueOf();
    this.table  = new QuestionTable();
  }
}

export class QuestionTable {
  rows:             QuestionTableRowColumn[]    = [];
  columns:          QuestionTableRowColumn[]    = [];
  cellValidations:  QuestionTableValidation[][] = [];
}

export class QuestionTableRowColumn {
  name:           number;
  label:          string = '';
  dataType:       string = '';
  validation:     QuestionTableValidation = null;

  constructor(){
    this.name = new Date().valueOf();
  }
}
