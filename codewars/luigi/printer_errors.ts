export class G964 {
  public static printerError(s: string): string {
    console.log(s);
    let result:string = '';
    const letters:Array<string> = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
    const numOfErrors:number = s.split('').filter(l => letters.indexOf(l) === -1).length;
    result = `${numOfErrors}/${s.length}`
    return result;
  }
}
