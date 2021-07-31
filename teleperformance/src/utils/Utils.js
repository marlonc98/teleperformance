import { translate, tDictionary } from "../translate/translate"
export const validatorRequired = {
    required: { value: true, errorMessage: translate(tDictionary.validator_required) }
}
export const validatorOnlyNumbers = {
    pattern: {value: /^[0-9]*$/, errorMessage: translate(tDictionary.validator_only_numbers)}
}

export const validatorMinLength = (minlength) => {
    return {minlength: {value: minlength, errorMessage: translate(tDictionary.validator_min_length, {minlength:minlength})}}
}