
import style from "./Pagination.module.css";


const Pagination = ({ perPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.back}>
      {pageNumbers.map((number) => (
        <button
          className={style.btn}
          key={number}
          onClick={() => {
            paginate(number);
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
