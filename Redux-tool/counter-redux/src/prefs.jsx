import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFontSize, toggleNotifications } from './prefSlic';

function Prefs() {
  const prefs = useSelector((state) => state.prefs);
  const dispatch = useDispatch();

  const [localFontSize, setLocalFontSize] = useState(prefs.fontSize);

  const handleFontSizeChange = (size) => {
    setLocalFontSize(size);
    dispatch(setFontSize(size));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Preferences</h2>

        <div className="mb-6">
          <p className="mb-2 text-lg">Font Size: <span className="font-mono">{localFontSize}</span></p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleFontSizeChange('large')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Large
            </button>
            <button
              onClick={() => handleFontSizeChange('small')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Small
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2 text-lg">Notifications: <span className="font-mono">{prefs.notifications ? 'On' : 'Off'}</span></p>
          <button
            onClick={() => dispatch(toggleNotifications())}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prefs;
