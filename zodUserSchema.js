import { z } from "zod/v4";
/**
 * This function takes in a string and if the string contains any of these characters (<>&'"/),
 * it replaces them with html entities.
 * @param {string} text
 * @returns a string that has (<>%'"/) replaced with html entities
 */

function escapeHtml(text) {
    const map = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&#39;",
        '"': "&quot;",
        "/": "&#47;",
    };
    return text.replace(/[<>&'"/]/g, (char) => map[char]);
}

const errorMessages = {
    nameEmpty: "name cannot be empty",
    nameTooShort: "name must be at least 4 characters long",
    passwordEmpty: "password can't be empty",
    passwordTooShort: "password must be at least 8 characters long",
};

const UserSignupSchema = z
    .object({
        name: z
            .string()
            .nonempty(errorMessages.nameEmpty)
            .trim()
            .min(4, errorMessages.nameTooShort),
        password: z
            .string()
            .nonempty(errorMessages.passwordEmpty)
            .min(8, errorMessages.passwordTooShort),
    })
    .transform((data) => {
        return {
            name: escapeHtml(data.name),
            password: data.password,
        };
    });


    export default UserSignupSchema;