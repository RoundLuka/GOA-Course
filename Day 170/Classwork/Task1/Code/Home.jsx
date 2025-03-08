const Home = ({error}) => {
    if(error) {
      throw new "Error"
    }
    
    return (
      <div>
        <p>Home</p>
      </div>
    )
  }
  
  export default Home;