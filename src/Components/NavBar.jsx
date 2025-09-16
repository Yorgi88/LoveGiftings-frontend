import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from '../assets/love-giftings-logo.svg';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';


const NavBar = () => {

   const cartItems = useSelector((state)=>state.cart.items.items) || [];
   const itemCount = cartItems.reduce((total, item)=> total + item.quantity, 0);


  return (
    <Navbar expand="md" bg="light" variant="light" className="shadow-sm">
      <Container>
        {/* Brand/Logo */}
        {/* <Navbar.Brand href="#intro" className="fw-bold text-secondary">
          LoveGiftings
        </Navbar.Brand> */}
       
         
          <Link to={'/'} className="navbar-brand d-flex align-items-center">
            <img src={Logo} alt="LoveGiftings Logo" className="me-2" style={{ width: '30px', height: '30px' }} />
            <span className="fw-bold text-secondary">LoveGiftings</span>
          </Link>
       

        {/* Cart (always visible on mobile) */}
        {/* <Nav.Link href="#cart" className="fw-bold text-dark ms-auto d-md-none">
          <i className="bi bi-cart"></i> Cart (0)
        </Nav.Link> */}
        <Nav.Link href="#cart" className="fw-bold text-dark ms-auto" as={Link} to={'/cart'}>
            <i className="bi bi-cart"></i> Cart ({itemCount})
        </Nav.Link>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="main-nav" className="ms-2" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#journals">Journals</Nav.Link>
            <Nav.Link href="#cups">Cups</Nav.Link>
            <Nav.Link href="#bottles">Slick Bottles</Nav.Link>
            <Nav.Link href="#gifts">Gift Boxes</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Get in Touch</Nav.Link>
            <Nav.Link as={Link} to={'/orders'}>My Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


















// const NavBar = () => {
//   return (
//     <Navbar expand="md" bg="light" variant="light" className="shadow-sm">
//       <Container>
//         {/* Brand/Logo */}
//         <Navbar.Brand href="#intro" className="fw-bold text-secondary">
//           LoveGiftings
//         </Navbar.Brand>

//         {/* Toggle Button for Mobile */}
//         <Navbar.Toggle aria-controls="main-nav" />

//         {/* Navbar Links */}
//         <Navbar.Collapse id="main-nav" className="justify-content-end">
//           <Nav>
//             <Nav.Link href="#journals">Journals</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             <Nav.Link href="#bottles">Slick Bottles</Nav.Link>
//             <Nav.Link href="#gifts">GiftPacks</Nav.Link>
//             <Nav.Link href="#cups">Cups</Nav.Link>
            
//             {/* Show Pricing as a link on mobile, button on desktop */}

            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;


