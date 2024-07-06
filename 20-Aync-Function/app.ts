interface Result {
    success: boolean;
    data: string;
}

async function performAsyncOperation(): Promise<Result> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true; 
            if (isSuccess) {
                resolve({ success: true, data: 'Operation completed successfully' });
            } else {
                reject(new Error('Operation failed'));
            }
        }, 2000); 
    });
}

// Example usage
async function main() {
    try {
        const result = await performAsyncOperation(); 
        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message); 
        } else {
            console.error('An unknown error occurred');
        }
    }
}

main(); 
