import { Directive, HostListener } from '@angular/core';

@Directive( {
  selector: '[appOnlyNumber]'
} )
export class OnlyNumberDirective {
  private values;
  private valuesLength;

  @HostListener( 'keyup', [ '$event' ] ) numberPositive( ev ) {
    this.valuesLength = ev.path[ 0 ].value.length;

    if ( !isNaN( ev.path[ 0 ].valueAsNumber ) ) {
      // If the value is a number values = input.value without digits like: ()/-+
      this.values = ev.path[ 0 ].value.replace( /\D/, '' );
      ev.path[ 0 ].value = this.values;
    } else {
      // if the value is '' because the input value is invalid then input.value = values
      ev.path[ 0 ].value = this.values;
    }
    if ( ev.which === 8 && this.valuesLength === 0 ) {
      // if press backspace until the input.value.length is 0 the input value is ''
      // for prevent the input.value = values
      ev.path[ 0 ].value = '';
    }
  }














  //   if ( isNaN( ev.path[ 0 ].valueAsNumber ) ) {
  //     // escribes          valueAsNumber        value
  //     //    9-                  NaN              ''
  //     ev.path[ 0 ].value = this.values;

  //     // console.log( Color( 'bgcyan', isNaN( ev.path[ 0 ].valueAsNumber ) ) )
  //     // console.log( Color( 'bgcyan', ev.path[ 0 ].valueAsNumber ) )
  //     // console.log( Color( 'cyan', ev.path[ 0 ].value ) )
  //   }
  //   if ( =isNaN( ev.path[ 0 ].valueAsNumber ) ) {
  //     // escribes          valueAsNumber        value
  //     //    9                   9                '9'
  //     //   -9                  -9                '9'
  //     this.values = ev.path[ 0 ].value.replace( /\D/, '' );
  //     ev.path[ 0 ].value = this.values;

  //   //   console.log( Color( 'bgyellow', isNaN( ev.path[ 0 ].valueAsNumber ) ) );
  //   //   console.log( Color( 'bgyellow', ev.path[ 0 ].valueAsNumber ) );
  //   //   console.log( Color( 'yellow', ev.path[ 0 ].value ) );
  //   // }
  // }

}

