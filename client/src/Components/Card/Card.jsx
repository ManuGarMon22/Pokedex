import style from "./Card.module.css";

const Card = ({ name, type, image, id }) => {
  function text(types) {
    var text = types[0];
    let i = 1;
    while (i < types.length) {
      text = text + "/" + types[i];
      i++;
    }
    return text;
  }

  return (
    <div className={style.background}>
      <div className={style.min}>
        <img
          src={
            image
              ? image
              : "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fa/latest/20220604130249/Unown_%3F_HOME.png/120px-Unown_%3F_HOME.png"
          }
          alt="miniature"
          className={style.image}
        />
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
