import React, { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import "./OrbitHero.css";
import { div } from "framer-motion/client";

export default function OrbitHero() {
  const { theme } = useTheme();

  return (

   
    <div className={`orbit-hero ${theme}-hero`}>

      <ol reversed class="paces" lang="en">
	<li class="pace js">DevCloud
        
	</li>
	<li class="pace css">Frontend
     
        </li>
	<li class="pace html">API
       
        </li>
	<li class="pace url">Database
       
        </li>
	<li class="pace http">Backend
        
        </li>
	<li class="pace tcpip">Lang.
        
        </li>	
     
</ol>


    </div>
  );
}
