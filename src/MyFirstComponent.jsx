export default function MyFirstComponent() {
  let x=10;
  const person={
    name:"Ahmad",
    age:24
  }

  const qStyle={
backgroundColor:"green",
fontSize : "10 px",
color:"white",
bordeRadius:"15px",
  };
  return( 
  <>
  <h2>{x+1}The first component I've made</h2>
  <q style={qStyle}>You can return more than elemant by using fragment </q>
  <p>{testfunction() +" "+ person.age}</p>
  <button onClick={alert_name}>HI every one</button>
  </>
  );
}

function testfunction() {
  return"you can use JS fun";
}

function alert_name() {
  alert(`alert`);
}