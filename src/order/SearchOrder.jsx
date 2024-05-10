import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const orderRef = useRef();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      navigate(`/order/${orderRef.current.value}`);
    }
  };

  return (
    <form>
      <input
        className="input w-[130px] bg-yellow-100 py-2 focus:w-[150px] sm:w-[250px] sm:focus:w-[270px]"
        placeholder="Search order #"
        onKeyDown={handleNavigate}
        ref={orderRef}
      />
    </form>
  );
}

export default SearchOrder;
