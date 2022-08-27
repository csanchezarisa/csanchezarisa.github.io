import React, { useRef, MutableRefObject } from 'react';

import './CustomCursor.css';


/**
 * DOM elements that change cursor to pointer type
 */
const pointerCursorElements = ['BUTTON', 'A'];
/**
 * DOM elements that change cursor to text type
 */
const textCursorElements = ['INPUT', 'TEXTAREA']

/**
 * Moves the custom cursor to the mouse position
 * @param {Event} e Event of the listener
 * @param {MutableRefObject} cursor Div that contains the custom cursor
 */
const moveCursor = (e, cursor) => {
  const mouseY = e.clientY - 5;
  const mouseX = e.clientX - 24;
   
  if(!cursor.current) {
    return;
  }
  
  cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};


/**
 * Changes the cursor display state
 * @param {Event} e Event of the listener
 * @param {boolean} isHidden Whether the custom cursor should be hidden or not 
 * @param {MutableRefObject} cursor Div that contains the custom cursor
 * @param {{ default: string, pointer: string, text: string }} images JSON with the cursor images references
 */
const changeCursorHidden = (e, isHidden, cursor, images) => {

  // There are no div element selected
  if(!cursor.current) {
    return;
  }

  // The custom cursor should be hidden and it's not hidden already
  if(isHidden && !cursor.current.classList.contains('hidden')) {
    cursor.current.classList.add('hidden');
  }

  // The custom cursor should be displayed and it's hidden
  else if(!isHidden && cursor.current.classList.contains('hidden')) {
    cursor.current.classList.remove('hidden');
  }

  changeCursorStyle(e, cursor, images);
};

/**
 * Checks if the element or its parent elements nodeNames are contained
 * in the given elements array recursively 
 * @param {EventTarget} targetElement Target element to do the checks
 * @param {string[]} elementsArray Elemenents list
 * @returns Whether the targetElement or its parent elements are included in the elementsArray
 */
const isCursorElement = (targetElement, elementsArray) => {
  if(!targetElement) {
    return false;
  }

  if(elementsArray.includes(targetElement.nodeName)) {
    return true;
  }

  return isCursorElement(targetElement.parentElement, elementsArray);
};


/**
 * Changes the custom cursor style
 * @param {Event} e Event of the listener
 * @param {MutableRefObject} cursor Div that contains the custom cursor
 * @param {{ default: string, pointer: string, text: string }} images JSON with the cursor images references
 */
const changeCursorStyle = (e, cursor, images) => {
  const targetElement = e.target;
  const img = cursor.current.children[0];
  
  if(isCursorElement(targetElement, pointerCursorElements)) {
    img.src = images.pointer;
  }
  else if(isCursorElement(targetElement, textCursorElements)) {
    img.src = images.text;
  }
  else if(img.src !== images.default) {
    img.src = images.default;
  }
};


/**
 * Adds event listeners to move and style the custom cursor
 * @param {MutableRefObject} cursor Div that contains the custom cursor
 * @param {{ default: string, pointer: string, text: string }} images JSON with the cursor images references
 */
const AddEventListeners = (cursor, images) => {
  window.addEventListener('mousemove', (e) => moveCursor(e, cursor));
  window.addEventListener('mouseover', (e) => changeCursorHidden(e, false, cursor, images));
  window.addEventListener('mouseout', (e) => changeCursorHidden(e, true, cursor, images));
};


function CustomCursor({ 
  defaultImg, 
  pointerImg,
  textImg
}) {
  const cursor = useRef();

  AddEventListeners(cursor, { default: defaultImg, pointer: pointerImg, text: textImg });

  return (
    <>
      <div 
        ref={cursor}
        className="cursor hidden"
      >
        <img src={defaultImg} className='cursor' alt='cursor' />
      </div>
    </>
  )
}

export default CustomCursor;