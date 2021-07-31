/*
  File translate.js
  This file is the property of Marlon Alejandro Méndez Castañeda,
    this code has free use, but you must to keep the accreditation, the accreditation must be on the top of code
    for more files you can contact to marlonmz1998@gmail.com or +57 3234686680


  Archivo translate.js
  Este archivo pertence a Marlon Alejandro Méndez Castañeda,
   se autoriza su libre uso conservando esta acreditación, la acreditación debe conservarse en la cabezera del archivo, 
   para más archivos puede escribir a marlonmz1998@gmail.com o al número +57 3234686680
*/

import es from './es';
import dictionary from './tDictionary';

var lang = window.localStorage.getItem("lang");
if (!lang) {
    lang = document.documentElement.lang = 'es';
}
export const myLang = lang;
const resources = {
    es: es,
}

export const translate = function translate(resourceName, values) {
    let string = resources[myLang][resourceName];
    if (values == null || Object.entries(values).length <= 0) {
        return string;
    }
    let keys = Object.entries(values);
    keys.forEach(([key, value]) => {
        string = string.replace('${' + key + '}', value);
    });
    return string;
}
export const setLanguage = function setLanguage(lang) {
    window.localStorage.setItem("lang", lang);
    window.location.reload();
}
export const tDictionary = dictionary;

export default { translate, tDictionary, setLanguage, myLang };