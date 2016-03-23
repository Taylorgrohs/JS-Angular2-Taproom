import { Pipe, PipeTransform } from 'angular2/core';
import { Tap } from './tap.model';

@Pipe({
  name: "low",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Tap[], args) {
    console.log('selected tap: ', args[0]);
    var desiredPintState = args[0];
    if(desiredPintState === "low") {
      return input.filter((tap) => {
        if(tap.pints < 10) {
          return !tap.low;
        }
      });
    } else if (desiredPintState === "notLow") {
      return input.filter((tap) => {
        if(tap.pints > 9) {
        return !tap.low;
        }
      });
    } else {
      return input;
    }
  }
}
