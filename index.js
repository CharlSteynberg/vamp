#!/usr/bin/node

   require('./core/libs');
   require('./core/bios');


   if (CLI)
   {
      require('./apps/vudu/cli');
   }



   // Import('/bios/core');
