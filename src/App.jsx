import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false); // Default to including numbers
  // const [includeLetters, setIncludeLetters] = useState(true); // Default to including letters
  const [includeChar, setIncludeChar] = useState(false); 
  const passString = "QWERTYUIOPASDFGHJKLZCVBNM";
  const passNum = "1234567890";
  const passChar = "!@#$%^&*";

  // Function to generate password based on the selected criteria
  const generatePass = () => {
    let allChars = '';
    // Check if letters should be included
    if (includeChar) {
      allChars += passChar; // Letters added to the pool
    }
    // Check if numbers should be included
    if (includeNumbers) {
      allChars += passNum; // Numbers added to the pool
    }
    // Always include special characters
    allChars += passString;

    let genPass = '';

    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * allChars.length);
      genPass += allChars[randIndex]; // Generate the password
    }

    return genPass;
  };

  // Effect to generate an initial password when the app loads
  useEffect(() => {
    setPassword(generatePass());
  }, [length, includeNumbers, includeChar]); // Re-generate password when length or options change

  // Function to check if any number from the password exists in the number string
  const checkForNumbers = (password, numberString) => {
    for (let char of password) {
      if (/\d/.test(char)) { // Check if the character is a number
        if (numberString.includes(char)) {
          console.log(`Number ${char} exists in the number string.`);
          return true; // Return true if any number exists
        }
      }
    }
    return false; // Return false if no number exists
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Password Generator</h1>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-lg text-gray-700">Generated Password</label>
            <input
              type="text"
              id="password"
              className="w-full bg-gray-200 rounded-xl px-4 py-2 text-xl text-center font-semibold focus:outline-none text-blue-400"
              placeholder="Your password will appear here"
              readOnly
              value={password}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="length" className="text-lg text-gray-700">Password Length: <span id="length">{length}</span></label>
            <input
              type="range"
              min="6"
              max="40"
              value={length}
              name="passlen"
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full bg-blue-300 rounded-lg cursor-pointer"
            />
            <label htmlFor="passlen" className="text-black">Length: {length}</label>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg text-gray-700">Include Characters:</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="checkbox"
                  checked={includeChar}
                  onChange={() => setIncludeChar(!includeChar)}
                />
                Letters
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                Numbers
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                const generatedPassword = generatePass();
                setPassword(generatedPassword);
                console.log(`Generated password: ${generatedPassword}`);
                // Optionally, check for numbers in the generated password
                const numberString = "1234567890"; // Example number string
                checkForNumbers(generatedPassword, numberString);
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
