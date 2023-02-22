import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import { ChatGPTApi } from 'chatgpt-api-client';

function App() {

  // const configuration = new Configuration(
  //   { apiKey: "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" }
  // );
  // const openai = new OpenAIApi(configuration);

  // React.useEffect(() => {
  //   openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: "Where a brussels city situated ?",
  //     temperature: 0.5,
  //     max_tokens: 300
  //   }).then((response) => {
  //     console.log("====> resp : ==> ", response)
  //   }, error => {
  //     console.error("ERROR => ", error);
  //   });
  // }, [])

  const api = new ChatGPTApi({ apiKey: "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" });

  async function call() {
    let res = await api.getModels();
    console.log("===> ", res);
  }

  React.useEffect(() => {
    //call();

    api.sendMessage({prompt:"How are you ?"}).then((response) => {
      console.log("===+>", response);
    }, error => {
      console.error("ERR", error);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
