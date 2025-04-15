export const validateEmail = {
    required: 'This field is required',
    pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Incorrect email address",
    },

}