import { CONTACT_US_CHANGE_DESC, CONTACT_US_CHANGE_EMAIL, CONTACT_US_CHANGE_NAME } from './actionConstant';
import { IContactUsChangeDescAction, IContactUsChangeEmailAction, IContactUsChangeNameAction } from './actionTypes';

export function ChangeNameAction(surname: string): IContactUsChangeNameAction {
    return {
        name: surname,
        type: CONTACT_US_CHANGE_NAME,
    }
}

export function ChangeDescAction(description: string): IContactUsChangeDescAction {
    return {
        desc: description,
        type: CONTACT_US_CHANGE_DESC,
    }
}

export function ChangeEmailAction(cEmail: string): IContactUsChangeEmailAction {
    return {
        email: cEmail,
        type: CONTACT_US_CHANGE_EMAIL,
    }
}