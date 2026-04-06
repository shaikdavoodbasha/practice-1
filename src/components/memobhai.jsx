// import React, { useContext, useMemo, useState } from "react";
// import { MyAppContext } from "../context/appcontext";

// const Memobhai = () => {
//   const { name1, age } = useContext(MyAppContext);
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);
//   const calculaltions = useMemo(() => {
//     console.log("Calculating ........");
//     return count * 2;
//   }, [count]);
//   calculaltions;
//   // const calculaltions = ()=>{
//   //     console.log("calculaltions...........")
//   //     return count *2
//   // }
//   // calculaltions();

//   return (
//     <div className="flex justify-center items-center">
//       <button
//         className="px-2 py-1.5 border"
//         onClick={() => setCount(count + 1)}
//       >
//         increment
//       </button>
//       <h1>count {count}</h1>
//       <button
//         className="px-2 py-1.5 border"
//         onClick={() => setValue(value + 1)}
//       >
//         increment value
//       </button>
//       <p>{value}</p>
//       <p>{name1}</p>
//       <p>{age}</p>
//     </div>
//   );
// };

// export default Memobhai;
