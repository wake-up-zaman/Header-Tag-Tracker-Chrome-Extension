import React, { useEffect, useState } from "react";
import '../assets/tailwind.css';
function App() {
  const [headers, setHeaders] = useState([]);
  console.log(headers);
  const [click,setClick]=useState(false);

  const getAllHeaders=()=>{
      setClick(true);
  }
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "getHeaders" }, function (response) {
        setHeaders(response.headers);
      });
    });
  }, [click]);

  return (
    <div className="App">
      <h1 className="text-center">Header Tags Extension</h1>
      <button onClick={getAllHeaders}>
        Get Headers
        </button>
        { click &&
                <ul>
                {headers.map((header, index) => (
                  <li key={index}>{header}</li>
                ))}
              </ul>
        }

    </div>
  );
}

export default App;
