// interface Icard {logement:}

const Card = ({ logement }:any) => {
    return (
      <a href={`/logement/${logement.id}`}>
        <li>
          <img src={logement.pictures[0]} alt="" />
          <h2>{logement.title}</h2>
        </li>
      </a>
    );
  };
  
  export default Card;
  