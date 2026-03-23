class OwnPromise {
    constructor() {
        this.state = 'pending';
        this.result = undefined;
        this.callbacks = [];
    }

    resolve(value) {
        if (this.state !== 'pending') return;

        this.state = 'fulfilled';
        this.result = value;

        this.callbacks.forEach(cb => cb.onFulfilled(value));
    }

    reject(reason) {
        if (this.state !== 'pending') return;

        this.state = 'rejected';
        this.result = reason;

        this.callbacks.forEach(cb => cb.onRejected(reason));
    }

    then(onFulfilled, onRejected) {
        return new OwnPromise((resolve, reject) => {
            const handle = () => {
                try {
                    if (this.state === 'fulfilled') {
                        const value = onFulfilled ? onFulfilled(this.result) : this.result;
                        resolve(value);
                    }
                    else if (this.state === 'rejected') {
                        if (onRejected) {
                            const value = onRejected(this.result);
                            resolve(value);
                        } else {
                            reject(this.result);
                        }
                    }
                    else {
                        this.callbacks.push({
                            onFulfilled: (value) => {
                                try {
                                    const res = onFulfilled ? onFulfilled(value) : value;
                                    resolve(res);
                                } catch (err) {
                                    reject(err);
                                }
                            },
                            onRejected: (reason) => {
                                try {
                                    if (onRejected) {
                                        const res = onRejected(reason);
                                        resolve(res);
                                    } else {
                                        reject(reason);
                                    }
                                } catch (err) {
                                    reject(err);
                                }
                            }
                        });
                    }
                } catch (err) {
                    reject(err);
                }
            };

            handle();
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
};

const myp = new OwnPromise((resolve, reject)=>{
        resolve("Data");
        reject("Hello World")
});

const handleFun = function(){
    console.log("OK")
}

myp.then(handleFun);
