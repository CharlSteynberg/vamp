/************************************\
 Application Bootstrap Execution Core
\************************************/





// conf :: (initial) : strict-mode (bug prevention)  ..  `Main` (immutable supreme-global)
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
      d={};  ('VOID BOOL NUMR TEXT FUNC LIST PROC TOOL FORM'.split(' ')).forEach(function(n,i)
      {
         f=('is'+n[0]+n.substr(1).toLowerCase());  d[i]=Define(n);
         Define(f,function(v){return (typeOf(v)==this.t)}.bind({t:d[i]}));
      });

      return d;
   }()));
// --------------------------------------------------------------------------------------------------------------------------------------------





// func :: kindOf : secondary dataType identification  ..  `TOSHTEXT` is all-white-space  ..  `TOOLFUNC` is function-of-function/proto/global
// --------------------------------------------------------------------------------------------------------------------------------------------
   Define('kindOf',function(d,r,t)
   {
      r=typeOf(d,1);  t=typeOf(d).substr(1,4);
      return this[t](d,r);
   }
   .bind(function(d,t,g,f)
   {
      d={};
      ([
         ['VOID','NONE',function(d,r){return this[0]}],
         ['BOOL','TRUE FALS',function(d,r){return this[(d?0:1)]}],
         ['NUMR','VOID DGIT FRAC',function(d,r){return this[(!d?0:(((d+'').indexOf('.')<0)?1:2))]}],

         ['TEXT','VOID TOSH NUMR CHAR WORD SLUG BOOL WRAP EMOG PATH MAIL PASS EXPR FUNC MESG BLOG DATA',function(d,r,e)
         {
            if(!d){return this[0]};  if(!d.trim()){return this[1]};  if(!isNaN((d))){return this[2]};  if(d.length<2){return this[3]};
            if((/^[a-zA-Z0-9]{2,36}+$/).test(d)){return this[4]};  if((/^[a-zA-Z0-9_-]{3,256}+$/).test(d)){return this[5]};
            if('true fals false yes no on off'.split(' ').indexOf(d.toLowerCase())>-1){return this[6]};
            if(['""',"''",'``','()','[]','{}','<>','⋖⋗'].indexOf((d[0]+d.slice(-1)))>-1){return this[7]};
            if((d.length<4) && (d.length>1))
            {
               e=":) ;) :P :D :| :/ :O :( ;( :'( :-) ;-) :-P :-D :-| :-/ :-O :-( ;-( 8) \\O O/ \\O/ :*".split(' ');
               if(e.indexOf(d.toUpperCase())>-1){return this[8]}
            }
            if(d.match(/^[a-zA-Z0-9-\/\.⁄_]{1,256}+$/)){return this[9]};
            if(d.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)){return this[10]};
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/.test(d)){return this[11]};
            if(d.match(/^\/[\s\S]+\/$/)){return this[12]};
            if(d.trim().split('\n').join('').split(' ').join('').split('function(').length>1){return this[13]};
            if((d.length>2)&&((d.indexOf('\n')>-1)||(d.indexOf(' ')>-1))&&(/^(?=.*[a-z])/.test(d))){ return this[((d.length<=60)?14:15)]};
            return this[16];
         }],

         ['FUNC','VOID METH TOOL NODE',function(d,r){}],

         ['LIST','VOID VECT TEXT FORM NODE TASK MIXD',function(d,r){}],

         ['FORM','VOID PLOT DATA TOOL NODE FAIL',function(d,r){}],

         ['TOOL','VOID MATH TEXT DEVL',function(d,r){}],

         ['PROC','CRON BIOS MAIN MULE',function(d,r){}],
      ])
      .forEach(function(l){ var o={};  l[1].split(' ').forEach(function(w,i){o[i]=Define(w)});  d[l[0]]=l[2].bind(o); });

      return d;
   }()));
// --------------------------------------------------------------------------------------------------------------------------------------------
