export function drawStatusText(context, input){
  context.font = '40px Helvetica';
  context.fillText('Last input: ' + input.lastKey, 20, 50);
}
