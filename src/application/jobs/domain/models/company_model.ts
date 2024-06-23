export default class Company {
  constructor(
    readonly companyId: string,
    readonly name: string,
    readonly email: string, //validate email?
  ) {}
}
