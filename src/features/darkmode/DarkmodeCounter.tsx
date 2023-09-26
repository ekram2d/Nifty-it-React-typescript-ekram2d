import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './darkModeSlice'; // Import your actions from your slice
import { RootState } from '../../app/store'; // Import RootState

export function DarkmodeCounter() {
  const mode = useSelector((state: RootState) => state.darkMode.mode); // Specify RootState type
  const dispatch = useDispatch();

  const containerStyle = {
    background: mode ? 'black' : 'white',
    color: mode ? 'white' : 'black', // Set text color to white when bg is black
    minHeight: '100vh',
    transition: 'background 0.3s, color 0.3s', // Add transitions for both background and color
  };

  return (
    <div style={containerStyle}>
      <div>
        <button
          className='btn btn-sm'
          aria-label="Toggle Dark Mode"
          onClick={() => dispatch(toggleDarkMode())}
        >
          Toggle Dark Mode
        </button>
        <span className='text-2xl p-2'>{mode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
      {/* Add your other components/content here */}
    </div>
  );
}
