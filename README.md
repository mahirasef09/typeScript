# **Q3:the difference between any, unknown, and never types in TypeScript.**
## **any Type:**
You can assign anything to a variable of any type. It disables type checking that's why it is unsafe to use. It is only used when migration from javascript
### <ins>Example:</ins>
<pre>let value: any = "hello";
value.toUpperCase();
value = 42;           
value.toFixed(2);</pre> 

## **unknown Type:**
In unknown type you can assign anything to it, but you must narrow its type before using it. So we can say The unknown type is like any, but type-safe.
### <ins>Example:</ins>
<pre>let value: unknown = "hello";
value = 42; // OK

// value.toUpperCase();

if (typeof value === "string") {
  console.log(value.toUpperCase());
}</pre>
## **never Type:**
The never type represents a value that never occurs. It's used for functions that never return, throw errors or infinite loops or impossible types.
### <ins>Example:</ins>
<pre>type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  if (shape === "circle") {
    return 3.14;
  } else if (shape === "square") {
    return 1;
  } else {
    const _exhaustive: never = shape; // Ensures all cases are handled
    return _exhaustive;
  }
}</pre>

# **Q7:Using union and intersection types in TypeScript with examples.**
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




