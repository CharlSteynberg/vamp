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
      var args = arguments;

      return (function(defn)
      {
         if ((typeof defn) != 'object'){ throw 'invalid dataType :: expecting: `Extend(args)({})`'; }

         args.forEach(function(ownr)
         {
            for (var prop in defn)
            {
               if (!defn.hasOwnProperty(prop)){ continue; }
               Object.defineProperty(ownr,prop,{writable:false,enumerable:false,configurable:false,value:defn[prop]});
            }
         });
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





// conf :: (global) : set some important global constants
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





// func :: typeOf : primary dataType identification - `r` is for raw-type return
// --------------------------------------------------------------------------------------------------------------------------------------------
   Define('typeOf',function(d,r,t)
   {
      t=(Object.prototype.toString.call(d).match(/\s([a-zA-Z]+)/)[1].toLowerCase()); if(r){return r;} t=
      ((
         (t=='string') && /[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(d)) ? 'binary' : ((t.indexOf('elem') > -1) ? 'element' :
         ((t.indexOf('coll') > -1) ? 'nodelist' : (((type=='global')||(type=='window')) ? 'supreme' :
         (t.indexOf('elem') ? 'ob' : ((t.indexOf('list')||(t=='arguments')) ? 'ar' : (t=='null' ? 'bo' : t)))))
      ));

      return (this[t.substr(0,2)] || this['un']);
   }
   .bind(function(d,n,w,f)
   {
      d = 'VOID,BOOL,NUMR,TEXT,LIST,FORM,FUNC'.split(',');  // ,FAIL,CRON,DUCT,SNSR,PROC :: TODO

      for (n in d)
      {
         if (!d.hasOwnProperty(n) || Main.hasOwnProperty(d[n])){ continue; }
         w=d[n];  f=('is'+w[0]+w.substr(1).toLowerCase());  d[n]=Define(w);
         Define(f,function(v){return (typeOf(v)==this[t]);}.bind({t:d[n]}));
      }

      return d;
   }()));
// --------------------------------------------------------------------------------------------------------------------------------------------





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
