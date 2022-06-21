import { useEffect, useState } from 'react';
import { profileService } from '../services';
import Routes from './Routes';
import { AuthContext } from '../context/AuthContext'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await profileService()
        if (res.id) {
          setUser(res)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchProfile()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>
        <Routes />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
