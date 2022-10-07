import style from "./Card.module.css";

const Card = ({ name, type, image, id }) => {
  const idText = () => {
    if (id > 99) {
      return id;
    } else if (id > 9) {
      return "0" + id;
    } else {
      return "00" + id;
    }
  };

  return (
    <div className={style.background}>
      <div className={style.min}>
        <img src={image} alt="miniature" className={style.image} />
      </div>
      <div className={style.info}>
        <a>
          Name:
          <br />
          {name}
        </a>
        <a>
          Type:
          <br />
          {type}
        </a>
      </div>
    </div>
  );
};

export default Card;
