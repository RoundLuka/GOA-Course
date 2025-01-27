// 3) Dynamic Attributes
// Create a component that renders an <img> element.
// Pass dynamic src and alt attributes using an object of values.

const RenderImage = ({src, alt }) => {
    return <img src={src} alt={alt} />;
  };
  
  export default function App() {
  
    const imageDetails = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png",
      alt: "Lua Logo"
    };
  
    return (
      <main>
        <RenderImage src={imageDetails.src} alt={imageDetails.alt} />
      </main>
    );
}