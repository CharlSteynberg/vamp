# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Concepts :: perception
**thought** - _made manifest_
<br><br>

### Orientation
Any named thing directly under "project root" is a `concept`. Even `abet` & `index` are concepts, but their names will not be used as part of your project structure, instead, if they return named values then these named values will become conceps. Note that concepts should start with an Uppercase letter, making it easy to identify.

Concepts are globally available from any other concept -or context, except if explicitly meta-defined not to be accessable from a specified concept -or context. A concept's value can be of any data-type, so it can be anything from booleans to functions or binary data. The concepts that are readily available as part of the IMP language are termed: "intrinsic concepts". Any other concepts are termed: "developed conceps".

"Principle concepts" are related by principle & should be named relatively. The IMP syntax is case-sensitive, so this is used to name things relatively and by using appropriate prefixes & suffixes.

Clarification is needed on the general accepted meaning of "data". The best way I can think of "data" is that it is a "circular concept" in terms of how it is understood. The reason for this explanation is as follows:<br>
Say you refer to "data" on a CD-ROM or on a hard-drive. This data can be anything, from pictures to programmes, and it can change "state", from "dormant" to "active" once it has been installed & used.<br>
The same goes for programming. You define a programme by typing some commands in plain text in a file. This file is static and dormant - plain text data. Only once it is compiled & executed, or interpreted as executable commands, then it changes state to "active" and is no longer "data" but a live programme, that can very easily open & read its own source-code from the original text file it was written in, or even parse & evalute or execute it also.<br>
In IMP, "data" refers to "value" in any state. Only when it comes to data-type identification it can be realized as which it is. Now, IMP has a data-type called "Data", and this refers to data that is dormant, which can be "text", or "binary", etc.
<br><br>

### Intrinsic concepts
IMP's intrinsic concepts can be grouped into `constants`, `nodes` and `functions`; these concept names are strictly written in "CamelCase", so It's easy to remember their spelling.<br>

An example of intrinsic "principle concepts" in IMP are: `data-types`. These related concepts are both "contstants" & "functions" as each of these constants have an accompanying function prefixed with: `is`, i.e: `isVoid()` <- note that it adheres to the camelBack-case (CamelCase derivitave) spelling.

Data-types in IMP are at the heart of the language. It minimizes development time & prevents duplication of conditions that determine what to do with "reference", "primary", or "secondary" -data-types.

The 3 data-type classes referred to above are dependent on each other and are hirachical. If you call the function: `TypeIn(blah)`, then "TypeIn" calls "TypeOf" and "TypeOf" calls "typeAt" - to get the type from the bottom up in terms of complexity. So you see, for example: "TypeOf" does not have a data-type "void", but typeAt does and will return this if it is such. If "blah" has no "TypeIn" it will return the last identified TypeOf, if none, it will return the last identified typeAt. If you print out the data contained within these data-type contants, you will see that it specifies which it is, i.e: `tpat:void` -meaning "type at: void", so it is with: `tpof:null`, `tpin:trueBool`, etc.<br>

Constants can also be used as references in arguments to indicate options, such as "auto".
<br><br>

**Data-type constants**
<br>
_typeAt_ : _reference_
- `Auto` &nbsp; meaning "default", or "implicit"
- `Void` &nbsp; meaning "undefined", or "non-existent", or "nothing"
- `Meta` &nbsp; meaning "meta-physical" as in: "exists only in runtime memory and not on disk"
- `Path` &nbsp; meaning "path" reference that exists as "folder", or "file"
- `Link` &nbsp; meaning "linked" to the value of another subject, or is a "basic link" that points to an external subject

<br>
_TypeOf_ : _primary_
- `Null` &nbsp; blank, bare
- `Bool` &nbsp; boolean: true or false
- `Nmbr` &nbsp; numeric unit, integer or float (real) of any length
- `Data` &nbsp; plain -or un-parsed text, or binary data
- `List` &nbsp; automatically numbered list of values (of any data-type)
- `Node` &nbsp; object, an extensible structure with names of values (of any data-type)
- `Func` &nbsp; callable & extensible instanciated sub-routine structure that accepts arguments
- `Fail` &nbsp; a special kind of node that contains error information

_TypeIn_ : _secondary_
- `bareBool` &nbsp; boolean null: both true & false until its value changes
- `trueBool` &nbsp; boolean true
- `falsBool` &nbsp; boolean false
<br><br>
- `boolNmbr` &nbsp; 1 or 0
- `flatNmbr` &nbsp; whole number ie: &nbsp; -1, -2, 0, 1, 2
- `fracNmbr` &nbsp; fraction number i.e: &nbsp; -0.1, -0.2, 0.0, 0.1, 0.2
- `unitNmbr` &nbsp; a measurement of some kind such as "base36", or "cm", or "kg" -or currency, like: "ZAR".
<br><br>
- `bareData` &nbsp; empty data
- `unitData` &nbsp; numeral data
- `textData` &nbsp; text data
- `binaData` &nbsp; binary data
- `funcData` &nbsp; function data
- `listData` &nbsp; list data
- `nodeData` &nbsp; node data
- `typeData` &nbsp; type data
- `exprData` &nbsp; expression data
- `failData` &nbsp; fail-node data
<br><br>
- `bareList` &nbsp; empty list
- `condList` &nbsp; condition list
- `flatList` &nbsp; list of data-types that are not nodes or functions
- `treeList` &nbsp; not a "flatList"
<br><br>
- `bareNode` &nbsp; empty node
- `flatNode` &nbsp; node with attributes that contain data-types that are not nodes or functions
- `treeNode` &nbsp; not a "flatNode"
- `metaNode` &nbsp; a "dynamic" node that changes its parent according to conditions -or attributes of another subject.
<br><br>
- `metaFunc` &nbsp; returns any kind of data, or it's sub-routine can be re-defined during runtime
- `voidFunc` &nbsp; must return nothing, commonly used as a "routine" (instead of a "method")
- `nullFunc` &nbsp; must return null
- `boolFunc` &nbsp; must return bool
- `boolFunc` &nbsp; must return bool
<br><br>

**Primary data-type: "fail"**
<br>
This is a special kind of node with dynamically defined meta-attributes that will not cause fatal errors on assumed operations, but its value defaults to text data containing an error message. Any arithmetic expression, or attribute reference that do not exists as attributes of this fail object will halt the current execution thread and output the error message. This means you can at least test if a result of some kind resulted in failure before the current execution thread is halted; so make sure you test your code properly like: `isFail(result)`.

A fail only happens under special conditions, like when exceptions are thrown, or a syntax error occurs during hot-loading of structures, etc. Reference errors are not usually thrown, unless configured -or instructed to do so. If the failure is not handled, it will halt & output the error message in a "graceful" way: If your project's config "mode" is "live" it will log the error & only display something like: `development error` <- in this case meaning data-TypeIn "failDevl" means that the developer used some subject the wrong way, and an exception was thrown. This is very useful, especially in external services that could actually produce "fail-data", so it allows even exception-level integration; however, internally -the best is to "test" some operation before failing, much like "try -> catch" with more options. More on this later.
<br><br>

**Secondary data-type: "unitNmbr"**
<br>
Unit references are written after a number like this: `123.kg`, or `#A123Z.b36`. Unit references are only valid if they exist as a defined unit, else the sufixed text will be simply appended to the number so the number will become text.<br>
Note that numbers containing letters as part of the number must be prefixed with a `#` (pound sign). If the prefix is `#` & the suffix is left out then the number is automatically assumed to be "base16" (hexadecimal). The idea behind this is that you do not need to write conversion logic yourself. You can just specify the base-type and IMP will do the calculations accurately -granted that the unit you are refering is defined (supported).<br>

If you want to set the unit of a number in a variable you can use: `foo.unit:"kg"`.<br>If you want to get the unit of a number in a variable you can use: `foo.unit`.<br>Once a unit is assigned to a variable, then it exists in the "meta" attributes as such, so you don't have to state it again.<br>Units are biased to the same class, so if you try to do operations like: `5.kg + 12.cm`, it will fail; but if you try: `5.kg + 12.gm` the result would be: `5.12` ("kg" - the larger unit takes precedence).<br>When you're using "JavaScript-like" code highlighting, notice that the unit type is highlighted as a property.<br>Units make things a lot easier by not having to test or re-define conditions -or create functions to handle such things.<br>You can also define your own unit-base by extending the global "Unit.meta".
<br>
***
