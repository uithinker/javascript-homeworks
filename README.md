# JavaScript Homework

## 📁 Repository structure

- `start/` — introductory JavaScript tasks
- `4-navigator/` — homework on working with the browser Navigator API
- `5-languages/` — conditional logic based on user input
- `6-driver/` — driving permission check using boolean logic
- `7-converter/` — currency conversion function
- `8-crypto/` — password encryption and validation logic
- `9-sort-loops/` — array sorting using nested loops
- `10-array-clean/` — filter an array of numbers using a callback condition function
- `11-date-array/` — removing values that cannot be converted into valid dates

---

## 🚀 4-navigator

The project demonstrates working with the browser `navigator` API:

- detecting browser information
- working with user environment data

---

## 🌍 5-languages

A simple JavaScript program that displays a greeting based on the language selected by the user.

- the user inputs a language code (`en`, `ru`, `de`)
- the program outputs a greeting in the selected language

**Concepts used:**
- `prompt`
- `switch / case`
- conditional logic

---

## 🚗 6-driver

A concise JavaScript condition written in a single line that checks whether a person is allowed to drive.

The decision is based on the following parameters:
- `hasLicence` — whether the person has a driving license
- `age` — the person’s age
- `isDrunk` — whether the person is drunk

**Concepts used:**
- boolean logic
- logical operators

---

## 💱 7-converter

A currency conversion function that converts a given amount from one currency to another.

The function accepts:
- amount (e.g. `1000`)
- source currency (e.g. `RUB`)
- target currency (e.g. `USD`)

The function returns:
- the converted amount if the conversion is supported
- `null` if the conversion is not supported

**Concepts used:**
- functions
- objects for storing exchange rates
- conditional checks
- return values

---

## 🔐 8-crypto

A simple password encryption and validation task.

The task consists of implementing two functions:

### 🔹 Password encryption
- The function accepts a plain password
- Splits the password into characters
- Rearranges characters according to a custom algorithm
- Returns an encrypted string

**Concepts used:**
- strings and arrays
- custom algorithms
- functions
- comparison logic

---

## 🔢 9-sort-loops

A function that sorts an array of numbers using loops only.

**Use:**
- two nested loops
- element comparison
- manual swapping of values

The function demonstrates how basic sorting algorithms work internally.

**Concepts used:**
- arrays
- nested loops
- comparison logic
- swapping elements

---

## 📙 10-array-clean

A function that filters an array of numbers using a **callback condition function**.

The function:
- accepts an array of numbers
- accepts a callback that decides whether an element should be removed
- returns a new filtered array

This task focuses on understanding **functions as arguments** and  
how higher-order functions work internally (without using `filter`).

### Concepts used:
- higher-order functions
- callbacks
- loops
- array mutation vs immutability
- validation of input data

---

## 📘 11-date-array

A function that cleans an array of strings by removing values  
that **cannot be converted into valid dates**.

### Supported formats:
- `DD-MM-YYYY`
- `DD/MM/YYYY`

### Concepts used:
- string manipulation
- `split, replace, map`
- array iteration `forEach`
- conditional logic
- defensive programming

---

## 🛠 Technologies

- HTML
- JavaScript (Vanilla)

---

## 👤 Author

adam (uithinker)