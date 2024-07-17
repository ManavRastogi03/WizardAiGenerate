import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar.jsx';
import Textarea from './components/Textarea.jsx';
import Loader from './components/Loader.jsx';
import RobotImage from '../public/Robot.jpg'; // Adjust the path according to your project structure

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function generateAI() {
    console.log("Loading...!!");
    setLoading(true);
    try {
      const res = await axios({
        method: 'post',
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        data: {
          contents: [{
            parts: [{
              text: question
            }]
          }]
        }
      });
      setResponse(res.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating AI content:", error);
      setResponse("Error generating AI content");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white" 
      style={{ backgroundImage: `url(${RobotImage})` }}
    >
      <div className="bg-green-200 bg-opacity-70 p-4 rounded-lg">
      <h1 className="bg-green-300 p-4 text-center font-italic text-xl text-orange-600">😎😎😎Welcome To Wizard World...!😎😎😎</h1>
        <Searchbar setQuestion={setQuestion} generateAI={generateAI} />
        {loading ? <Loader /> : <Textarea response={response} />}
      </div>
    </div>
  );
}

export default App;
