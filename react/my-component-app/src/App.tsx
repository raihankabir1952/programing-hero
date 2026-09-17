import WelcomeCard from './WelcomeCard';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import ProductCard from './ProductCard';
import StatusBadge from './StatusBadge';
import StatusBadges from './StatusBadges';
import UserGreeting from './UserGreeting';
import Cart from './Cart';
import StudentList from './StudentList';
// import type { Student } from "./type/Student";
import './App.css'

function App() {
  return (
    <div>
      <WelcomeCard />
      <Footer />
      <ProfileCard/>
      <h2>Welcome to our product</h2>
      <ProductCard productName="Laptop" price={999.99} inStock={true} />
      <ProductCard productName="Mobile" price={999.99} inStock={true} />
      <ProductCard productName="Tablet" price={499.99} inStock={false} />
      <StatusBadge isActive={true} /> <br />
      <StatusBadge isActive={false} /><br />

      <StatusBadges isActive={true} /> <br />
      <StatusBadges isActive={false} /><br />

      <Cart itemCount={3} /><br/>
      <Cart itemCount={0} /><br/>

      <UserGreeting username="John" /><br/>
      <UserGreeting /><br/>

      <StudentList students={[
        { id: 1, name: "Alice", grade: 85 },
        { id: 2, name: "Bob", grade: 35 },
        { id: 3, name: "Charlie", grade: 75 }
      ]} />


    </div>
  );
}

export default App;