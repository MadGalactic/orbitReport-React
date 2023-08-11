const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, index) => (
            <tr key={sat.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        
        </tbody>
      </table>
  );
};

export default Table;

// {displaySats.map((sat, id) => {
//   return (
//     <button onClick={() => filterByType(sat)} key={id}>
//       {sat} Orbit
//     </button>
//   );
// })}