# **Using union and intersection types in TypeScript with example.**
## **Union Types:**
A variable can hold one of several types by using union type. The symbol of union type is “|”.
### <ins>Example:</ins>
<pre>function user(id: string | number) {
  console.log(`Your id is: ${id}`);
}
user(123);
user("abc123");</pre>

*Here, id can be either a string or a number.*

**By using type guards, you can also narrow the type.**
### <ins>Example:</ins>
function upperCaseOrTenTimes(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase(); 
  }
  return id*10;     
}

*Here, if id is string then it will be uppercase but if id is number it will be 10 times bigger.*


## **Intersection Types:**
An intersection type combines multiple types into one. The symbol of union type is “&”.
#### <ins>Example:</ins>
type FrontendDeveloper = {
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
  };
*Here, FullstackDeveloper must have name, skills, designation1 and designation2 property.*

**You can use this in functions too.**
### <ins>Example:</ins>
function welcome(developer: FrontendDeveloper & BackendDeveloper) {
  console.log(`Welcome, ${developer.name} in our company`);
}




