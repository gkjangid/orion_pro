declare interface ILearningJournal {
    id:             number,
    user:           any,
    title:          string,
    text:           string,
    questions:      ILearningJournalQuestion[],
}

declare interface ILearningJournalQuestion {
    text: string,
}
