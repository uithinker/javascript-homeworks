/*
Task:
Check if a string is a valid phone number in the format of one of the countries (for example, Russia).

Options for writing the number:
Correct: taking into account the possible use of brackets, spaces, hyphens, and replacing "+7" with "8".
Incorrect: with errors in the number of digits, the presence of letters, or an incorrect format.

Basic methods and concepts for completing the task:
String methods: trim(), replace().
Number validation: use the isNaN() function after attempting to convert a string to a number.
String iteration: strings can be processed as arrays using loops.
*/

// [=== TEST CASES ===]

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56';

const num1Error = '89103235';
const num2Error = '+79d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

// [=== PROBLEM SOLVING ===]

function normalizePhone(phone) {
    phone = phone
        .trim()
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll('-', '')
        .replaceAll(' ', '');

    if (phone.startsWith('+7') || phone.startsWith('8')) {
        phone = phone.replace('+7', '8');
    }
    
    return phone;
}

function isValidPhone(phone) {
    if (phone.length !== 11) return false;

    for (const char of phone) {
        if(isNaN(Number(char))) {
            return false;
        };
    }

    return true;
}

function validatePhone(phone) {
    if (typeof phone !== 'string') {
        throw new Error("Mobile phone must be a string!");
    };

    let normalizedPhone = normalizePhone(phone);

    if (!isValidPhone(normalizedPhone)) {
        throw new Error("Incorrect format of number phone");
    }

    return normalizedPhone;
}