<?php
   $host        = "host=127.0.0.1";
   $port        = "port=5432";
   $dbname      = "dbname=prakhar-821";
   $credentials = "user=prakhar-821 password=db-prakhar-821-11713";

   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
?>
