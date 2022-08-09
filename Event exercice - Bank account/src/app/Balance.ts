export class Balance{
  private _original_balance:number;
  private _overdrafted_balance:number;

  get original_balance() : number{
    return this._original_balance;
  }
  set original_balance(num:number) {
    this._original_balance = num;
  }

  get overdrafted_balance() : number{
    return this._overdrafted_balance;
  }
  set overdrafted_balance(num:number) {
    this._overdrafted_balance = num;
  }

  constructor(original_balance:number, overdrafted_balance:number){
    this.original_balance = original_balance;
    this.overdrafted_balance = overdrafted_balance;
  }
}
