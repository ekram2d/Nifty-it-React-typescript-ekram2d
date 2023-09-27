import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './darkModeSlice';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export function DarkmodeCounter() {
  const mode = useSelector((state: RootState) => state.darkMode.mode);
  const dispatch = useDispatch();



  return (
    <>
      <div>
        <button
          className='btn btn-sm bg-red-600 text-white '
          aria-label="Toggle Dark Mode"
          onClick={() => dispatch(toggleDarkMode())}
        >Theme Toggle
          {mode ? (
            <FontAwesomeIcon icon={faSun} /> // Light mode icon
          ) : (
            <FontAwesomeIcon icon={faMoon} /> // Dark mode icon
          )}

        </button>
      </div>
      {/* Add your other components/content here */}
    </>
  );
}
