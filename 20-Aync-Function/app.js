"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define an async function that performs a simulated asynchronous operation
function performAsyncOperation() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = true; // Simulate a success scenario
                if (isSuccess) {
                    resolve({ success: true, data: 'Operation completed successfully' });
                }
                else {
                    reject(new Error('Operation failed'));
                }
            }, 2000); // Simulate a delay of 2 seconds
        });
    });
}
// Example usage
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield performAsyncOperation(); // Await the asynchronous operation
            console.log(result); // Log the result
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message); // Log the error message if it is an instance of Error
            }
            else {
                console.error('An unknown error occurred'); // Log a generic message for unknown errors
            }
        }
    });
}
main(); // Call the main function
