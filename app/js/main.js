if (window.PointerEvent) {

  var swipeFrontElement=document.getElementById("picture");

  // Add Pointer Event Listener
  swipeFrontElement.addEventListener('pointerdown', this.handleGestureStart, true);
  swipeFrontElement.addEventListener('pointermove', this.handleGestureMove, true);
  swipeFrontElement.addEventListener('pointerup', this.handleGestureEnd, true);
  swipeFrontElement.addEventListener('pointercancel', this.handleGestureEnd, true);
} else {
  // Add Touch Listener
  swipeFrontElement.addEventListener('touchstart', this.handleGestureStart, true);
  swipeFrontElement.addEventListener('touchmove', this.handleGestureMove, true);
  swipeFrontElement.addEventListener('touchend', this.handleGestureEnd, true);
  swipeFrontElement.addEventListener('touchcancel', this.handleGestureEnd, true);

  // Add Mouse Listener
  swipeFrontElement.addEventListener('mousedown', this.handleGestureStart, true);
}

// Handle the start of gestures
this.handleGestureStart = function(evt) {
  evt.preventDefault();

  if(evt.touches && evt.touches.length > 1) {
    return;
  }

  // Add the move and end listeners
  if (window.PointerEvent) {
    evt.target.setPointerCapture(evt.pointerId);
  } else {
    // Add Mouse Listeners
    document.addEventListener('mousemove', this.handleGestureMove, true);
    document.addEventListener('mouseup', this.handleGestureEnd, true);
  }

  initialTouchPos = getGesturePointFromEvent(evt);

  swipeFrontElement.style.transition = 'initial';
}.bind(this);

// Handle end gestures
this.handleGestureEnd = function(evt) {
  evt.preventDefault();

  if(evt.touches && evt.touches.length > 0) {
    return;
  }

  rafPending = false;

  // Remove Event Listeners
  if (window.PointerEvent) {
    evt.target.releasePointerCapture(evt.pointerId);
  } else {
    // Remove Mouse Listeners
    document.removeEventListener('mousemove', this.handleGestureMove, true);
    document.removeEventListener('mouseup', this.handleGestureEnd, true);
  }

  updateSwipeRestPosition();

  initialTouchPos = null;
}.bind(this);