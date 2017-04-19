
# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Syntax :: with an open mind
**simple & efficient** - _a little goes a long way_
<br><br>


### Orientation
The IMP language syntax is designed to be short & elegant. It is ever driven towards structure, speed of coding, & less duplication. It is important that you have a basic understanding of the `structure` & `intrinsic concepts` before you read on from here, else it may not make much sense.

Syntax highlighting is important, so, configure your favorite text-editor to use a syntax-highlighting theme that is closely related to JavaSscript, or C. This way realted things will look related as you type them.
<br><br>


### Line Comment
There are 2 types of "line-comment" in IMP. Line comments are terminated (or closed) by a new line.

```javascript
#!    shabang           single line comment that has special meaning
//    double-slash      single line comment that is ignored by the interpreter
```
<br>


### Context Operators
The context operators always work in "pairs". If a "context-open" operator is used, then a "context-close" operator will be expected. As you know, everything in IMP is defined within a context, whether it is in a folder, or a file, or inside context operators, everything inside a context is related to and governed by the rules of the context.

In some languages, the first index of lists, strings, etc is `0`. This takes some time getting used to if you're used to indices starting with `1`, because this means that the last item in the list (or character string) will not be equal to the number of items in the list, so you always need to keep this weirdness in mind...<br>
-BUT - IMP's indexing is more natural. The first item is also `1` AND the last item's key is equivalent to the number of items in the list, so you can focus on the good bits, instead of wondering about such weirdness :)

```javascript
/**/  block comment  // everything inbetween is comment and is ignored by the interpreter
'  '  simple quote   // used to define text data exactly as written, can only escape itself: \'
"  "  common quote   // used to define common text that includes any escaped characters & variables
`  `  template quote // used as common quote, supports exressions, multi-line, trims extra white-space
(  )  expression     // used to wrap arguments such as variables & calculations
[  ]  common list    // used to list items in an ordered array, keys are always sequential numbers
{  }  structure      // used to define or extend context with named attributes
```
<br>


### Structure Operators
Nodes and Lists can be assigned by either stating it with `:`, like this: `foo:{}` or by placing the context operator directly after the name of the subject, like this:`foo{}`.<br>
If there are any comma-delimited textData between `:` and `;` it means that what-ever is inbetween is a list, like this:<br>
`list: apple, orange, foo;`. If no comma is present, -and no context or reference operators either then it is just plan text; with the exception of units -which will get the `.` removed. Remember that textData that is not in quote context will be trimmed, meaning the "white-space" will be removed from the beginning & end, and bewteen list items also.

```javascript
:     assign               // use what is on left as name of the value that is on the right
,     list delimiter       // end of list item
;     statement delimiter  // end of statement
```

Lists can be created implicitly by using the list delimiter `,` inbetween `:` and `;` like this:
```javascript
list: apple, orange, bark;
```
When assigning textData values implicitly as above, then, anything inbetween `:` ans `;` will be trimmed of white-space. So any spaces or new-lines, tabs, etc- will be removed from the beginning & ending of the text -and also implicit list items too. This only works if the text does not contain ANY "context operators".

Also, remember that: Doing things "implicitly" makes your code run a bit slower because the IMP interpreter has to do a lot of "guessing work" (conditions, text clean-up & parsing, etc) in order to get the "implied" result.


List items can be assigned in various ways. Here's an example of how to make a list of objects; note that the 2 examples below produce identical values:

```javascript
// implicit object list example
[
   foo:'bar',
   baz:123,
   foo:#BADA55
]


// explicit object list example
[
   {foo:'bar'},
   {baz:123},
   {foo:#BADA55}
]
```

A List can also be defined by a folder with files (or folders) in it which ONLY has NUMBERS as the file-name.  The names of these files ALWAYS have to be in consecutive numerical order. If the order-chain is broken, or there is a file in there with letters in its name then the list wil no longer be a list but it will be a "node". This does not apply with file-names that begin with a `.` because these are completely ignored.

Nodes can be defined with a name and subjects (attributes), or with a name, attributes, and contents. Here's an example:

```javascript
flerb{}           // node name is "flerb" with subjects inside {}
flerb {}          // same as above, whitespace between word & { is ignored
flerb:{}          // same as above

flerb{}[]         // node name is "flerb" with attributes {} & contents []
flerb {}[]        // same as above
flerb:{}[]        // same as above
```

This is useful for when defining contents that are a list of objects which have the same names inside them, like in markup languages where you can have a container `table` with many `rows`, or a `row` with many `columns`, etc.
<br><br>


### Reference Operators
These refer to subjects or names.

```javascript
.     attribute   // refer to that which is on the left by that which is on the right
@     pointer     // if @ is a text-prefix then it's a pointer reference, else means "find"
```
You can define a short reference to any subject that is somewhere deep like this: `@foo:Concept.flerb.booz.deep.wayDeep`. This will create a "pointer" and you can just use `@foo` in the same context as where `@foo` was defined, so you don't have to type out that long thing more than once.<br>
You can also group concepts and subjects into one name that has attributes that point to various places, deep or not. This is a very useful way of creating complex relationships while not duplicating anything.

If you make a list of pointers for various values, and assign these pointers to attributes of a node, say: a concept, then this means that you can pass that concept around without worrying about speed or resource issues, because pointers are very small, and only contain physical memory addresses of values. So you can make very large & complex data structures this way that can either be dynamically created, updated, destroyed, re-defined, etc, with the obvious speed bonus. This is used when creating a database server software, such as MySQL, written in IMP, where you can use the project structure you create as a database itself. You can see the obvious advantages here.
<br><br>


#### Selecting node-subjects & list-items
Here are a couple of examples on how to select or refer to things inside other things:
```javascript
// say for example we have the following node:
// --------------------------------------------------------
   business:
   {
      name:'AfterDark',
      dept:
      {
         marketing:
         [
            {
               name:'John'
               age:32
            },

            {
               name:'Jane'
               age:28
            },
         ]
      }
   }
// --------------------------------------------------------


// let these vars contain some values, maybe from elsewhere
// --------------------------------------------------------
   @node: business
   @does: 'marketing'
   @like: 2
   @word: 'ket'
   @mark: business.dept.marketing
// --------------------------------------------------------


// we can now get data from "business" as follows
// --------------------------------------------------------
   business.name                          // "AfterDark"
   (@node).name                           // "AfterDark"

   (@node).dept.marketing.1.age           // 32
   (@node).dept.(`mar${@word}ing`).1.name // "John"
   (@node).dept.(@does).(@like).age       // 28

   @mark.2.name                           // "Jane"
// --------------------------------------------------------
```
<br><br>


### Logical & Arithmetic Operators
Expressions in IMP are ALWAYS calculated from left to right and no arithmetic operator takes precedence (not even multiply). If you need to have part of an expression take precedence then you have to enclose it in "(expression context)" -or any context operators -inside the expression. Note that: expressions can be nested.

Logical and Arithmetic operators are supposed to be "mathematical" and they are expected to only be used inside "expression context".<br>

In IMP, the equivalence symbol `=` is used for `strict boolean equivalence` (strict comparisson) -not for assigning values.<br>
For "loose boolean comparisson" (similarity), the `~` (tilde) is used; however, this is "not so weak" comparisson as it is rather strong.<br>
The following exact values are loosely comparable (similar) to `boolean false`:<br>
`void`, `null`, `false`, `0`, `"void"`, `"null"`, `"false"`, `"no"`, `"off"`, `"0"`, `""`. <- These are the only values that are similar to `boolean false`, so remember these, because anything else is similar to `boolean true`.<br>
Something is only similar to `boolean true` if it is NOT similar to `boolean false`.<br>
This could mean to say that `loose boolean true` means: "it exists, is not empty, is not false AND is not explicitly said to be any of these".<br>
If something is "loosely comparable to boolean true" it does not mean that it also is also similar to something else that is "loosely comparable to boolean true"; hence: `loose boolean true` & `loose boolean false` are special and only applies as mentioned.<br>
Other than the above-metioned, IMP's loose comparisson works the same way as other languages.

In many languages, the "if" & "terinary" operations, "logical and", & "logical or" rely on "loose comparisson" to detirmine if something is `loosely logically true` or not; this works the same way in IMP.

Logical and Arithmetic operators only have expression value inside expression context and they MUST be separated from words & numbers by at least a single space to have effect, except the `-` (subtract) operator -which if placed in expression context in-front of a number will actually make that number a negative number as expected. This means that: `(-50)` is a number, but: `(-50%)` is just text.
<br><br>


**Logical Operators**
<br>
```javascript
!     NOT          // loose boolean negation - remember that it's "not so loose"
?     IF           // loose boolean true comparisson

|     OR           // choose the first loose boolean true comparable value, "this OR that OR bark"
&     AND          // loose boolean comparisson used to affirm & compound expressions

=     equal        // strict boolean comparisson
~     similar      // loose boolean comparisson
<     less-than    // is true if "left of" is logically less than "right of", else false
>     more-than    // is true if "left of" is logically more than "right of", else false
```

The logical operators can be combined to render some really short & interesting expressions; however, they have rules:
- the `!` operator is used for negating an operator, a variable, or an expression and MUST preceed these, so it comes first.
- the operators `?` and `|` and `&` ALWAYS have to be prefixed and postfixed with at least a single space ` `. These 3 operators cannot begin or end and expression, but can be used in compound expressions (not compound operators).

The most basic & common use of compound operators are used like: `(foo != bar)`, or `(foo >= bar)`.<br>
Using the compound-operator technique, you can quickly make a powerful expression, like this: `(foo != & !~ bar)`. Of coarse you can write it like: `((foo != bar) & (foo !~ bar))` -but this is duplication as it will run just fine, but for the developer is a lot more to type.<br>
The latter example above is an exmple of a "compound expression".
<br><br>


**Arithmetic Operators**

```javascript
+     add         // add to that which is on the left by using that which is on the right
-     subtract    // remove from that which is on the left by using that which is on the right
×     multiply    // duplicate & add to that wich is on the left by that which on the right
÷     divide      // separate that which is on the left into parts with that wich is on the right
%     modulus     // same as divide, but returns only the remainder
^     exponent    // multiplies what is on the left with itself to the number of times on the right

*     multiply    // //  same as multiply, used for fimiliarity
/     divide      // //  same as divide, used for fimiliarity
```
<br><br>


### Functions
When a function is declaired, it can only be referenced directly with its name in the same context, so, functions do not exist globally, unless they are "concepts".<br>

See the following for how to define & work with functions & what to watch out for to prevent confusion when defining & reading IMP code:

```javascript
foo:Func(){}   // foo is a function named "foo" with arguments () and sub-routine {}
foo:(){}       // foo is a function named "foo" with arguments () and sub-routine {}

foo:Func(){}() // foo is the result of a sub-routine
foo:(){}()     // foo is the result of a sub-routine

foo:()         // NOT A FUNCTION -OR FUNCTION CALL, but foo is the return value of an expression

foo()          // call function "foo"
foo ()         // call function "foo"
foo(){}        // call function "foo" & edit its result with a node
foo()[]        // call function "foo" & edit its result with a list
foo()()        // call function "foo" & call its result
foo()(){}      // call function "foo" & define call-back; can be chained (){}(){}...
```

Notice how some code-higlighting themes do not highlight `foo ()` as a function, but does highlight `foo()`.
Is is quite common that developers do the space between the word and the parenthesis, but to avoid confusion between `foo:()` and `foo ()` (two WAY different things), the code-highlighting may help if you use calls like this: `foo()`. If your code-highlighting works both ways then you should not have this problem ;)

The reason for the options to do it this way is because IMP has to look & feel structural in many ways of locic definition, but also gives the developers the freedom to choose how they want to use it.

"Callback functions" work for both "return" values and actual callback-functions alike. If the function called upon only has a "return value" then this return value will be in the arguments of the callback defined.
<br>
***
