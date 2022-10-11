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

  function text(types) {
    var text = types[0];
    let i = 1;
    while (i < types.lenght) {
      text = text + "/" + types[i];
      i++;
    }
    return text;
  }

  return (
    <div className={style.background}>
      <div className={style.min}>
        <img src={image} alt="miniature" className={style.image} />
      </div>
      <div className={style.info}>
        <span>
          Name:
          <br />
          {name}
        </span>
        <span>
          Type:
          <br />
          {text(type)}
        </span>
      </div>
    </div>
  );
};

export default Card;
