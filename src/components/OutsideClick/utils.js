export const isElementInteractive = (el) => 
  el.tagName === 'A' 
  || el.tagName === 'BUTTON' 
  || el.tagName === "INPUT" 
  || el.tagName === "LABEL"
