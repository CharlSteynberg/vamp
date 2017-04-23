/************************************\
 Application Bootstrap Execution Core
\************************************/





// conf :: (initial) : strict-mode (bug prevention)   ..  `Main` (immutable supreme-global)
// --------------------------------------------------------------------------------------------------------------------------------------------
   "use strict";

   (function(g){ Object.defineProperty(g,'Main',{writable:false,enumerable:false,configurable:false,value:g}); }
   (((typeof global) != 'undefined') ? global : window));
// --------------------------------------------------------------------------------------------------------------------------------------------





// func :: Extend : define hardened properties -- neat shorthand to define multiple immutable properties of multiple targets
// --------------------------------------------------------------------------------------------------------------------------------------------
   Object.defineProperty(Main,'Extend',{writable:false,enumerable:false,configurable:false,value:function()
   {
      var args = [].slice.call(arguments);

      return (function(defn,fail)
      {
         if ((typeof defn) != 'object'){ throw 'invalid dataType :: expecting: `Extend(args)({})`'; }
         args.forEach(function(ownr)
         {
            for (var prop in defn)
            {
               if (!defn.hasOwnProperty(prop)){ continue; }
               try { Object.defineProperty(ownr,prop,{writable:false,enumerable:false,configurable:false,value:defn[prop]}); }
               catch(f){fail=true;}
            }
         });

         return (fail ? false : true);
      });
   }});
// --------------------------------------------------------------------------------------------------------------------------------------------





// func :: Define : globals only -- extends `Main`
// --------------------------------------------------------------------------------------------------------------------------------------------
   Extend(Main)
   ({
      Define:function(defn,arg1,arg2)
      {
         var type,list,span,echo;  type=(typeof defn);

         if ((type == 'string'))
         {
            list = defn.split(',');  defn={};  type='object';

            if ((list.length < 2) && arg1)
            { defn[list[0]] = arg1;}
            else
            {
               list.forEach(function(word)
               {
                  span = word.length;
                  if ((span > 0) && (span < 13) && (word === word.toUpperCase()))
                  { echo=('⋖'+word+'⋗'); defn[word]=echo; return; }
                  throw 'invalid definition :: expecting: `Define("WORD")`';
               });
            }
         }

         if (type == 'object') { Extend(Main)(defn); return echo; }
         throw 'invalid definition :: expecting: `Define({})`';
      }
   });
// --------------------------------------------------------------------------------------------------------------------------------------------





// conf :: (global) : important global constants - these are used with some tools defined below to standardise server & client commands
// --------------------------------------------------------------------------------------------------------------------------------------------
   Define
   ({
      VOID:(function(){}()),
      NONE:null,
      TRUE:true,
      FALS:false,
   });

   Define('AUTO,DROP,DUPL,HASH,UPPR,LOWR,CAML,LABL,NEXT,SKIP,STOP,DONE,KEYS,VALS,ONCE,BFOR,AFTR,EVRY,UNTL,EVNT,EVEN,ODDS,PULL,PUSH,FAIL,EXIT');

   Define(function()
   {
      var glob = ((typeof global)  != 'undefined');
      var wind = ((typeof window)  != 'undefined');
      var proc = ((typeof process) != 'undefined');
      var docu = ((typeof document)!= 'undefined');
      var mule = ((proc && !!process.send) || (((typeof self) != 'undefined') && !!self.postMessage));
      var resl = // node
      {
         NATIVE: glob,
         PUBLIC: (!glob),
         HASGUI: docu,
         HASCLI: (proc && process.stdout.isTTY),
         ISMAIN: (!mule),
         ISMULE: mule,
      };

      return resl;
   }());
// --------------------------------------------------------------------------------------------------------------------------------------------





// func :: typeOf : primary data-types - `r` for crude type  ..  `TOOL` is i.e: Math, RegExp, console  ..  `PROC` is like a: worker, timer, XHR
// --------------------------------------------------------------------------------------------------------------------------------------------
   Define('typeOf',function(d,r,p,t,n)
   {
      p=(Object.prototype.toString.call(d).match(/\s([a-zA-Z]+)/)[1].toLowerCase());  n=((!!d&&!!d.constructor)?d.constructor.name:n);
      p=(!n ? p : ((n.substr(1,3)=='ime') ? n.toLowerCase() : p));  if(r){return p};  p=p[0];  n=((n=='Object')&&((typeof d.log)!='function'));
      t=(typeof d)[0];  t=((!d&&(t!='b'))?0:((t=='b')?1:((t=='n')?2:((t=='s')?3:((t=='f') ? 4 : ((t!='o') ? 0 :
       ((p=='a')?5:((p=='t')||(p=='g')||(p=='w')||(!n&&(!!d.send)||(!!d.platform)))?6:(!n&&(((!!d.test||!!d.assert||!!d.debug||!!d.log)))?7:8))
      ))))));

      return this[t];
   }
   .bind(function(d,f)
   {
      d={};  ('VOID,BOOL,NUMR,TEXT,FUNC,LIST,PROC,TOOL,FORM'.split(',')).forEach(function(n,i)
      {
         f=('is'+n[0]+n.substr(1).toLowerCase());  d[i]=Define(n);
         Define(f,function(v){return (typeOf(v)==this.t)}.bind({t:d[i]}));
      });

      return d;
   }()));
// --------------------------------------------------------------------------------------------------------------------------------------------




/*
// func :: kindOf : secondary dataType identification
// --------------------------------------------------------------------------------------------------------------------------------------------
   Define('kindOf',function(d,r,t,k)
   {
      r=typeOf(d,1);  t=typeOf(d).substr(1,4);  k=this[t](d,r);
      return Main[(k+t)];
   }
   .bind
   ({
      VOID:function(d,r){}.bind({BARE:1}),
      SPIN:function(d,r){}.bind({VOID:1}),
      NUME:function(d,r){}.bind({}),
      TEXT:function(d,r){}.bind({}),
      BLOB:function(d,r){}.bind({}),
      LIST:function(d,r){}.bind({}),
      FORM:function(d,r){}.bind({}),
      FUNC:function(d,r){}.bind({}),
      TIME:function(d,r){}.bind({}),
      EXPR:function(d,r){}.bind({}),
      MAIN:function(d,r){}.bind({}),
   }));
// --------------------------------------------------------------------------------------------------------------------------------------------
*/
