export default class Candidate {
  constructor(
    readonly candidateId: string,
    readonly name: string,
    readonly email: string, //validate email
  ) {}
}
