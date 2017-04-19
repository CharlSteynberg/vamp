# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Introducing :: IMP
**metaprogramming** - _for just about anything_
<br>
The IMP core is programmed & compiled from the ground up with **Fortran** to be fast as an interpreted language, even faster when it is compiled as it can be both.<br>
It is a semi-strictly typed, case-sensitive, object orientated, event driven, prototype based language. Any value in IMP is extended from a "meta-object" related to the data types assigned, much like javascript's "_proto_" design It does not pass around whole structures, instead - internally it passes "memory pointers", hence it uses less resources.<br>
Its syntax has the feel of Javascript, JSON, CSS or C, yet with the power of Fortran, or C++.<br>
It can listen on- & interface with file-system, network sockets, hardware & software events, etc. The core is a "sensory system" with parallel execution via multiple CPU & processing thread control.

The IMP core is small enough to run like PHP, or CGI, yet the real power of IMP is realized when run as a daemon. It is based on the principle of being a "soft-BIOS".  Under the hood, everything in an "IMP project" is a logical structure that gets loaded into memory upon access via IMP programming logic comtained within IMP files in this structure. Structure elements are "implicitly loaded", meaning, that you need not explicitly "require" or "include" modules. More info on the structure later.

IMP can interface with just about any hardware you have on its hosting platform: if the host operating system  can use it, IMP can use it too, granted that it has the priviledges to do so. The language is extended with IMP, C & Fortran modules via "transpilers" & "utilities". The core can interface very easily with C, and with its extensibility and complete meta-morphosis capabilities this language can become anything - even rewrite & compile itself automatically - if programmed to do so.

The IMP transpiler system has to be able to do a lot of number crunching & data parsing - and be quick about it. A transpiler translates IMP code into code that is readily usable by the target platform -whether it be a web-browser, desktop application, database, etc. Even so, it can "bake" transpiled code once and just stream the data that has not changed on every request. Considering that your IMP structure & data resides in memory, it's pretty darn fast.

It is not a prototypical language, because its primitives are not derrived from extendible prototypes. Even so, every named thing in IMP can have `meta` properties & methods as well, but this is not the default, this is only set once instructed to make a meta-object from some named thing. Even so, that named thing can still be accessed as before, but being a meta-node it could mean the same as a neuron in the brain. Meta-nodes can be described as "classes" with capabilities such as `overloading`, `polymorphism`, etc.

The language is designed not to throw too many errors, but rather prevent errors and resolve access points gracefully. To explain this better, take JavaScript for example:
If none of the following exists at all: `foo.bar.baz` it will throw; - but in IMP it will have the value: `void`. Any thing that tries to access something "suposedly extended" from `void` will also have the value of `void`, so as to prevent crashes & system failures, whether its purpose is as database, system application, web app, or native app.

Most of the IMP language authoring power comes with the way it is dynamically structured, and with the use of its oprators. These operators are similar to the ones you may be used to, but, less code is required to do a lot. For instance: from within a function, To remove the last 3 characters from the following text, In Javascript you have to do something like this:
```javascript
// Javascript

var foo = "hello";
    foo = foo.substr(0, foo.length -3));

return foo;
```
<br>
And in IMP the exact same thing is this:
```javascript
// IMP

("hello" - 3)
```
The above IMP code example shows that: whatever is defined in the current scope & not cleaned up -> is the return value.<br>
Just FYI:<br>
You can clean up your scope by defining a return value `explitly`.<br>
The above is just an example of defining a return value `implicitly`.

More on this below, this intro is just a teaser to get you hooked ;)<br>
There is a lot more power with the operators though, but as you can see: arithmetic operators can be used to manupulate any data, not only numbers.

IMP's variable declarations are "object keys" that are available as the interpreter reads the code strictly "from left to right & top to bottom". This is design by principle of logical structure.
Every folder or file are "key-names" and their contents as their values respectively.

From the file-system view, an IMP project begins with 1 folder (directory). This folder is the lowest file-system root path that your project can access on the harddrive. This is a security-by-implementation method. If you need IMP to access the root file-system & mounted disks, then you should have sufficent priviledges on that system in order to have the "runtime user" access those via special "basic links" - defined inside your project structure.

You can tune the IMP config to your heart's desire. IMP's configurations are `.im` (IMP) files, so they are easy to understand & edit, just like JSON, but you also can have comments & auto-conf features with `.im` files, and you do NOT need to enclose everything in `""` (double quotation marks), no - you can just type key names & values, unless they have spaces or special characters, then you will have to.
To edit an IMP file, simply use your favorite text editor and set its code-highlighting to that of JavaScript, or PHP, CSS, or, C.

The IMP process manages memory eficiently, so, unpopular data is saved to disk and unloaded from memory.<br>
The general consensus is: "As above, so below". If data, or structure is changed in memory, it is saved to the physical structure, -on disk, or even remote resources. If the physical structure or data changes on disk (or remotely), it is re-loaded into memory. This feature is very powerful as it resolves a bunch of concurrency & redundancy issues - automatically, and makes your "live process" portable & extensable. Don't stress, if data or structure is changed, then it is "tested" before automatically implemented, and it does so in a safe manner, but this feature can be disabled, or changed in the config - per project, or globally.

More on the live process, syntax, operators, structure, & config below ;)

With all the above being said, you can imagine that an IMP project can be seen as a fast & powerful database that is not only a database, but also your model relationship logic & validation, or business & programming logic as a whole.
It is up to your business logic & planning to define what goes where. In fact: you can use IMP to define a powerful database from scratch, and as you will see later on, it is no different from making a normal application or server, so it's really easy. Then you can run this database from a separate server (like a physical machine elsewhere) and interface with it via another IMP server being a web-server, or service, or application, etc.<br>
So from traditional database design terms, yourprogramming logic suffice as "stored procedures" or whatever, just a lot more flexible & powerful. Not saying that it is the best solution for large scale databases, but it can replace some free databases out there, where many of them are actually used in business environments.
***
<br>
