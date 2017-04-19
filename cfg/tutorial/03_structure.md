# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Basics :: structure
**creating projects** - _simple & elegant_
<br><br>

#### Orientation
Generally speaking: any `subject` of thought is conceived to be made up of `concepts` within the `context` of the `subject`.<br>
Just for logical reference from here onwards: an "item as subject of discussion" is termed: `subject`.<br>
When refering "related to inside a subject" it is termed the subject's: `context`.<br>

An `IMP project` is simply a named folder with at least 1 IMP file inside it. This is termed: `project root`<br>
The items directly inside the `project root` are termed: `concepts`.

In peer discussions, the "quantity type" of separated items in a context can be described in terms of "granularity". So, the "granular" term is used to describe hown much of the structure is in separate folders & files.<br>

Here are some granularity types: `fine`, `well`, `sane`, `poor`, & `fuse` <- in this order (from left to right) means from "most granular" to "least granular". The terms are used like: "fine grained", "well grained", etc.
You can make up any term you want to define this, but these are useful in documentation & discussions.

Files are expected to be small enities, containing only data, or methods, or properties, etc. -so it makes a project more managable, and can also be easily planned, documented & assigned to a developer before development starts. During development, a "more granular" approach makes sense as things get done step by step and can be comitted to a repository as a complete piece of work that makes part of a whole, so progress can be realized both by the developer and project management.

The way that IMP automatically assumes the folder & file structure you define in a project as the data & functionality of your programming logic, makes it easier to structure application logically and also makes new ways programming possible.
It also structures your project automatically while giving you the freedom to define & use whatever you define, yet forces you to stick to the structure you define.

Realizing this simple yet powerful & flexible structure approach can make documentation & development easy to define, understand & extend. When you develop in & from such structured approach, things just come to you quickly because it just makes sense.

IMP is designed to be structured & fast, so it is really difficult to develop something that is slow & unmanageable.<br>
The IMP process is governed by its configuration. For example: you can configure the "call stack" size globally (or per project). So if a project is not well planned, or too many consecutive calls (or iterations) are made before yielding a result, then the request instance will automatically be terminated and yield an error - while not affecting the global process, so if you developed a "server" in IMP, the service will at least be stable.

Folders are termed: "nodes" (or "objects") and are attributes (or subjects) of their parents respectively.<br>
IMP files can also define "nodes".

Only IMP files are allowed in the project root, because conceps (root nodes) can be defined inside IMP files.<br>
Any other files (including IMP files) can be defined inside "concept folders" and sub-folders.<br>

An `IMP file` is a "plain text" file that can be named in 2 ways, depending on how you want to use it.
- If the file-name has no extension, it is termed: `implicitly named`.
- If the file-name has 1 extension, it must be a `.im` extension and this is also termed: `implicitly named`.
- If the file-name has 2 extensions, i.e: `blah.data.im`, it is termed: `explicitly named`.

If an IMP file-name is "implicitly" named, then, the file contents must start with a "shabang" `!#` as the very first characters, on the very first line, and used as follows:
```javascript
#! void
```
In the example above, note that "void" is used to indicate the file's return data-type, just as you would define a function's return data type. The "shabang" in IMP is used as a type of comment that has meaning, and works the same as a "single line comment", so it has to be on its own line.<br>
You can also name an IMP file explicitly like: `file.bool.im`, then you need no shabang in the file contents.<br>
This "explicit" & "implicit" naming convention is used to identify the type of data the IMP file should produce, both for the developer and for the IMP interpreter.

IMP files can be used to present anything, from an entire structure with initialization commands, objects, functions, data, events, meta-attributes, etc. However, being able to put everything in 1 file does not mean you should, in fact it is not wize to do as it will make development on this structure really difficult.
<br><br>

#### Project root
Let's assume you want to make a "web application", so you can imagine naming your folder accordingly, i.e: "example.com", so your example.com's `project root` is the "example.com" folder itself. This folder should be empty on initial start of development, or contain things you actually want to use in your project, because everything in this folder is part of your project structure, physically (on disk) and in run-time, except files named `abet.im`, or `index.im`. More on this next.
<br><br>

#### Directory "index" or "abet"
Traditionally the `directory index` file has been called `index`, and sometimes `default`, but if you have many files in a folder it is often hard to spot the "index" file at a glance because it is amoung all the others -either within your file-manager GUI, or in CLI. So anyway, IMP's default config accepts both `abet.im` & `index.im` - in this order respectively. You can change it in the config if you want to, but that's not recommemended :)<br>
For clarity & brevity we will just assume you're using the `abet.im` file as described.

Just remember that if you name a file inside a folder according to the "directory index" (or rather technically, the: `assembler base entry target` - abet) config, then, these will not be loaded as part of the structure; they are seen as files that contain instructions to assist in initializing the folder as part of the structure, but it's entirely up to the developer to code whatever they want in an `abet.im` file, just remember that these will always load first, regardless of their alphabetical name.
<br><br>

#### Paths & scope
When coding IMP, you can only read & write the contents of any file or folder within the scope of the project root.
This is a security measure, which means that you cannot read anything outside of the project's scope; however, you can "mount" a resource, such as a folder, or file, or socket within the project scope as part of the structure by creating a basic-link where you want to use it as part of the structure, with its target to the resource you want to use.

If the target resource requires authorization, then the target to where the link points to is written in a special way, as follows:
- For a path to a local file or folder use e.g: `midna:v0rt3x@/path/to/whatever`.<br>
- For an external server resource use e.g: `admin:fl3rb@127.0.0.1:475/foo/bar`.

Mostly you do not need to explicitly "read" or "write" data from & to folders & files. This happens automatically by traversing the structure and assigning keys & values in the same way you would use traditional "objects".<br>
You can read & write data like this:
- To `write` data, use: `path.to.file.txt:"hello"`
- To `read` data, use: `(path.to.file.txt)`

When you assign data to a "path", it exists only in memory, until you use i.e: `Save(path.of.file.txt)`.<br>
Using the example above, You can also "save" the the entire concept structure to disk using `Save(path)`<- this will save everything in the whole "path" tree recursively.

In IMP, it is quite irrelevant if a path exists or not, because it won't throw errors if you use a path that is undefined. If you "read" from a path that does not exist, its value will simply be `void` (wich means "not valid or legally binding"), so you can test if a path is defined or not, using: `isVoid(some.thing, or.other)`.

In some cases where files are copied into the project structure that IMP has no permission to read, - and you try to read from such a file during runtime, the result will be a "fail" meta-node, which you can test with: `isFail(some.thing, or.other)`.<br>
To test for multiple types, you can use: `typeOf(some.thing).is(void,fail)`<br>
Similarly, to test for multiple values, you can use: `dataOf(some.thing).is('foo',bar,void,123)`<br>
<br><br>

#### Meta attribute
Meta attributes are used internally by the language interpreter and exposes its use to the developer. Meta-attributes are used as configuration, properties, or methods, or as fall-back mechanism of undefined attributes being referred to. It can also "trap" certain events.

The following meta-attributes are reserved, meaning: they cannot be dropped and their values have special meaning during runtime:
- `root` is a read-only value, it contains the name of root-concept of which this entity is a descendant.
- `home` is a read-only value, it contains the path of the current entity's parent.
- `name` is a read-only value -(only if it is defined), it contains the name of the current entity.
- `akin` is used to define relationships
- `bias` is used as a mini fire-wall
- `lock` is used to "freeze" a subject so that it cannot be re-defined or changed during runtime.
- `conf` is used to define dynamic runtime configuration
- `data` is the subject's value, it has 2 trap events: `get` & `set`, which can be used to change default behavior
- `type` is used for assigning a different data type
- `trap` is used for special hooks on events like: `load`, `save`, `data`, `call`, `fail`, `drop`, `meta`

Any other meta-attribute can be defined. Note that sometimetimes, a function, or condition could be anonymous, so in that case its `meta.name` is undefined. In such cases you can assign a value to this name, but once set, it sticks.<br>
A node's meta attribute is just that, an attribute of its parent that contain attributes. It does not work like traditional "prototype" attributes because, you should not get the meta-name from a node by calling: `node.name`.

The `meta` attribute is used for interesting and very powerful concepts, like "fallback". So if a node does not have a "name" attribute, then IMP will automatically fall-back to the node's "meta.name".
This allows more flexible use of a node's attrubutes because you may want to give it a different name than what the meta attributes says it is, like for instance: `person.name`. To get a meta-attribute from a node, just use: `node.meta.name` or whatever :)

Remember, you can assign any meta-attribute you want, except for the reserved ones, and you can also set any direct attribute of a node and access it like: `node.foo` and its meta attribute could also have that same attribute and you can access that like: `node.meta.foo`. This allows for very interesting concepts like dimensions, conditional states, or dynamic relationships. I'm sure you can think of a lot of interesting ways to use it; may the force be with you :P
<br><br>

#### Filenames with special meaning
- Files named exactly: `abet.im` are not part of its parent's attributes, they are optional & aid initialization.
- Files named exactly: `meta.im` define the meta-attributes of any named resource, which are not enumerable.
- File-names starting with a `.` are hidden and ignored, so they will not be part of the run-time structure at all.
- Basic links are used to "point to" or "mount" resources outside of the project path scope.
***
<br>
