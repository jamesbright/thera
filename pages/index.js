import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [key, setKey] = useState("");

  function addKey(event) {
    event.preventDefault();
    process.env.OPENAI_API_KEY = key;
  }
  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        //document.getElementById("apikey-form").style.display = "block";
        throw data.error || new Error(`Request failed with status ${response.status}`);
    
      }

      setResult(data.result);
      setPrompt("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      //alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Thera</title>
         <meta charSet="utf-8" name="viewport" 
        content= "width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/thera.png" />
      </Head>
  
  /**
  <form className={styles.apikeyform}  id="apikey-form" onSubmit={addKey}>
        <p>OpenAI API key not configured. <br>
        </br>please go to <a href="https://platform.openai.com/account/api-keys">https://platform.openai.com/account/api-keys</a> to get an API key</p>
          <input
            type="text"
            id="key"
            placeholder="Enter APIKey"
          value={process.env.OPENAI_API_KEY}
          onChange={(e) => setKey(e.target.value)}
          />
          <input type="submit" value="Save" />
      </form>**/
      
      <main className={styles.main}>
        <img src="/thera.png" className={styles.icon} />
        <h1>Therapy Mind</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        <div className={styles.result}><p>{result || "My name is Thera. I'm a mental health chatbot designed to help depressed people"}</p></div>
      </main>
    </div>
  ); 
}
