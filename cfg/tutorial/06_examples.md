
# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Examples
The examples below are here to explain more about IMP in general.<br>
It is recommended that you have IMP installed and basic understanding of IMP's structure, concepts & syntax before you continue.

These examples are all part of a whole: We will create a web application, similar to "StackOverflow", though, not as elaborate, called "Midnight". It will be a small project, but will cover a lot of what you need to know in order to build real-world applications.

Don't stress, everything is done step by step, with explanations of what everything does, why and how to use it, etc. After the specification, you will see that things are actually done in very small steps: from setting up & testing "if things work", to drafting simple functions & such.<br>
It is recommended that you actually type out the code (not copy & paste) -in order to get a feel for the language, so,<br>
grab a cup of coffee, turn up your music and enjoy the ride.
<br><br>


### 1 :: Specification
As with any new project (or feature) -you need at least a simple specification in order to have an idea of what to do. If you did not get a specification of for work to be done, then simply create one yourself and send it to the involved parties for feedback & sign-off of what is to be done.

For simplicity sake, let's assume that the "milestone challenges" below come from a company called: "After-Dark Inc.", and they want their whole web-application software stack written in 1 language, including the web-server software (like Apache) and database software (like MySQL). They also want the configuration, layout & styling of the graphical user web interface to be done in the same language. So... we told them that the only language we know of that can do this is "IMP" and they want us to prove that it can be done, by completing project in "steps" as "proof of concept" -that it can be done for which they are paying us handsomely after each step is proven to be possible.

The "Midnight" project is devided up into milestones and the version of the application depends on the milestone completed. When we reach v1.0 the project would be complete.
<br><br>

#### 1.1 Midnight :: milestone : v0.1
Building a web server.
<br><br>
**Challenge**<br>
We need a web server programmed in IMP. It should do all the things a basic web-server can do, but before we plunge in too deep, we just want to see if this can be done. So, build a web-server software that serves only 1 "page". This page should have a dark grey background, with a block in the middle that reads: "Midnight ... coming soon" -in the same dark grey as the background. This page should be displayed for every request -no matter what URL the visitor enters after the domain name: "midnight.dev". If you can pull this off I should be able to confince the CEO of the obvious benefits.
<br><br>

**Solution**<br>
Okay then, that doesn't sound hard to do at all!<br>
Let's start by preparing the project. First off, we should make sure that when you enter: "midnight.dev" into your local web browser that it will actually point to your development machine, just so we don't need to type in its IP address.
To do this, just edit your local machine's "hosts" file, making it point "midnight.dev" to your dev-machine's IP address. In Linux this file is normaly located in `/etc/hosts` as a text file, although, you may need "root" previledges to edit and save it. After that is done, we can begin.

It is assumed that your "local machine" and your "development machine" are 2 different machines, (or virtual-boxes), but if you're doing both on the same machine don't stress, it's all good, just assume instructions for both references accordingly. If your key-board has a "return" button (not an "enter" button) it's all good, just assume I mean it's the same thing ;)

Follow these instructions in order to create your project with some basic structyre inside it:

- create a folder somewhere on your development machine and call it: `midnight.dev`
- inside this `midnight.dev` folder, create a text file named: `abet.im`.
- type the following code in the `abet.im` file and save:

`File: midnight.dev/abet.im`
```javascript
#! node

Server: Sock('http', Host.addr, 9000)
{
   tick:(user)
   {
      Host.log('visit from: ' + user.addr)
      user.view('ello from: ' + Proc.name)
   }
}
```
- on your dev machine: open a terminal, type in something like: `imp /path/to/midnight.dev` and hit "enter".
- on your local machine: open your favorite web-browser and type in the address bar: `midnight.dev:9000` and hit "enter".
- the moment you hit "enter" (or refresh) in the web-browser, you should see a new line of text appear in the terminal window that looks something like this: `> visit from: 192.168.0.3`, and, in the web-browser you should see text that looks like this: `ello from midnight.dev`.

Congrads! - You've just created a (very basic) web server!

That was just a test to see if all went well. If not, then there's a problem somewhere, but I'm sure it's all gewd, in any case, here's more info of the code above, so if something went wrong you can know what to look out for:

- The 3 arguments that the intrinsic "Sock()" function requires are as follows: `protocol, ipAddress, port`.
The `protocol` part is used as instruction on how to handle information transmitted via the socket. It also determines the type of socket automatically i.e: TCP, FIFO, etc, but you don't need to worry about that unless you want to do some low-level socket management.<br>
The instrinsic "Host" node has info about the machine that IMP is hosted on. The Host.addr is the IP address of the host machine, - not the "loopBack" (or localhost) IP, but the first network IP address. You can configure this of coarse, or just "hard-code" the IP address, but, it's useful. You can choose any port number you want, although, if you want to use the default "http" port: `80` (so that you don't have to enter a port number in the browser's address bar), then you need to run your IMP application as "root" user, but all that will be explained later. If you get fail messages about the IP address, or port, just hard-code it for now, we'll cover config in a bit.

- When Sock() is called with 3 arguments, it tries to open the socket and returns an *Extensible Instance* of itself. Extensible functions are defined with an `extends` clause in a specific place, so they can be extended as if re-defining the function. The particulars of an extensible function depends on the function itself, but, the Sock() function needs at least 1 specified event listenner: `tick`. in IMP, "tick" is short for a "ticker" that "ticks" on events. So in this case, "tick" will be called on every incomming request with the "event" as argument, that we named: "user".

- The "user" argument (variable) has information about the event and also has some methods (functions) that makes it easy to read & send data related exclusively to the event (tick instance).

- The "Host" intrinsic node also has a method called: "log" that writes data to the live process' "stdlog", so it ends up in the terminal if the process is not run as a "deamon" (more on this in a bit).

- The data we've sent was "plain text" so the ".view()" method automatically sends the correct headers for the data about to be sent. This is called "implicit headers".

- The "Proc" intrinsic node has information about the current running process and the project root folder name is automatically the process name.

- Finally, the "tick" event listenner function ended before the ".done()" method was called within itself, so, it ends the response automatically (or rather: "implicitly").

By the way, "implicit" is just a fancy term for what you "imply" by something, without "explaining" it. (the latter is "explicit")<br>

Notice that there are no "semi-colons" present in the code. Semi-colons are not required if (and only if) statements are separated with new-lines. if those 2 statements were on the same line, then the first one had to end with a semi-colon, else it would be a "syntax error". This works just like "single line comments" work in other languages, like JavaScript, see, so the new-line ends the statement, just like a semi-colon does ;)<br>

Note that the Sock() function takes more than just `tick`. You can also define these event listenners: `open`, `stop`, `fail`.<br>
- `open` is triggered when the socket was successfully opened
- `stop` is triggered when the socket stops listenning for events
- `fail` is triggered when an error was encountered in any of the listenners, so, if the `tick` handler runs some shady code that fails horribly, then this `fail` event handler will catch the error and have info on which listenner failed, and will also supply the "event" so can let the user (instance) know that there was a problem or whatever.
<br><br>

Now that you know more about your web-server, let's finish "Milestone v0.1".

- in the: `midnight.dev/abet.im` file, change the code so it looks like this:

`File: midnight.dev/abet.im`

```javascript
#! node

// SOCK :: tiny http web server
// --------------------------------------------------------
   Server: Sock('http', Host.addr, 9000)
   {
      tick:(user)
      {
         user.view(Page)
      }
   }
// --------------------------------------------------------
```
<br><br>

And now the actual web page:
- create a file named: `Page.im` inside your "midnight.dev" project folder.
- open your `Page.im` file and type the following code inside it and save:

`File: midnight.dev/Page.im`

```javascript
!# data html

// HEAD :: the important bits
// --------------------------------------------------------
   head
   [
      title:'Midnight'

      style {type:'text/css'}
      [
         @darkGrey: #555

         body
         {
            position: relative
            background: @darkGrey
            font-size: 12.px
         }

         #block
         {
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            background: #DDD
            border: 1.px solid #FFF;
            border-radius: 4.px
            font-family: Arial, Helvitica, Sans;
            color: @darkGrey
            padding: 3.em
         }
      ]
   ]
// --------------------------------------------------------


// BODY :: the visible bits
// --------------------------------------------------------
   body
   [
      div {id:'block'}
      [
         h2:'Midnight'
         br
         p:'.. coming soon ..'
      ]
   ]
// --------------------------------------------------------
```

We will discuss the above code in a bit, but first, let's test:

- on your dev machine: open a terminal, type in something like: `imp /path/to/midnight.dev` and hit "enter".
- on your local machine: open your web-browser and type in the address bar: `midnight.dev:9000` and hit "enter".

This time, your terminal should be quiet, but in your web browser you should see the page as desired.<br>
If all is good, mental-high-five! - well done!
