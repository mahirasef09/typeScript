# **Q3: The difference between any, unknown, and never types in TypeScript.**
## **any Type:**
You can assign anything to a variable of any type. It disables type checking that's why it is unsafe to use. It is only used when migration from javascript required.
### <ins>Example:</ins>
<pre>let data: any = "TypeScript";
console.log(data.toUpperCase()); // OK
console.log(data.push("!"));     // String does not support push but it will show No error</pre> 

## **unknown Type:**
In unknown type you can assign anything to it, but you must narrow its type before using it. So you can say that the unknown type is like any, but type-safe.
### <ins>Example:</ins>
<pre>let value: unknown = "hello";
value = 42;

console.log(value.toUpperCase()); // Error because you have not checked the type first

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe because you have checked the type first
}</pre>

## **never Type:**
Unlike any or unknown type, nothing can be assigned to never type. The never type represents a value that never occurs.When a function never return or throw errors or infinite loops or impossible types it's used. Main purpose of using never type is ensuring code correctness and exhaustiveness.

### <ins>Example:</ins>
<pre>function throwError(message: string): never {
  throw new Error(message);
}</pre>

*This function never returns because it throws an error.*

### <ins>Example:</ins>
<pre>function infiniteLoop(): never {
  while (true) {
    // Doing something endlessly
  }
}</pre>

*The function will never exit, so its return type is never*

# **Q7: Using union and intersection types in TypeScript with examples.**
## **Union Types:**
A variable can hold one of several types by using union type. The symbol of union type is “|”.
### <ins>Example:</ins>
<pre>function user(id: string | number) {
  console.log(`Your id is: ${id}`);
}
user(123);
user("abc123");</pre>

*Here, id can be either a string or a number.*

*By using type guards, you can also narrow the type.*
### <ins>Example:</ins>
<pre>function upperCaseOrTenTimes(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase(); 
  }
  return id*10;     
}</pre>

*Here, if id is string then it will be uppercase but if id is number it will be 10 times bigger.*


## **Intersection Types:**
An intersection type combines multiple types into one. The symbol of union type is “&”.
#### <ins>Example:</ins>
<pre>type FrontendDeveloper = {
    name: string;
    skills: string[];
    designation1: "Frontend Developer";
  };

type BackendDeveloper = {
    name: string;
    skills: string[];
    designation2: "Backend Developer";
  };

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
    name: Mahir,
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };</pre>
*Here, FullstackDeveloper must have name, skills, designation1 and designation2 property.*

*You can use this in functions too.*
### <ins>Example:</ins>
<pre>function welcome(developer: FrontendDeveloper & BackendDeveloper) {
  console.log(`Welcome, ${developer.name} in our company`);
}</pre>




