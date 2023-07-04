export default class InputHandler {
    constructor(){
        this.lastKey = '';
        
        window.addEventListener('keydown', function(e){
            switch(e.key){
                case 'ArrowDown':
                    this.lastKey = 'Press Arrow down';
            }
        });

        window.addEventListener('keyup', function(e){
            switch(e.key){
                case 'ArrowUp':
                    this.lastKey = 'Press Arrow Up';
            }
        })
    }
}
