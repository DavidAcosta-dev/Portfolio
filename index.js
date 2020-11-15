

let emberAnim = $('.testBubble');

function runColorsAnm() {
  //orange to blood orange slowly then to white flash large radius, then back down to 
  $({ 'r': 255, 'g': 165, 'b': 165, opacity: 0.4 })
    .animate(
      { 'r': 255, 'g': 255, 'b': 43, opacity: 0.7 },
      {
        queue: false,
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          emberAnim.css('fill', 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')');
          emberAnim.css({ opacity: this.opacity });
          // emberAnim.css({r:this.r});
        },
        complete: function () {
          $({ 'r': 255, 'g': 161, 'b': 67, opacity: 0.3 })
            .animate(
              { 'r': 255, 'g': 255, 'b': 255, opacity: 1.0, r: 60 },
              {
                queue: false,
                duration: 100,
                easing: 'swing',
                step: function (now) {
                  emberAnim.css('fill', 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')');
                  emberAnim.css({ opacity: this.opacity });
                  // emberAnim.css({r:this.r});
                },
                complete: function () {
                  $({ 'r': 255, 'g': 255, 'b': 43, opacity: 0.3 })
                    .animate(
                      { 'r': 255, 'g': 165, 'b': 165, opacity: 0.2 },
                      {
                        queue: false, duration: 3000, easing: 'swing',
                        step: function (now) {
                          emberAnim.css('fill', 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')');
                          emberAnim.css({ opacity: this.opacity });
                          // emberAnim.css({r:this.r});
                        },
                        complete: function () {
                          //loop here 
                          console.log('restart');
                          runColorsAnm();
                        } //NEXT-SUB-SEQUENCE-.
                      }
                    );
                } //NEXT-SUB-SEQUENCE-.
              }
            );
        } //NEXT-SUB-SEQUENCE-.
      }
    );

};//endloop

runColorsAnm(); //iife immediately invoked function event