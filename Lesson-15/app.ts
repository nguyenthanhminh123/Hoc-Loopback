function property(target: any, key: string) {
    let value = target[key];
    // Replacement getter
    const getter = function() {
        console.log(`Getter for ${key} returned ${value}`);
        return value;
    };
    // Replacement setter
    const setter = function(newVal) {
        console.log(`Set ${key} to ${newVal}`);
        value = newVal;
    };
    // Replace the property
    const isDeleted = delete this [key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
class Person {
    @property
    public firstName: string;a
}
const person = new Person();
// set the firstName
person.firstName = 'Minhquan';
// call the getter
console.log(person.firstName);
