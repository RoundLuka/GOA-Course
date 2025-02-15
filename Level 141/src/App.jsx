// 1) ავაგოთ ვებსატიი რესურსებში დაწერილი მასალთ <3 გამოვიყენოთ useEffect hook

import { useEffect, useState} from "react";
// import ProductList from "./UseEffect"
// import Journal from "./Level151"
// import App123 from "./components/test123"
// import Container from "./components/level 159/container"

export default function App() {
  // const [width, setWidth] = useState(window.innerWidth)
  // const [height, setHeight] = useState(window.innerHeight)
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth)
  //     setHeight(window.innerHeight)
  //     })
  //   }, [])

  // return (
  //   <>
  //     <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
  //       <div>width: {width}</div>

  //       <div>height: {height}</div>
        
  //     </div>
  //   </>
  // )
  // <Journal></Journal>
  
  // return (
  //   <Container />
  // )

  const accounts = [];
  
  const [logged, setLogged] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    for(const acc in accounts) {
      if(acc.email == email) {
        return "Account already exists"
      }

    const account = {
      email: email,
      password: password
    }

    accounts.push(account)
    console.log(accounts)
    }
  }
  
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      for(const acc in accounts) {
        if(acc.email === email && acc.password === password) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      }

    }

  return (
    <>
      <h1>To Do List</h1>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
    </>
  )

}