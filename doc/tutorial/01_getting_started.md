
# IMP
#### I n t e g r a t e d &nbsp;&nbsp; M e t a P r o g r a m m i n g
***
<br>




## Installation
To install IMP, you will find an installation for your dpecific platform in the `install` folder in the `imp` repository.
- In the `install` folder you will find folders with names of operating systems, pick yours.
- Inside your operating system folder, say "linux", download the `imp` file, which is just a small bash script installer.
- Once downloaded, use your terminal to navigate to where it is downloaded & make sure this `imp` file is ececutable.
- Enter the following command: `./imp install`

This will install IMP on your system.<br>
It will ask you a couple of questions, so just follow the prompts & you'll be ready to rock!<br>
To make sure IMP is installed, just open a new terminal and enter this: `imp -v`<br>
If all is well you should see something like: `0.1.0`
<br><br><br>


### Hello World
Assuming you have installed IMP, just create a folder somewhere you want to start a new IMP project.<br>
For clarity & brevity, I'll assume you're using "Linux" & created your folder in: `/home/midna/demo`<br>
- Inside this folder, create a file named: `hello.im`
- Open this file in your favorite text editor.
- In your text editor, choose a syntax higlighting style that suits you. Since IMP's syntax is similar to JavaScript, C, or CSS, any of these should suffice.

In the `hello.im` file, type the following text exactly:
```javascript
"Hello World!"
```
- Save the file in your project folder: `/home/midna/demo`
- Open a terminal and type the following: `imp /home/midna/demo/hello.im`

You should see something like this:
```javascript
> Hello World!
```
Congrads!
<br><br>

***
<br>
