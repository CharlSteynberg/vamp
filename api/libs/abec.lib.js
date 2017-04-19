/************************************\
 Application Bootstrap Execution Core
\************************************/





// glob :: Main : conf
// ----------------------------------------------------------------------------------------------------------------------------
   "use strict";

   function mkHard(ownr,prop,valu,muta)
   {
      Object.defineProperty(ownr, prop, {writable:(muta ? true : false), enumerable:false, configurable:false, value:valu});
   }


   if (typeof process == 'undefined')
   {
      mkHard(window,'Main',window,1);
      mkHard(Main,'View',document,1);
      mkHard(Main,'Proc',navigator,1);
      mkHard(Proc,'Role','WBI');       // Web Browser Interface
   }
   else
   {
      mkHard(global,'Main',global,1);
      mkHard(Main,'Proc',process,1);

      if (typeof window != 'undefined')
      {
         mkHard(Main,'View',document,1);
         mkHard(Proc,'Role','NPI');    // Native Platform Interface
      }
      else if (Proc.stdout.isTTY)
      {
         mkHard(Main, 'View', require('readline').createInterface({input:process.stdin, output:process.stdout}), 1);
         mkHard(Proc,'Role','CLI');    // Command Line Interface
      }
      else
      {
         mkHard(Main,'View',null,1);   // to be set by Bios
         mkHard(Proc,'Role','API');    // Application Programming Interface
      }
   }


   mkHard(Main,'mkHard',mkHard);          // make `mkHard` immutable
   mkHard(Main,'VOID',(function(){}()));  // undefined
   mkHard(Main,'NONE',null);              // uniformity
   mkHard(Main,'TRUE',true);
   mkHard(Main,'FALS',false);

   mkHard(Proc,'Halt',VOID,1); // set if exit or fail, to be checked by async callbacks

   ['API','CLI','NPI','WBI'].forEach(function(role)   // shorthand role check
   {
      mkHard(Main, role, ((Proc.Role == role) ? true : false));
   });
// ----------------------------------------------------------------------------------------------------------------------------





// glob :: func : Exit
// ----------------------------------------------------------------------------------------------------------------------------
   Main.Exit = function(code)
   {
      Proc.Halt = 'EXIT';  // to be checked in async routines

      if (!WBI)
      {
         Proc.exit(code);
         return;
      }


      Main.onerror = function()
      {
         return true; // silence
      };

      var list = Proc.getElementsByTagName('script');

      for (var i in list)
      {
         if (!list[i] || !list[i].nodeName){ continue; }
         list[i].parentNode.removeChild(list[i]);
      }

      throw new UserException(code);
   };
// ----------------------------------------------------------------------------------------------------------------------------





// func :: listOf : create list -- CAREFUL !! this one works only with numbers and is temporary for uniformity
// ----------------------------------------------------------------------------------------------------------------------------
   Main.listOf = function(e,b,l)
   {
      l=[];  b=1;
      for (b; b<=e; b++){ l[l.length]=b; }
      return l;
   };
// ----------------------------------------------------------------------------------------------------------------------------





// glob :: func : typeOf -- (however crude, this will work on ancient and modern JS engines) -- to be frozen
// ----------------------------------------------------------------------------------------------------------------------------
   Main.typeOf = function(d,t,r)
   {
      t = (Object.prototype.toString.call(d).match(/\s([a-zA-Z]+)/)[1].toLowerCase()).substr(0,4);
      r = typeOf[t];

      if (r) { return r; }

      if (type.indexOf('elem') > -1){ return typeOf['node']; }
      if (type.indexOf('coll') > -1){ return typeOf['list']; }

      return typeOf['unde'];
   };

   (function(o,k)
   {
      o = // object -- from now on just `node`
      {
         unde:'VOID',
         bool:'SPIN',
         numb:'NUME',
         stri:'TEXT',
         blob:'BLOB',
         arra:'LIST',
         obje:'NODE',
         func:'FUNC',
         date:'TIME',
         rege:'REGX',
         glob:'MAIN',
         wind:'MAIN',
      };

      for (k in o)
      {
         if (o.hasOwnProperty(k))
         { typeOf[k] = ('⋖'+o[k]+'⋗'); }
      }
   }());
// ----------------------------------------------------------------------------------------------------------------------------





// func :: Fail : global error handler
// ----------------------------------------------------------------------------------------------------------------------------
   Main.Fail = function(mesg,path,line)
   {
      console.error(mesg); // TODO

      Exit(1);
   };
// ----------------------------------------------------------------------------------------------------------------------------





// evnt :: fail : global error routing
// ----------------------------------------------------------------------------------------------------------------------------
   if (WBI)
   {
      Main.onerror = function(mesg,file,line)
      {
         Fail(mesg,file,line);
      };
   }
   else
   {
      Proc.on('uncaughtException', function (err)
      {
         Fail(err);
      });
   }
// ----------------------------------------------------------------------------------------------------------------------------
*/
