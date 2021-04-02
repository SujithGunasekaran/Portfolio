import { useEffect } from 'react';
import Home from '../Component/Home';
import aos from 'aos';
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    aos.init();
  })
  return (
    <div>
      <Home />
    </div>
  )
}
export default Main;
