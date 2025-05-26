"use client";

import { useEffect } from "react";

export function ConsoleGreeting() {
  useEffect(() => {
    console.log(
      `%cHello, you little wannabe hacker! 🕵️‍♂️`,
      "color: #ff69b4; font-size: 18px; font-weight: bold;"
    );
    console.log(`%cNow, let's see...`, "color: #ffa500; font-size: 14px;");
    console.log(
      `✅ Click "Toggle Device Toolbar" to check if this is responsive.  
✅ Type "document.designMode='on'" to mess with the page.  
✅ Open "Sources" tab pretending you understand minified code.  
✅ Spend 10 minutes looking for hidden Easter eggs.  
❌ Realize there's no secret API key here.
🤡 Well, enjoy poking around! Just don't break anything… or do.`
    );
    console.log(
      `%cP.S. If you're reading this, you're either a developer or very, very curious. Respect. ✊`,
      "color: #00ff00; font-size: 12px;"
    );
  }, []);

  return null;
} 