import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

    constructor(){}

  /**
   * This function checks if a given form field is invalid based on its validation rule and its current
   * state.
   * @param {AbstractControl} field - AbstractControl is a class in Angular that represents a form
   * control, such as an input field or a select dropdown. It contains properties and methods for
   * managing the state and validation of the control.
   * @param {string | null} [validationRule=null] - The `validationRule` parameter is an optional
   * string parameter that specifies the specific validation rule to check for. If it is provided, the
   * function will check if the field has an error for that specific validation rule. If it is not
   * provided, the function will check if the field is invalid in general (
   * @returns The function `isFieldInvalid` returns a boolean value indicating whether a given form
   * field is invalid based on its validation status and whether it has been touched or modified by the
   * user. If a validation rule is provided, it checks if the field has an error for that specific
   * rule.
   */
  isFieldInvalid(field: AbstractControl | null, validationRule: string | null = null): boolean  {
    if(field){
      if(validationRule){
        return field.errors?.[validationRule] && !field?.valid && (field?.dirty || field?.touched);
      }
      return !field?.valid && (field?.dirty || field?.touched);
    }
    return false;
  }

    /**
   * Retrieves data from the Local Storage using the specified key.
   *
   * @param {string} localStorageKey - The key used to store the data in Local Storage.
   * @returns {any} The data stored in Local Storage corresponding to the provided key.
   */
   getDataLocalStorage(localStorageKey) {
    return localStorage.getItem(localStorageKey);
  }

  /**
   * Refreshes the data stored in Local Storage with the provided data array.
   *
   * @param {string} localStorageKey - The key used to store the data in Local Storage.
   * @param {any[]} data - The data array to be stored in Local Storage.
   */
   refreshLocalStorage(localStorageKey, data) {
    localStorage.setItem(localStorageKey, JSON.stringify([...data]));
  }

  /**
   * Retrieves data from Local Storage based on the provided key. If no data is found,
   * it stores the provided data array in Local Storage and returns it.
   *
   * @param {string} localStorageKey - The key used to store and retrieve the data in Local Storage.
   * @param {any[]} data - The data array to be stored in Local Storage if no data is found.
   * @returns {any[]} The data stored in Local Storage corresponding to the provided key,
   * or the provided data array if no data is found in Local Storage.
   */
   getData(localStorageKey, data) {
    const savedData = this.getDataLocalStorage(localStorageKey);

    if (!savedData) {
      this.refreshLocalStorage(localStorageKey, data);
      const savedData = this.getDataLocalStorage(localStorageKey);
      return JSON.parse(savedData);
    }

    return JSON.parse(savedData);
  }


}